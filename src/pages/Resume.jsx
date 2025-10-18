import React from "react";
import { Mail, Globe, MapPin } from "lucide-react";

function Resume() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans p-6 sm:p-10 leading-relaxed">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-400 to-purple-500 text-white text-center py-12 px-6">
          <h1 className="text-3xl sm:text-5xl font-bold mb-2 tracking-tight">
            Wajahat Kamal
          </h1>
          <p className="text-lg opacity-90 font-light">Full Stack Developer</p>

          <div className="flex flex-wrap justify-center items-center gap-5 mt-6 text-sm">
            <a
              href="mailto:wajahatkamal3.0@gmail.com"
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              <Mail className="w-4 h-4" />
              <span>wajahatkamal3.0@gmail.com</span>
            </a>
            <a
              href="https://wajahat-kamal.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              <Globe className="w-4 h-4" />
              <span>wajahat-kamal.vercel.app</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Karachi, Pakistan</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-8 sm:p-12 space-y-12">
          {/* About */}
          <section>
            <h2 className="text-2xl font-semibold text-purple-500 mb-4 border-b-4 border-purple-500 inline-block pb-1">
              About Me
            </h2>
            <p className="text-gray-600 text-base sm:text-[15px] text-justify">
              Hey! I'm Wajahat Kamal, a passionate Full Stack Developer who loves
              building modern, responsive, and high-performance web applications
              using React, Node.js, and Next.js. I enjoy turning ideas into
              interactive digital experiences that are both visually appealing and
              user-friendly. My goal is to write clean, efficient code and
              continuously learn new technologies to grow as a developer.
            </p>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-semibold text-purple-500 mb-4 border-b-4 border-purple-500 inline-block pb-1">
              Skills
            </h2>
            <div className="flex flex-wrap gap-3 mt-3">
              {[
                "Next.js",
                "React.js",
                "JavaScript (ES6+)",
                "TypeScript",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Tailwind CSS",
                "Git",
                "Responsive UI Design",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-2xl font-semibold text-purple-500 mb-4 border-b-4 border-purple-500 inline-block pb-1">
              Projects
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  AI-Powered MERN Blog
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Built an intelligent blog platform with MERN Stack and Tailwind
                  CSS, enabling smart content creation, image optimization, and a
                  modern responsive UI.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  AI Chatbot (Google Gemini API)
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Developed a real-time AI chatbot using MERN Stack, Tailwind CSS,
                  and Google Gemini API, featuring natural language responses and
                  an interactive chat interface.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Homify – Real Estate Platform
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Created a clean, modern real estate website using React.js and
                  Tailwind CSS, focused on a sleek design, smooth navigation, and
                  a fully responsive layout.
                </p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-semibold text-purple-500 mb-4 border-b-4 border-purple-500 inline-block pb-1">
              Education
            </h2>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Matric Student
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Currently pursuing studies while building full-stack projects and
              expanding technical expertise in React, Node.js, and modern web
              development.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Resume;
