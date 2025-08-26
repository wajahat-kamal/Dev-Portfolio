import { Database, Layout } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-8 h-8 text-blue-400" />,
      items: [
        "Custom Web Design 🎨",
        "Responsive Web Development 📱",
        "Interactive User Interfaces 💬",
        "JavaScript & React Development ⚛️",
        "UI/UX Enhancements 🛠️",
        "Performance Optimization ⚡",
      ],
    },
    {
      title: "Full Stack Development",
      icon: <Database className="w-8 h-8 text-purple-400" />,
      items: [
        "Custom Web Applications 🌐",
        "API Development & Integration 🔗",
        "Database Design & Management 🗃️",
        "End-to-End Project Management 📈",
        "Authentication & Security 🔐",
        "Deployment & Cloud Hosting ☁️",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 px-6relative">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-14 relative">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent tracking-wide">
            Services
          </span>
          <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-36 h-[4px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"></span>
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
              </div>

              {/* Service Items */}
              <ul className="space-y-3 text-gray-300 text-sm md:text-base">
                {service.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 group-hover:text-gray-100 transition-colors"
                  >
                    <span className="text-blue-400">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
