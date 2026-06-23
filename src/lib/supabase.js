import { createClient } from '@supabase/supabase-js';

/**
 * Supabase client — used ONLY for contact-form lead capture (insert-only).
 *
 * The client is created lazily and guarded: if the env vars are missing
 * (e.g. during an SSG prerender pass, or before Vercel env is configured),
 * we export `null` instead of throwing, and the contact API surfaces a clear
 * error. This keeps `vite-react-ssg build` and local dev resilient.
 */
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    })
  : null;
