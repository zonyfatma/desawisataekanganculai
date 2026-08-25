/**
 * SMOKE TEST: STEP 3 - SUPABASE FOUNDATION & REPOSITORY LAYER
 *
 * Verifikasi:
 * 1. DATABASE_MODE=sqlite mode behavior (reads local SQLite successfully)
 * 2. DATABASE_MODE=supabase mode behavior with missing credentials (MUST throw explicit error, NO silent fallback)
 * 3. Supabase Admin configuration validator (detects missing/placeholder keys safely)
 */

import {
  getDatabaseMode,
  getVillageInfo,
  getDestinations,
  getPackages,
} from "../src/lib/db-repository.server.ts";
import { isSupabaseAdminConfigured } from "../src/lib/supabase-admin.server.ts";

console.log("=== RUNNING STEP 3 FOUNDATION SMOKE TESTS ===\n");

let passed = 0;
let total = 0;

function assert(condition, testName) {
  total++;
  if (condition) {
    console.log(`✅ PASS: ${testName}`);
    passed++;
  } else {
    console.error(`❌ FAIL: ${testName}`);
  }
}

// ----------------------------------------------------
// TEST 1: isSupabaseAdminConfigured() with empty/placeholder keys
// ----------------------------------------------------
process.env["SUPABASE_URL"] = "";
process.env["SUPABASE_SERVICE_ROLE_KEY"] = "";
assert(
  isSupabaseAdminConfigured() === false,
  "isSupabaseAdminConfigured() returns false when credentials are empty",
);

process.env["SUPABASE_URL"] = "https://your-project.supabase.co";
process.env["SUPABASE_SERVICE_ROLE_KEY"] = "your-key";
assert(
  isSupabaseAdminConfigured() === false,
  "isSupabaseAdminConfigured() rejects placeholder credentials",
);

// ----------------------------------------------------
// TEST 2: DATABASE_MODE=sqlite mode (Explicit Local SQLite)
// ----------------------------------------------------
process.env["DATABASE_MODE"] = "sqlite";
assert(getDatabaseMode() === "sqlite", "getDatabaseMode() correctly returns 'sqlite'");

try {
  const villageInfo = await getVillageInfo();
  assert(
    typeof villageInfo === "object" && Boolean(villageInfo.nama),
    "getVillageInfo() reads village_info from SQLite",
  );

  const destinations = await getDestinations({ publishedOnly: false });
  assert(Array.isArray(destinations), "getDestinations() returns an array from SQLite");

  const packages = await getPackages({ publishedOnly: true });
  assert(
    Array.isArray(packages) && packages.length > 0,
    "getPackages() reads packages from SQLite",
  );
} catch (err) {
  assert(false, `DATABASE_MODE=sqlite failed: ${err.message}`);
}

// ----------------------------------------------------
// TEST 3: DATABASE_MODE=supabase mode with missing credentials
// MUST throw explicit error, MUST NOT silently read SQLite
// ----------------------------------------------------
process.env["DATABASE_MODE"] = "supabase";
process.env["SUPABASE_URL"] = "";
process.env["SUPABASE_SERVICE_ROLE_KEY"] = "";
assert(getDatabaseMode() === "supabase", "getDatabaseMode() correctly defaults to 'supabase'");

let threwExpectedError = false;
let errorMessage = "";
try {
  await getVillageInfo();
} catch (err) {
  threwExpectedError = true;
  errorMessage = err.message;
}

assert(
  threwExpectedError === true,
  "DATABASE_MODE=supabase throws explicit error when credentials are unavailable",
);
assert(
  errorMessage.includes("SUPABASE CONFIG ERROR") || errorMessage.includes("belum disetel"),
  "DATABASE_MODE=supabase error message is descriptive and clear",
);

console.log(`\n========================================`);
console.log(`SMOKE TEST RESULTS: ${passed}/${total} TESTS PASSED`);
console.log(`========================================\n`);

if (passed !== total) {
  process.exit(1);
}
