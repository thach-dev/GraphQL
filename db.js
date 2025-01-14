// db.js
const { createClient } = require('@supabase/supabase-js');

// Thay thế bằng thông tin Supabase của bạn
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_API_KEY'; 
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
