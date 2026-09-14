'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';

export default function TestConnection() {
  const [status, setStatus] = useState('Testing...');

  useEffect(() => {
    async function testConnection() {
      try {
        const supabase = createClient();
        const { data, error } = await supabase.auth.getSession();
        
        if (error) throw error;
        
        setStatus('✅ Connected to Albina Database Core!');
        console.log('Supabase Connection:', data);
      } catch (error) {
        setStatus('❌ Connection Failed: ' + error);
      }
    }
    
    testConnection();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4 text-white">Database Connection Test</h1>
        <p className="text-lg text-gray-300">{status}</p>
      </div>
    </div>
  );
}