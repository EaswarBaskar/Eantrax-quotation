// src/sync.js
import { supabaseClient } from './supabaseClient.js';
import { CONFIG } from './config.js';
import { savePersistedData, readPersistedData } from './storage.js';

/**
 * Fetch cloud data for the given user from Supabase
 */
export async function fetchUserData(userId) {
    if (!CONFIG.ENABLE_CLOUD_SYNC || !supabaseClient || !userId || userId === 'local') {
        return { data: null, error: null };
    }

    try {
        const { data, error } = await supabaseClient
            .from('user_data')
            .select('data')
            .eq('user_id', userId)
            .maybeSingle();

        if (error) {
            console.error("Supabase load error:", error);
            return { data: null, error };
        }

        return { data: data ? data.data : null, error: null };
    } catch (err) {
        console.error("Supabase load exception:", err);
        return { data: null, error: err };
    }
}

/**
 * Save user data to Supabase and update local storage backup
 */
export async function pushUserData(userId, payload) {
    // 1. Always update local storage first
    savePersistedData(userId, payload);

    if (!CONFIG.ENABLE_CLOUD_SYNC || !supabaseClient || !userId || userId === 'local') {
        return { success: true, cloud: false };
    }

    try {
        const { error } = await supabaseClient
            .from('user_data')
            .upsert({
                user_id: userId,
                data: payload,
                updated_at: new Date().toISOString()
            });

        if (error) {
            console.error("Supabase write error:", error);
            return { success: false, cloud: true, error };
        }

        return { success: true, cloud: true };
    } catch (err) {
        console.error("Supabase write exception:", err);
        return { success: false, cloud: true, error: err };
    }
}

/**
 * Update UI Sync pill elements
 */
export function updateSyncIndicator(status = 'synced') {
    const mobileEl = document.getElementById('mobile-sync-status');
    const desktopEl = document.getElementById('desktop-sync-status');

    const configs = {
        synced: { cls: 'synced', icon: 'fa-cloud', text: 'Synced', title: 'Connected & synced with cloud. Tap to refresh.' },
        syncing: { cls: 'syncing', icon: 'fa-arrows-rotate fa-spin', text: 'Syncing...', title: 'Syncing changes with cloud...' },
        offline: { cls: 'offline', icon: 'fa-cloud-slash', text: 'Offline', title: 'Offline. Changes saved locally and will sync when back online.' },
        error: { cls: 'error', icon: 'fa-triangle-exclamation', text: 'Sync Error', title: 'Cloud sync error. Check internet connection.' }
    };

    const cfg = configs[status] || configs.synced;

    [mobileEl, desktopEl].forEach(el => {
        if (!el) return;
        el.className = `cloud-sync-pill ${cfg.cls}`;
        el.title = cfg.title;
        el.innerHTML = `<i class="fa-solid ${cfg.icon}"></i> <span>${cfg.text}</span>`;
    });
}
