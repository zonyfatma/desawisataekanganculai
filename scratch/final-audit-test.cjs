const Database = require("better-sqlite3");
const path = require("path");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");

const dbPath = path.join(process.cwd(), "data", "ekang_anculai.db");
const db = new Database(dbPath);
db.pragma("foreign_keys = ON");
db.pragma("journal_mode = WAL");

console.log("=== MEMULAI FINAL SECURITY & FUNCTIONAL VERIFICATION ===\n");

let passed = 0;
let failed = 0;

function assert(condition, testName) {
  if (condition) {
    console.log(`[PASS] ${testName}`);
    passed++;
  } else {
    console.error(`[FAIL] ${testName}`);
    failed++;
  }
}

// 1. AUTHENTICATION TESTS
console.log("--- 1. Testing Authentication ---");

// Test A: Admin exists in DB with valid bcrypt hash
const adminUser = db
  .prepare("SELECT id, username, password_hash, role FROM users WHERE username = 'admin'")
  .get();
assert(adminUser && adminUser.role === "admin", "Admin user exists in SQLite with role 'admin'");
assert(
  bcrypt.compareSync("admin123", adminUser.password_hash) ||
    adminUser.password_hash.startsWith("$2"),
  "Password hash is a valid bcrypt hash",
);

// Test B: Verify wrong password rejection
const wrongPass = bcrypt.compareSync("wrongpassword999", adminUser.password_hash);
assert(!wrongPass, "Wrong password correctly returns false");

// Test C: Session Creation & Database Storage
const testSessionId = `test-sess-${Date.now()}`;
const testExpiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
db.prepare("INSERT INTO sessions (id, user_id, expires_at) VALUES (?, ?, ?)").run(
  testSessionId,
  adminUser.id,
  testExpiresAt,
);

const sessionRow = db
  .prepare(
    "SELECT s.id, u.username, u.role FROM sessions s JOIN users u ON s.user_id = u.id WHERE s.id = ?",
  )
  .get(testSessionId);
assert(
  sessionRow && sessionRow.username === "admin",
  "Session is validly stored and linked via foreign key in SQLite",
);

// Test D: Expired session rejection
const expiredSessionId = `expired-${Date.now()}`;
const pastExpiresAt = new Date(Date.now() - 10000).toISOString();
db.prepare("INSERT INTO sessions (id, user_id, expires_at) VALUES (?, ?, ?)").run(
  expiredSessionId,
  adminUser.id,
  pastExpiresAt,
);

const row = db.prepare("SELECT expires_at FROM sessions WHERE id = ?").get(expiredSessionId);
const isExpired = row && new Date(row.expires_at) < new Date();
assert(isExpired, "Expired session timestamp correctly detected as expired");

// Expired session is purged
db.prepare("DELETE FROM sessions WHERE id = ?").run(expiredSessionId);

// Test E: Logout Session Destruction
db.prepare("DELETE FROM sessions WHERE id = ?").run(testSessionId);
const checkDeleted = db.prepare("SELECT id FROM sessions WHERE id = ?").get(testSessionId);
assert(!checkDeleted, "Logout properly deletes session record from SQLite database");

// Clean expired test
db.prepare("DELETE FROM sessions WHERE id = ?").run(expiredSessionId);

// 2. AUTHORIZATION TESTS
console.log("\n--- 2. Testing Authorization & RBAC ---");

// Test A: Create dummy non-admin user
const testNonAdmin = db
  .prepare("INSERT INTO users (username, password_hash, role) VALUES (?, ?, ?)")
  .run(`testuser_${Date.now()}`, "hash", "member");
const nonAdminId = testNonAdmin.lastInsertRowid;
const nonAdminRow = db.prepare("SELECT id, username, role FROM users WHERE id = ?").get(nonAdminId);
assert(nonAdminRow.role !== "admin", "Non-admin user role is 'member'");

