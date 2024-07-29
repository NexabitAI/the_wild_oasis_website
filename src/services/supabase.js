import { createClient } from "@supabase/supabase-js";
export const supabaseUrl =
  "https://wqlqaafjzjtbgiddxnqh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxbHFhYWZqemp0YmdpZGR4bnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA3NjI0MDYsImV4cCI6MjAzNjMzODQwNn0.WbKEhPT2gdNuz_AvcmU9QwHt3mzi0qKxJb0rB5nvpVw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
