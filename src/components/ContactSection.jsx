"use client";
import React from "react";
import {
  Send,
  CheckCircle,
  XCircle,
  Github,
  Linkedin,
  InstagramIcon,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export const ContactSection = () => {
  const CONTACT_LINKS = [
    {
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/wajahat-kamal",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/wajahat-kamal",
    },
    {
      icon: <InstagramIcon className="w-5 h-5" />,
      url: "#",
    },
  ];

  const [status, setStatus] = React.useState({
    message: "",
    success: false,
    loading: false,
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    setStatus({
      message: "Sending...",
      success: false,
      loading: true,
    });

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "8994b3ed-62f4-4304-b95f-68cd476fa722");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          message: "Message sent successfully",
          success: true,
          loading: false,
        });
        event.target.reset();
      } else {
        setStatus({
          message: data.message || "Message not sent",
          success: false,
          loading: false,
        });
      }
    } catch (error) {
      setStatus({
        message: "Network error. Please try again.",
        success: false,
        loading: false,
      });
    }
  };

  return (
    <section className="mx-auto max-w-[990px] px-4 py-20" id="contact">
      <div className="grid md:grid-cols-2 gap-14 rounded-3xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl md:p-10 p-5 shadow-xl">
        {/* ================= LEFT ================= */}
        <div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Get in Touch
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Have a project in mind or need help with development? Let’s build
            something modern and impactful together.
          </p>

          <ul className="mt-10 space-y-6">
            {[
              { icon: Mail, text: "wajahatkamal3.0@gmail.com" },
              { icon: Phone, text: "+923102561812" },
              { icon: MapPin, text: "Karachi, Pakistan" },
            ].map(({ icon: Icon, text }, i) => (
              <li
                key={i}
                className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400"
              >
                <div className="h-11 w-11 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-zinc-200 dark:border-zinc-700">
                  <Icon className="w-5 h-5 text-blue-500" />
                </div>
                {text}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex gap-4">
            {CONTACT_LINKS.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                className="h-11 w-11 rounded-full flex items-center justify-center
                bg-zinc-900 text-white hover:scale-110 transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ================= RIGHT (FORM) ================= */}
        <form
          onSubmit={onSubmit}
          className="text-left rounded-2xl bg-white/80 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 p-4 backdrop-blur-xl space-y-6"
        >
          <input type="hidden" name="subject" value="New Contact Message" />

          <div>
            <label className="text-xs uppercase tracking-wide text-zinc-500">
              Name
            </label>
            <input
              name="name"
              required
              type="text"
              placeholder="Enter your name"
              className="mt-2 w-full rounded-lg border border-zinc-300 dark:border-zinc-700
              bg-transparent px-4 py-2 text-sm focus:border-blue-500 focus:ring-1 outline-none"
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-wide text-zinc-500">
              Email
            </label>
            <input
              name="email"
              required
              type="email"
              placeholder="Enter your email"
              className="mt-2 w-full rounded-lg border border-zinc-300 dark:border-zinc-700
              bg-transparent px-4 py-2 text-sm focus:border-blue-500 focus:ring-1 outline-none"
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-wide text-zinc-500">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Write your message..."
              className="mt-2 w-full rounded-lg border border-zinc-300 dark:border-zinc-700
              bg-transparent px-4 py-2 text-sm focus:border-blue-500 focus:ring-1 outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className={`w-full rounded-xl py-3 text-sm font-semibold text-white
            bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-[1.02] transition
            ${status.loading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {status.loading ? "Sending..." : "Send Message"}
            {!status.loading && <Send className="inline ml-2 w-4 h-4" />}
          </button>

          {status.message && (
            <div
              className={`flex items-center justify-center gap-2 text-sm ${
                status.success ? "text-green-500" : "text-red-500"
              }`}
            >
              {status.success ? <CheckCircle /> : <XCircle />}
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