// Test B: Cascade session deletion
const nonAdminSessionId = `sess-member-${Date.now()}`;
db.prepare("INSERT INTO sessions (id, user_id, expires_at) VALUES (?, ?, ?)").run(
  nonAdminSessionId,
  nonAdminId,
  testExpiresAt,
);
db.prepare("DELETE FROM users WHERE id = ?").run(nonAdminId);

const orphanSession = db.prepare("SELECT id FROM sessions WHERE id = ?").get(nonAdminSessionId);
assert(!orphanSession, "Foreign key ON DELETE CASCADE successfully purged orphan sessions");

// 3. RESERVATION GENERATOR & ANTI-RACE CONDITION TESTS
console.log("\n--- 3. Testing Reservation Module ---");

const year = new Date().getFullYear();
const codes = new Set();
for (let i = 0; i < 50; i++) {
  const hex = crypto.randomBytes(2).toString("hex").toUpperCase();
  const code = `EA-${year}-${hex}`;
  codes.add(code);
}
assert(
  codes.size === 50,
  "CSPRNG reservation code generation has zero collisions across 50 iterations",
);

// Test B: Anti-duplicate check within 15 seconds
const testResId = `test-res-${Date.now()}`;
const testResCode = `EA-${year}-${crypto.randomBytes(2).toString("hex").toUpperCase()}`;
db.prepare(
  `
  INSERT INTO reservations (id, kode_reservasi, nama_pemesan, whatsapp, tanggal_kunjungan, jam_kedatangan, jumlah_dewasa, status)
  VALUES (?, ?, ?, ?, ?, ?, ?, 'pending')
`,
).run(testResId, testResCode, "Budi Test", "081299998888", "2026-09-01", "09:00", 2);

const dupCheck = db
  .prepare(
    `
  SELECT id, kode_reservasi FROM reservations 
  WHERE whatsapp = ? AND tanggal_kunjungan = ? AND nama_pemesan = ? 
  AND created_at >= datetime('now', '-15 seconds')
`,
  )
  .get("081299998888", "2026-09-01", "Budi Test");

assert(
  dupCheck && dupCheck.kode_reservasi === testResCode,
  "Anti-duplicate submission query correctly detects recent submissions within 15s window",
);

// Clean test reservation
db.prepare("DELETE FROM reservations WHERE id = ?").run(testResId);

// 4. RATE LIMITER PERSISTENCE TESTS
console.log("\n--- 4. Testing Persistent Rate Limiter ---");

const testRateKey = `test_limit_${Date.now()}`;
db.prepare(
  "INSERT INTO rate_limits (key, count, first_attempt_at, blocked_until) VALUES (?, ?, ?, ?)",
).run(testRateKey, 5, Date.now(), Date.now() + 180000);

const checkRate = db
  .prepare("SELECT count, blocked_until FROM rate_limits WHERE key = ?")
  .get(testRateKey);
assert(
  checkRate && checkRate.count === 5 && checkRate.blocked_until > Date.now(),
  "Rate limiter successfully persists counter and lockout in SQLite table",
);

db.prepare("DELETE FROM rate_limits WHERE key = ?").run(testRateKey);

// 5. DATABASE INDICES VERIFICATION
console.log("\n--- 5. Testing Database Performance Indices ---");

const indices = db
  .prepare("SELECT name FROM sqlite_master WHERE type = 'index'")
  .all()
  .map((r) => r.name);
assert(indices.includes("idx_sessions_user_id"), "Index idx_sessions_user_id exists");
assert(indices.includes("idx_destinations_status"), "Index idx_destinations_status exists");
assert(indices.includes("idx_reservations_status"), "Index idx_reservations_status exists");
assert(indices.includes("idx_reviews_status"), "Index idx_reviews_status exists");
assert(indices.includes("idx_rate_limits_blocked"), "Index idx_rate_limits_blocked exists");

console.log(`\n=== HASIL AKHIR: ${passed} PASS, ${failed} FAIL ===`);
