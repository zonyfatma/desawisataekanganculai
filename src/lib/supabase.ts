import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Read Supabase credentials from environment
const supabaseUrl =
  process.env["SUPABASE_URL"] ||
  (typeof import.meta !== "undefined" && import.meta.env?.["VITE_SUPABASE_URL"]) ||
  "";

const supabaseKey =
  process.env["SUPABASE_ANON_KEY"] ||
  (typeof import.meta !== "undefined" && import.meta.env?.["VITE_SUPABASE_ANON_KEY"]) ||
  "";

export const isSupabaseConfigured = (): boolean => {
  return Boolean(
    supabaseUrl &&
    supabaseKey &&
    !supabaseUrl.includes("your-project") &&
    !supabaseKey.includes("your-key"),
  );
};

let clientInstance: SupabaseClient | null = null;

export const getSupabaseClient = (): SupabaseClient => {
  if (!clientInstance) {
    if (!supabaseUrl || !supabaseKey) {
      console.warn(
        "Supabase credentials not configured. Please set SUPABASE_URL and SUPABASE_ANON_KEY in your .env file.",
      );
    }
    clientInstance = createClient(
      supabaseUrl || "https://placeholder.supabase.co",
      supabaseKey || "placeholder-key",
      {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
      },
    );
  }
  return clientInstance;
};

export const supabase = getSupabaseClient();
