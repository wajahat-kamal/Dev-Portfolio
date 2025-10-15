"use client";
import React from "react";

function EmailSidebar() {
  return (
    <div className="fixed bottom-0 right-0 hidden lg:flex flex-col items-center z-50">
      {/* Rotated Email */}
      <a
        href="mailto:wajahatkamal3.0@gmail.com"
        className="text-gray-400 mb-22 mr-4 hover:text-cyan-400 tracking-wider text-[13px] rotate-90 origin-bottom transition-all duration-300 hover:-translate-y-1"
      >
        <span className="font-semibold">
          wajahatkamal3.0
          <span className="text-cyan-400">@</span>
          gmail<span className="text-cyan-400">.com</span>
        </span>
      </a>

      {/* Line */}
      <div className="w-0.5 h-28 bg-gray-400 mt-6"></div>
    </div>
  );
}

export default EmailSidebar;
