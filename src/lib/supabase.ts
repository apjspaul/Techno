import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://cxemhnwpjxmwtzyyzcct.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4ZW1obndwanhtd3R6eXl6Y2N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg4MTE2MzMsImV4cCI6MjA5NDM4NzYzM30.0K3vfXz9bjaxGRQ9rDm8M0BYJdK65lCUFIaJCNWLai0';

if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
  console.warn('Supabase credentials not found in environment variables. Falling back to provided defaults.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
