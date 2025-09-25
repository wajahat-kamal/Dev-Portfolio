import React from "react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-gray-950 text-gray-100 py-16 px-4 sm:px-6 lg:px-10"
    >
      <div className="max-w-4xl mx-auto">
        {/* ---------- Heading ---------- */}
        <div className="text-center mb-12">
          <h2 className="relative inline-block text-3xl md:text-5xl font-extrabold tracking-wide">
            <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600 bg-clip-text text-transparent">
              Contact Me
            </span>
            <span className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 w-32 h-[3px] bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"></span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Let’s collaborate! Fill out the form below and I’ll get back to you soon.
          </p>
        </div>

        {/* ---------- Contact Form ---------- */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black/40 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg space-y-6"
        >
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700
                         text-gray-100 focus:outline-none focus:border-purple-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700
                         text-gray-100 focus:outline-none focus:border-purple-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700
                         text-gray-100 focus:outline-none focus:border-purple-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-white
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
