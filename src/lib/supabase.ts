/// <reference types="vite/client" />
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://kbizfdiqegdgcegruaig.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'fake-key-for-now';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
