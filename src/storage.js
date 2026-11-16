// src/storage.js
import { CONFIG } from './config.js';

let localStorageAvailable = null;

export function isLocalStorageAccessible() {
    if (localStorageAvailable !== null) return localStorageAvailable;
    if (typeof localStorage === 'undefined') {
        localStorageAvailable = false;
        return false;
    }
    try {
        const testKey = '__eantrax_storage_test';
        localStorage.setItem(testKey, '1');
        localStorage.removeItem(testKey);
        localStorageAvailable = true;
    } catch (error) {
        localStorageAvailable = false;
        console.warn("Local storage unavailable:", error);
    }
    return localStorageAvailable;
}

export function getStorageKey(userId) {
    if (!userId || userId === 'local') return 'eantrax_data';
    return `${CONFIG.DEFAULT_STORAGE_KEY_PREFIX}${userId}`;
}

export function getFallbackStorageKey(userId) {
    return `${getStorageKey(userId)}_session_fallback`;
}

export function readPersistedData(userId) {
    let saved = null;
    const key = getStorageKey(userId);

    if (isLocalStorageAccessible()) {
        try {
            saved = localStorage.getItem(key) || localStorage.getItem('eantrax_data');
        } catch (error) {
            console.error("Local storage read error:", error);
        }
        if (saved) return saved;
    }

    if (typeof sessionStorage !== 'undefined') {
        try {
            return sessionStorage.getItem(getFallbackStorageKey(userId));
        } catch (error) {
            console.error("Session storage unavailable:", error);
        }
    }
    return null;
}

export function savePersistedData(userId, data) {
    const payload = typeof data === 'string' ? data : JSON.stringify(data);
    const key = getStorageKey(userId);
    let success = false;

    if (isLocalStorageAccessible()) {
        try {
            localStorage.setItem(key, payload);
            localStorage.setItem('eantrax_data', payload);
            success = true;
        } catch (error) {
            console.error("Local storage write error:", error);
        }
    }

    if (typeof sessionStorage !== 'undefined') {
        try {
            sessionStorage.setItem(getFallbackStorageKey(userId), payload);
            success = true;
        } catch (error) {
            console.error("Session storage write error:", error);
        }
    }

    return success;
}
