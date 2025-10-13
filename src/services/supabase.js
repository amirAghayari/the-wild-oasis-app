import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://bjojotwgwwlbcgfduyii.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqb2pvdHdnd3dsYmNnZmR1eWlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAzMDY0MTYsImV4cCI6MjA3NTg4MjQxNn0.rfwmQXWwMMpyIHK0S0RSLCcRO2xyCA_SUJhcJdQNlDo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
