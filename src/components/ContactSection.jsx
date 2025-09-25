import React from "react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full bg-gray-950 text-gray-100 flex items-center justify-center py-9 px-4"
    >
      <div className="max-w-md w-full">
        {/* ---------- Heading ---------- */}
        <div className="text-center mb-10">
          <h2 className="relative inline-block text-3xl md:text-4xl font-extrabold tracking-wide">
            <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 bg-clip-text text-transparent">
              Contact Me
            </span>
            <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-24 h-[3px] bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"></span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm">
            I’d love to hear from you—send me a message!.
          </p>
        </div>

        {/* ---------- Compact Form ---------- */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black/40 backdrop-blur-md p-6 rounded-xl shadow-lg space-y-5 border border-gray-800"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700
                       text-gray-100 focus:outline-none focus:border-purple-500 text-sm"
            required
          />

          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700
                       text-gray-100 focus:outline-none focus:border-purple-500 text-sm"
            required
          />

          <textarea
            rows="3"
            placeholder="Your message..."
            className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700
                       text-gray-100 focus:outline-none focus:border-purple-500 text-sm"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full py-2.5 rounded-lg font-semibold text-white text-sm
                       bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600
                       hover:opacity-90 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
