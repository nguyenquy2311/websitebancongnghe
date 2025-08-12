import { createClient } from "@supabase/supabase-js";   

const URL = "https://lflnpvqjxbtajywjtees.supabase.co";
const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmbG5wdnFqeGJ0YWp5d2p0ZWVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0Mzk2NDcsImV4cCI6MjA3MDAxNTY0N30.E8EqGOnua0o1k0e4d-ZIe9OHAU_RqgQMJ2y5euc4bHQ";

const supabase = createClient(URL,anonKey);

export default supabase;

// Đẩy ảnh lên supabase -> lấy link ảnh về project -> kiểm tra có truy cập dc không -> cho link ảnh lên database 