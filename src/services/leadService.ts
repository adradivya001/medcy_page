import { supabase } from '../lib/supabaseClient';

export interface Lead {
    id?: string;
    created_at?: string;
    name: string;
    email: string;
    phone?: string;
    message?: string;
    organization?: string;
    role?: 'Investor' | 'Clinic Owner' | 'Partner';
}

export const submitLead = async (leadData: Lead) => {
    try {
        if (supabase.supabaseUrl === 'https://dummy.supabase.co' || import.meta.env.VITE_SUPABASE_URL === undefined) {
            console.warn("MOCK SUBMISSION: Supabase keys are not set. Lead data:", leadData);
            // Simulate a network request delay
            await new Promise(resolve => setTimeout(resolve, 800));
            return { data: [leadData], error: null };
        }

        const { data, error } = await supabase
            .from('leads')
            .insert([leadData])
            .select();

        if (error) throw error;
        return { data, error: null };
    } catch (error: any) {
        console.error('Error submitting lead:', error.message);
        return { data: null, error };
    }
};
