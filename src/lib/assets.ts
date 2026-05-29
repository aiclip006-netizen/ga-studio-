/// <reference types="vite/client" />
// Default base URL fallback
const DEFAULT_URL = 'https://kbizfdiqegdgcegruaig.supabase.co/storage/v1/object/public/1%20test%20photo%20video/';

const BASE = import.meta.env.VITE_SUPABASE_ASSET_URL || DEFAULT_URL;

export const asset = (filename: string) => `${BASE}${encodeURIComponent(filename)}`;
