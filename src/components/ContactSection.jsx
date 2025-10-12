"use client";
import React from "react";
import { Mail, Send, Phone, MapPin, CheckCircle, XCircle } from "lucide-react";

export const ContactSection = () => {
  const [status, setStatus] = React.useState({
    message: "",
    success: false,
    loading: false,
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ message: "Sending...", success: false, loading: true });

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // 🔑 Replace with your Web3Forms access key

    try {
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
    } catch (error) {
      console.error(error);
      setStatus({
        message: "Network error. Please try again later.",
        success: false,
        loading: false,
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 bg-black text-white"
    >
      <div className="container mx-auto max-w-4xl bg-gradient-to-b from-gray-900 via-gray-950 to-black border border-gray-800/60 rounded-2xl p-8 shadow-[0_0_40px_rgba(59,130,246,0.08)] hover:shadow-[0_0_60px_rgba(59,130,246,0.2)] transition-all duration-500 backdrop-blur-sm">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold relative inline-block">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
              Contact Me
            </span>
            <span className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 w-36 h-[3px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]"></span>
          </h2>
          <p className="text-gray-400 mt-6 text-sm sm:text-base">
            Have a project in mind or just want to say hello? Let’s connect and create something awesome together 🚀
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={onSubmit}
          className="max-w-2xl mx-auto space-y-4 bg-gradient-to-b from-gray-900/90 via-gray-950/90 to-black/90 border border-gray-800 rounded-xl p-6 shadow-md hover:border-blue-500/70 hover:shadow-blue-500/20 transition-all duration-300"
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
              name="name"
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
              name="email"
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
              name="message"
              id="message"
              rows={4}
              required
              placeholder="Write your message..."
              className="w-full bg-transparent border border-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:border-blue-400 transition-all duration-200"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status.loading}
            className={`w-full flex items-center justify-center gap-2 py-3 rounded-md font-semibold text-white 
              bg-gradient-to-r from-blue-400 to-purple-500 hover:scale-[1.02] transition-all duration-300
              ${status.loading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {status.loading ? "Sending..." : "Send Message"}
            {!status.loading && <Send className="w-4 h-4" />}
          </button>

          {/* Status Message */}
          {status.message && (
            <div
              className={`mt-4 flex items-center justify-center gap-2 text-sm transition-all duration-300 ${
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
    </section>
  );
};
