"use client";
import React, { useState } from "react";
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
import axios from "axios";

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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    setStatus({
      message: "Sending...",
      success: false,
      loading: true,
    });

    try {
      const response = await axios.post("https://api.web3forms.com/submit", {
        access_key: import.meta.env.VITE_WEB3FORM_KEY,
        name: formData.name,
        email: formData.email,
        message: formData.message,
        subject: "New Portfolio Contact Message",
        from_name: formData.name,
      })

      if (response.data.success) {
        setStatus({
          message: "Message sent successfully",
          success: true,
          loading: false,
        });
        setFormData({
          name: "",
          email: "",
          message: ""
        })
      } else {
        setStatus({
          message: response.data.message || "Message not sent",
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
    <section className="mx-auto max-w-[990px] px-4 py-22" id="contact">
      <div className="grid md:grid-cols-2 gap-8 md:gap-14 rounded-3xl border border-zinc-200/60 dark:border-zinc-800/60 bg-[#0A0F1C] backdrop-blur-xl md:p-10 p-5 shadow-xl">
        {/* ================= LEFT ================= */}
        <div>
          <h2 className="text-4xl font-bold text-primary">
            Get in Touch
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Have a project in mind or need help with development? Let’s build
            something modern and impactful together.
          </p>

          <ul className="mt-6 space-y-4">
            {[
              { icon: Mail, text: "wajahatkamal3.0@gmail.com" },
              { icon: Phone, text: "+923102561812" },
              { icon: MapPin, text: "Karachi, Pakistan" },
            ].map(({ icon: Icon, text }, i) => (
              <li
                key={i}
                className="flex items-center gap-4 text-sm text-zinc-400"
              >
                <div className="h-11 w-11 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-zinc-700">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                {text}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex gap-4">
            {CONTACT_LINKS.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                className="h-11 w-11 rounded-full flex items-center justify-center  border border-zinc-700
              bg-gradient-to-br from-blue-500/10 to-purple-500/10 text-primary hover:scale-110 transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="text-left rounded-2xl bg-[#0c101b] border border-zinc-800 p-4 backdrop-blur-xl space-y-4 "
        >
          <input type="hidden" name="subject" value="New Contact Message" />

          <div>
            <label className="text-xs uppercase tracking-wide text-zinc-400">
              Name
            </label>
            <input
              required
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border border-zinc-700 text-zinc-100
              bg-transparent px-4 py-2 text-sm focus:border-primary focus:ring-1 outline-none"
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-wide text-zinc-400">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-2 w-full rounded-lg border border-zinc-700 text-zinc-100
              bg-transparent px-4 py-2 text-sm focus:border-primary focus:ring-1 outline-none"
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-wide text-zinc-400">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Write your message..."
              className="mt-2 w-full rounded-lg border border-zinc-700 text-zinc-100
              bg-transparent px-4 py-2 text-sm focus:border-primary focus:ring-1 outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className={`w-full rounded-xl py-3 text-sm font-semibold text-white
            bg-primary hover:scale-[1.02] transition
            ${status.loading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {status.loading ? "Sending..." : "Send Message"}
            {!status.loading && <Send className="inline ml-2 w-4 h-4" />}
          </button>

          {status.message && (
            <div
              className={`flex items-center justify-center gap-2 text-sm ${status.success ? "text-green-500" : "text-red-500"
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
