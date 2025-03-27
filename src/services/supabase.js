import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://suogcftskoisbtmjgvam.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1b2djZnRza29pc2J0bWpndmFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzNzc1NjEsImV4cCI6MjA1Nzk1MzU2MX0.fdOHcw8iIgiwjNAP5ewVznV7SsBrqthYXpIsf_eKEJg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
