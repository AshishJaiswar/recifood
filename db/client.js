import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(process.env.SUPABASEURL, process.env.SUPABASEKEY);

export default supabase;
