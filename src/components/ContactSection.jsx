import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-gray-950 text-gray-100 py-16 px-4 sm:px-6 lg:px-10"
    >
      <div className="max-w-5xl mx-auto">
        {/* ---------- Heading ---------- */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-8 relative">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent tracking-wide">
              Contact Me
            </span>
            <span className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 w-36 h-[4px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"></span>
          </h2>
        </div>

        <div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-black/40 backdrop-blur-md p-6 rounded-2xl shadow-lg space-y-5"
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
              className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-400 to-purple-600
                         hover:opacity-90 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
