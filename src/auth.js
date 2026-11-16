// src/auth.js
import { supabaseClient } from './supabaseClient.js';

export async function signInWithEmail(email, password) {
    if (!supabaseClient) throw new Error("Supabase client is not initialized");
    return await supabaseClient.auth.signInWithPassword({
        email: email.trim(),
        password: password.trim()
    });
}

export async function signUpWithEmail(email, password) {
    if (!supabaseClient) throw new Error("Supabase client is not initialized");
    return await supabaseClient.auth.signUp({
        email: email.trim(),
        password: password.trim()
    });
}

export async function signInWithGoogle() {
    if (!supabaseClient) throw new Error("Supabase client is not initialized");
    const redirectTo = window.location.origin + window.location.pathname;
    return await supabaseClient.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo }
    });
}

export async function signOut() {
    if (!supabaseClient) return;
    return await supabaseClient.auth.signOut();
}

export async function getCurrentUser() {
    if (!supabaseClient) return null;
    const { data: { user } } = await supabaseClient.auth.getUser();
    return user;
}

export function subscribeToAuthChanges(callback) {
    if (!supabaseClient) return null;
    const { data: { subscription } } = supabaseClient.auth.onAuthStateChange((event, session) => {
        if (typeof callback === 'function') {
            callback(event, session);
        }
    });
    return subscription;
}
