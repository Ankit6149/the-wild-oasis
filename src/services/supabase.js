import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://kqrnyziirzxocfgytday.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtxcm55emlpcnp4b2NmZ3l0ZGF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyOTMxNzYsImV4cCI6MjA1NTg2OTE3Nn0.OtE_MQhpbYC4zTO7l8IhbvvGh9f2H47IUyI4KLnlSM0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
