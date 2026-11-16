// src/supabaseClient.js
import { CONFIG } from './config.js';

let supabaseClient = null;

if (CONFIG.ENABLE_CLOUD_SYNC && typeof window !== 'undefined' && window.supabase && typeof window.supabase.createClient === 'function') {
    try {
        supabaseClient = window.supabase.createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_ANON_KEY);
    } catch (e) {
        console.error("Failed to initialize Supabase client:", e);
    }
}

export { supabaseClient };
