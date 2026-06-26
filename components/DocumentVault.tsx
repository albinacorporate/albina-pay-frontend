'use client';

import { useState, useEffect } from 'react';

export default function DocumentVault() {
  const [activeFolder, setActiveFolder] = useState(3); // Starts with 'My Books'

  const folders = [
    { name: 'School Certs', icon: '🎓' },
    { name: 'Office File', icon: '💼' },
    { name: 'Birth Certs', icon: '👶' },
    { name: 'My Books', icon: '' },
  ];

  const files = [
    { name: 'Algebra Guide.pdf', size: '2.4 MB' },
    { name: 'History Notes.pdf', size: '1.1 MB' },
    { name: 'Literature List.pdf', size: '850 KB' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFolder((prev) => (prev + 1) % folders.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-2xl border border-gray-200 w-64 h-80 flex flex-col overflow-hidden font-sans text-xs">
      {/* Header with Albina Pay Logo */}
      <div className="bg-[#0A192F] p-2 flex items-center gap-2 border-b border-gray-700">
        <img 
          src="/Image/Albina%20Pay%20Logo%20White%20Font.png" 
          className="h-4 w-auto object-contain" 
          alt="logo" 
          style={{ filter: 'brightness(0) invert(1)' }} 
        />
        <span className="text-white font-bold text-[10px]">Document Vault</span>
      </div>

      <div className="flex flex-1 overflow-hidden bg-gray-50">
        {/* Sidebar - Folders */}
        <div className="w-2/5 bg-gray-100 border-r border-gray-200 p-1.5 flex flex-col gap-1 overflow-y-auto">
          {folders.map((folder, idx) => (
            <div 
              key={idx} 
              className={`p-1.5 rounded flex items-center gap-1.5 cursor-pointer transition-all ${
                activeFolder === idx 
                  ? 'bg-[#2C4A73] text-white shadow-sm' 
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span className="text-[10px]">{folder.icon}</span>
              <span className="text-[8px] font-semibold truncate leading-tight">{folder.name}</span>
            </div>
          ))}
        </div>

        {/* Main View - Documents */}
        <div className="w-3/5 bg-white p-2 flex flex-col">
          <div className="text-[8px] font-bold text-[#2C4A73] mb-2 uppercase tracking-wider border-b border-gray-100 pb-1">
            {folders[activeFolder].name}
          </div>
          
          <div className="flex flex-col gap-1.5 overflow-y-auto">
            {files.map((file, idx) => (
              <div key={idx} className="flex flex-col gap-1 p-1.5 border border-gray-100 rounded bg-gray-50 hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 bg-red-100 rounded flex items-center justify-center text-red-600 text-[7px] font-bold">PDF</div>
                  <span className="text-[8px] font-semibold text-gray-700 truncate">{file.name}</span>
                </div>
                <div className="flex justify-between items-center mt-0.5">
                  <span className="text-[7px] text-gray-400">{file.size}</span>
                  <div className="flex gap-1">
                    {/* Forward/Share Icon */}
                    <button className="text-gray-400 hover:text-blue-500 transition-colors p-0.5 rounded hover:bg-blue-50">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                    {/* Download Icon */}
                    <button className="text-gray-400 hover:text-green-500 transition-colors p-0.5 rounded hover:bg-green-50">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                    {/* Delete Icon */}
                    <button className="text-gray-400 hover:text-red-500 transition-colors p-0.5 rounded hover:bg-red-50">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}