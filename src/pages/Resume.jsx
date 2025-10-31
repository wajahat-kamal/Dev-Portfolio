import React from "react";
import { Mail, Globe, MapPin } from "lucide-react";

function Resume() {
  const projectsData = [
    {
      title: "Foodify – Restaurant Web App",
      description:
        "A fully responsive full-stack restaurant web application built with Next.js, MongoDB, and Tailwind CSS. Features include a dynamic menu, and admin-based food management for seamless user experience.",
    },
    {
      title: "AI-Powered MERN Blog",
      description:
        "An intelligent blogging platform built using the MERN Stack and Tailwind CSS. It integrates AI tools for smart content creation, image optimization, and offers a sleek, mobile-friendly design.",
    },
    {
      title: "AI Chatbot – Google Gemini API",
      description:
        "A real-time AI chatbot developed with the MERN Stack and Google Gemini API. Provides natural conversational responses, context awareness, and a clean, interactive chat interface.",
    },
  ];

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
        <main className="p-4 sm:p-12 space-y-12">
          {/* About */}
          <section>
            <h2 className="text-2xl font-semibold text-purple-500 mb-4 border-b-4 border-purple-500 inline-block pb-1">
              About Me
            </h2>
            <p className="text-gray-600 text-base sm:text-[12px] text-center">
              Hey! I'm Wajahat Kamal, a passionate Full Stack Developer who
              loves building modern, responsive, and high-performance web
              applications using React, Node.js, and Next.js. I enjoy turning
              ideas into interactive digital experiences that are both visually
              appealing and user-friendly. My goal is to write clean, efficient
              code and continuously learn new technologies to grow as a
              developer.
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
              {projectsData.map((project, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base text-center">
                    {project.description}
                  </p>
                </div>
              ))}
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
