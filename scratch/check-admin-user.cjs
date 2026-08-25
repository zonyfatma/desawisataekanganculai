const Database = require("better-sqlite3");
const bcrypt = require("bcryptjs");
const path = require("path");

const dbPath = path.join(__dirname, "..", "data", "ekang_anculai.db");
const db = new Database(dbPath);

const row = db.prepare("SELECT * FROM users WHERE username = 'admin'").get();
if (row && bcrypt.compareSync("admin123", row.password_hash)) {
  console.log("VERIFIED: Password 'admin123' is active and valid for username 'admin'.");
} else {
  console.error("Verification failed.");
}
