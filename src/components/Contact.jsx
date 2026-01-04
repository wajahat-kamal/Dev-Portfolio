"use client";

import {
  Send,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Heading from "@/components/reuseable/Heading";
import { CONTACT_LINKS, SERVICES_CONTACT_FORM } from "@/config/Link";
import { useContactForm } from "@/hooks/useContactForm";
import Link from "next/link";

const ContactPage = () => {
  const {
    form,
    errors,
    loading,
    handleChange,
    handleServiceToggle,
    handleSubmit,
  } = useContactForm();

  return (
    <>
      <Heading
        title={"Contact"}
        description={
          "Feel free to reach out for any relevant inquiries or discussions. Let's keep it meaningful and productive"
        }
      />

      <div className="mt-6 mx-auto min-h-screen max-w-[1010px]">
        <div className="grid md:grid-cols-2 items-start gap-14 p-8 rounded-2xl backdrop-blur-xl border-zinc-200 dark:border-zinc-800">
            
          <div className="pt-8">
            {/* Left side contact info remains the same */}
            <h1 className="text-4xl font-semibold bg-gradient-to-br from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-4 leading-relaxed">
              Have a project in mind or need help with development? I'd love to
              hear about your project and provide expert assistance.
            </p>

            <ul className="mt-8 space-y-6">
              <li className="flex items-center space-x-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
                  <Mail className="w-5 h-5" />
                </div>
                <a
                  href="mailto:muhammadsumair224@gmail.com"
                  className="text-sm"
                >
                  MuhammadSumair224@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
                  <Phone className="w-5 h-5" />
                </div>
                <a href="tel:+923194075607" className="text-sm">
                  03194075607
                </a>
              </li>
              <li className="flex items-center space-x-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="text-sm">Karachi Sindh, Pakistan</p>
              </li>
            </ul>

            <div className="flex items-center gap-4 mt-8">
              {CONTACT_LINKS.map((item, i) => (
                <Link
                  key={i}
                  href={item.url}
                  target=""
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 dark:bg-zinc-700 text-white hover:bg-zinc-700 dark:hover:bg-zinc-600 transition-colors"
                >
                  <span className="h-5 w-5 ">{item.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-black/40 px-6 py-4 rounded-xl border border-zinc-200 dark:border-zinc-700/50 backdrop-blur-xl">
            <p className="text-lg font-medium text-zinc-900 dark:text-zinc-200">
              I'm interested in...
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {SERVICES_CONTACT_FORM.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => handleServiceToggle(service.name)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                  border border-zinc-200 dark:border-zinc-700
                  ${
                    form.services.includes(service.name)
                      ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black"
                      : "bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-700/50 text-zinc-700 dark:text-zinc-300"
                  }`}
                >
                  {service.name}
                </button>
              ))}
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8 dark:text-white text-black space-y-4"
            >
              <div>
                <Input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className={`bg-zinc-50 dark:bg-zinc-800/20 border-zinc-200 dark:border-zinc-700 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={`bg-zinc-50 dark:bg-zinc-800/20 border-zinc-200 dark:border-zinc-700 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <Input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className={`bg-zinc-50 dark:bg-zinc-800/20 border-zinc-200 dark:border-zinc-700 ${
                    errors.subject ? "border-red-500" : ""
                  }`}
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <Textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={6}
                  className={`bg-zinc-50 dark:bg-zinc-800/20 border-zinc-200 dark:border-zinc-700 resize-none ${
                    errors.message ? "border-red-500" : ""
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full py-1.5 bg-white/20 hover:text-white dark:bg-black text-black border-2 border-zinc-600 dark:border-zinc-600 hover:bg-zinc-900 dark:hover:bg-zinc-900 dark:text-white"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;