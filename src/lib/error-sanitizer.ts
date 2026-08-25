/**
 * Server Error Sanitizer
 * Mencegah kebocoran informasi sensitif (stack trace, path disk, SQL query/error, token) ke client.
 */

const SENSITIVE_PATTERNS: RegExp[] = [
  /sqlite/i,
  /syntax\s+error/i,
  /constraint/i,
  /at\s+.*\((.*):\d+:\d+\)/i, // V8 stack trace line
  /[a-z]:\\[^"'\n\r]+/i, // Windows directory paths
  /\/(?:home|var|usr|etc|tmp|node_modules|src|app)\/[^"'\n\r]+/i, // Linux directory paths
  /password_hash/i,
  /process\.env/i,
  /session_token/i,
  /better-sqlite3/i,
  /anonymous/i,
  /referenceerror/i,
  /typeerror/i,
  /evalerror/i,
];

export function sanitizeErrorMessage(err: unknown): string {
  if (!err) {
    return "Terjadi kesalahan internal pada server.";
  }

  const rawMessage = err instanceof Error ? err.message : String(err);

  // Periksa apakah pesan mengandung informasi runtime / database / file system sensitif
  for (const pattern of SENSITIVE_PATTERNS) {
    if (pattern.test(rawMessage)) {
      return "Terjadi kesalahan pemrosesan pada server. Silakan coba beberapa saat lagi.";
    }
  }

  // Batasi panjang pesan error yang diizinkan untuk mencegah flooding
  if (rawMessage.length > 300) {
    return rawMessage.slice(0, 300) + "...";
  }

  return rawMessage;
}
