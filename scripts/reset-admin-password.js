import Database from "better-sqlite3";
import bcrypt from "bcryptjs";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.join(__dirname, "..", "data", "ekang_anculai.db");

if (!fs.existsSync(dbPath)) {
  console.error("[ERROR] Database SQLite tidak ditemukan di:", dbPath);
  process.exit(1);
}

const db = new Database(dbPath);

// Baca password baru dari environment variable atau CLI arg
const newPassword = (
  process.env.ADMIN_NEW_PASSWORD ||
  process.env.ADMIN_INITIAL_PASSWORD ||
  process.argv[2] ||
  ""
).trim();

const targetUsername = (
  process.env.ADMIN_USERNAME ||
  process.env.ADMIN_INITIAL_USERNAME ||
  "admin"
).trim();

if (!newPassword || newPassword.length < 8) {
  console.error("===================================================================");
  console.error("[SECURITY ERROR] Password baru tidak diberikan atau kurang dari 8 karakter.");
  console.error("===================================================================");
  console.error("Cara penggunaan aman:");
  console.error("  1. Lewat Environment Variable (Direkomendasikan):");
  console.error(
    '     ADMIN_NEW_PASSWORD="KataSandiKuatAnda123!" node scripts/reset-admin-password.js',
  );
  console.error("");
  console.error("  2. Lewat Argumen CLI:");
  console.error('     node scripts/reset-admin-password.js "KataSandiKuatAnda123!"');
  console.error("===================================================================");
  process.exit(1);
}

const hash = bcrypt.hashSync(newPassword, 10);

// Pastikan tabel users ada
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'admin',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Cek apakah user ada, jika belum ada buat baru, jika sudah ada update
const existing = db.prepare("SELECT id FROM users WHERE username = ?").get(targetUsername);

if (existing) {
  const result = db
    .prepare("UPDATE users SET password_hash = ? WHERE username = ?")
    .run(hash, targetUsername);
  console.log(
    `[BERHASIL] Kata sandi untuk admin '${targetUsername}' berhasil diperbarui (${result.changes} row diubah).`,
  );
} else {
  db.prepare("INSERT INTO users (username, password_hash, role) VALUES (?, ?, ?)").run(
    targetUsername,
    hash,
    "admin",
  );
  console.log(`[BERHASIL] Akun admin '${targetUsername}' baru berhasil dibuat.`);
}

// Bersihkan sesi lama demi keamanan
db.exec("DELETE FROM sessions;");
console.log(
  "[SECURITY] Seluruh sesi admin yang aktif telah dibersihkan untuk mewajibkan login ulang.",
);
