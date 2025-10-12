"use client";
import React from "react";
import { Mail, Send, Phone, MapPin } from "lucide-react";

export const ContactSection = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="container mx-auto max-w-4xl bg-gradient-to-b from-gray-900 via-gray-950 to-black border border-gray-800/60 rounded-2xl p-8 shadow-[0_0_40px_rgba(59,130,246,0.08)] hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] transition-all duration-500 backdrop-blur-sm">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 relative">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent tracking-wide drop-shadow-[0_0_5px_rgba(59,130,246,0.3)]">
            Contact Me
          </span>
          <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-36 h-[3px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]"></span>
        </h2>

        {/* Contact Info + Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <div className="space-y-5 text-gray-300">
            <h3 className="text-xl font-semibold text-white mb-4">
              Let's Connect 🚀
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Have a project in mind or just want to say hello? I’d love to hear
              from you. Let’s build something amazing together!
            </p>

            <div className="space-y-3 mt-6">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a
                  href="mailto:wajahatkamal3.0@gmail.com"
                  className="hover:text-cyan-300 transition-colors duration-200"
                >
                  wajahatkamal3.0@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <p>+92 000 0000000</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <p>Karachi, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={onSubmit}
            className="space-y-3 bg-gradient-to-b from-gray-900/90 via-gray-950/90 to-black/90 border border-gray-800 rounded-xl p-4 shadow-md hover:border-blue-500/70 hover:shadow-blue-500/20 transition-all duration-300"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1 text-start"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="Enter your name"
                className="w-full bg-transparent border border-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:border-blue-400 transition-all duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1 text-start"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="Enter your email"
                className="w-full bg-transparent border border-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:border-blue-400 transition-all duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1 text-start"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                placeholder="Write your message..."
                className="w-full bg-transparent border border-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:border-blue-400 transition-all duration-200"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-md  font-semibold text-white 
         bg-gradient-to-r from-blue-400 to-purple-500 hover:scale-102
         transition-all duration-300 "
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
