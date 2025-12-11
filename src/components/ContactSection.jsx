"use client";
import React from "react";
import {
  Send,
  CheckCircle,
  XCircle,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

export const ContactSection = () => {
  const [status, setStatus] = React.useState({
    message: "",
    success: false,
    loading: false,
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ message: "Sending...", success: false, loading: true });

    const formData = new FormData(event.target);
    formData.append("access_key", "0e7ca1ec-6d30-4126-9b84-edf6c2d9164b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setStatus({
        message: "Message sent successfully!",
        success: true,
        loading: false,
      });
      event.currentTarget.reset();
    } else {
      setStatus({
        message: data.message || "Something went wrong.",
        success: false,
        loading: false,
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative flex items-center justify-center px-4 py-16 text-white"
    >
      <div className="container mx-auto max-w-5xl">
        {/* ====== Heading ====== */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold relative inline-block">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
              Contact Me
            </span>
            <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
          </h2>

          <p className="text-gray-400 mt-5 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            I’m open to new opportunities and collaborations. Send a message and
            I’ll get back to you as soon as possible!
          </p>
        </div>

        {/* ====== Layout Container ====== */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
          {/* ====== Contact Form ====== */}
          <form
            onSubmit={onSubmit}
            className="w-full lg:w-1/2 space-y-4 bg-gradient-to-b from-gray-900/90 via-gray-950/90 to-black/90 
                     border border-gray-800 rounded-xl p-6 shadow-md 
                     hover:border-blue-500/70 hover:shadow-blue-500/20 transition-all duration-300"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-start text-sm font-medium text-gray-300 mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Enter your name"
                className="w-full bg-transparent border border-gray-700 text-white rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400 transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-start text-sm font-medium text-gray-300 mb-1"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter your email"
                className="w-full bg-transparent border border-gray-700 text-white rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400 transition-all"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-start text-sm font-medium text-gray-300 mb-1"
              >
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                placeholder="Write your message..."
                className="w-full bg-transparent border border-gray-700 text-white rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400 transition-all"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="w-full h-full">

            <a href="https://linkedin.com/in/wajahat-kamal/" className="bg-gradient-to-r from-blue-400 to-purple-500"><Linkedin/></a>

            <button
              type="submit"
              disabled={status.loading}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-md font-semibold text-white 
              bg-gradient-to-r from-blue-400 to-purple-500 hover:scale-[1.02] transition-all duration-300
              ${status.loading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {status.loading ? "Sending..." : "Send Message"}
              {!status.loading && <Send className="w-5 h-5" />}
            </button>
            <a href="https://linkedin.com/in/wajahat-kamal/" className="bg-gradient-to-r from-blue-400 to-purple-500"><Linkedin/></a>


            </div>


            {/* Status Message */}
            {status.message && (
              <div
                className={`mt-3 flex items-center justify-center gap-2 text-sm transition-all duration-300 ${
                  status.success ? "text-green-400" : "text-red-400"
                }`}
              >
                {status.success ? (
                  <CheckCircle className="w-5 h-5 animate-bounce" />
                ) : (
                  <XCircle className="w-5 h-5" />
                )}
                <span>{status.message}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
