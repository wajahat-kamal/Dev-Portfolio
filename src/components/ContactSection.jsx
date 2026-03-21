"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle,
  XCircle,
  Github,
  Linkedin,
  InstagramIcon,
  MapPin,
  Mail,
} from "lucide-react";
import axios from "axios";

export const ContactSection = () => {

  const contactItems = [
    { icon: Mail, text: "wajahatkamal3.0@gmail.com" },
    { icon: MapPin, text: "Karachi, Pakistan" },
    { icon: Linkedin, text: "Wajahat Kamal", url: "https://linkedin.com/in/wajahat-kamal" },
    { icon: Github, text: "Wajahat Kamal", url: "https://github.com/wajahat-kamal" },
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
    <motion.section
      className="mx-auto max-w-[990px] px-4 py-22"
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        className="grid md:grid-cols-2 gap-8 md:gap-14 rounded-3xl border border-zinc-200/60 dark:border-zinc-800/60 bg-[#0A0F1C] backdrop-blur-xl md:p-10 p-5 shadow-xl"
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        viewport={{ once: true }}
      >
        {/* ================= LEFT ================= */}
        <div>
          <motion.h2
            className="text-4xl font-bold text-primary"
            initial={{ opacity: 0, x: -24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get in Touch
          </motion.h2>

          <motion.p
            className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
            initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
            viewport={{ once: true }}
          >
            Have a project in mind or need help with development? Let's build
            something modern and impactful together.
          </motion.p>

          <motion.ul
            className="mt-6 space-y-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1, delayChildren: 0.35 } },
            }}
          >
            {contactItems.map(({ icon: Icon, text, url }, i) => {
              const Tag = url ? motion.a : motion.li;
              return (
                <Tag
                  key={i}
                  {...(url && { href: url })}
                  className={`flex items-center gap-4 text-sm text-zinc-400 ${url && "hover:text-primary duration-75 transition-all"}`}
                  variants={{
                    hidden: { opacity: 0, x: -18, filter: "blur(4px)" },
                    show: { opacity: 1, x: 0, filter: "blur(0px)" },
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="h-11 w-11 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-zinc-700">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  {text}
                </Tag>
              );
            })}
          </motion.ul>
        </div>

        {/* ================= FORM ================= */}
        <motion.form
          onSubmit={onSubmit}
          className="text-left rounded-2xl bg-[#0c101b] border border-zinc-800 p-4 backdrop-blur-xl space-y-4"
          initial={{ opacity: 0, x: 32, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          viewport={{ once: true }}
        >
          <input type="hidden" name="subject" value="New Contact Message" />

          {[
            { label: "Name", name: "name", type: "text", placeholder: "Enter your name", value: formData.name },
            { label: "Email", name: "email", type: "email", placeholder: "Enter your email", value: formData.email },
          ].map(({ label, name, type, placeholder, value }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.35 + i * 0.08 }}
              viewport={{ once: true }}
            >
              <label className="text-xs uppercase tracking-wide text-zinc-400">{label}</label>
              <input
                required
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-zinc-700 text-zinc-100
                bg-transparent px-4 py-2 text-sm focus:border-primary focus:ring-1 outline-none
                transition-colors duration-200"
              />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.51 }}
            viewport={{ once: true }}
          >
            <label className="text-xs uppercase tracking-wide text-zinc-400">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Write your message..."
              className="mt-2 w-full rounded-lg border border-zinc-700 text-zinc-100
              bg-transparent px-4 py-2 text-sm focus:border-primary focus:ring-1 outline-none
              transition-colors duration-200"
            />
          </motion.div>

          <motion.button
            type="submit"
            disabled={status.loading}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.58 }}
            viewport={{ once: true }}
            whileHover={!status.loading ? { scale: 1.02 } : {}}
            whileTap={!status.loading ? { scale: 0.97 } : {}}
            className={`w-full rounded-xl py-3 text-sm font-semibold text-white
            bg-primary transition-opacity duration-200 cursor-pointer
            ${status.loading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {status.loading ? "Sending..." : "Send Message"}
            {!status.loading && <Send className="inline ml-2 w-4 h-4" />}
          </motion.button>

          {status.message && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={`flex items-center justify-center gap-2 text-sm ${status.success ? "text-green-500" : "text-red-500"
                }`}
            >
              {status.success ? <CheckCircle /> : <XCircle />}
              {status.message}
            </motion.div>
          )}
        </motion.form>
      </motion.div>
    </motion.section>
  );
};
