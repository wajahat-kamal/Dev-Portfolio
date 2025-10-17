import React from "react";

function EmailSidebar() {
  return (
    <div className="fixed bottom-0 -right-16 hidden md:flex flex-col items-center z-50">
      {/* Rotated Email */}
      <a
        href="mailto:wajahatkamal3.0@gmail.com"
        className="text-gray-400 mb-22 mr-4 hover:text-transparent bg-clip-text 
                       bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 fira-code tracking-wider text-[13px] rotate-90 origin-bottom transition-all duration-300 hover:-translate-y-1"
      >
        <span className="font-semibold">
          wajahatkamal3.0
          <span className="
                       text-transparent bg-clip-text 
                       bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 fira-code ">@</span>
          gmail<span className="
                       text-transparent bg-clip-text 
                       bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 fira-code ">.com</span>
        </span>
      </a>

      {/* Line */}
      <div className="w-0.5 h-28 bg-gray-400 mt-6"></div>
    </div>
  );
}

export default EmailSidebar;
