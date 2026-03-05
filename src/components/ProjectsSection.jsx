import { ArrowRight } from "lucide-react";
import { projects } from "../assets/Data.js";
import ProjectCard from "./ProjectCard.jsx";
import { motion } from "framer-motion";
import { fadeLeft } from "./AboutSection.jsx";

export const ProjectsSection = () => {
  return (
    <motion.section
      id="projects"
      className="pt-20 px-4 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div className="container mx-auto max-w-5xl" {...fadeLeft(0.1)}>

        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-6 relative"
          {...fadeLeft(0.15)}
        >
          <span className="text-primary tracking-wide">Projects</span>
          <motion.span
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] bg-primary rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "11rem", opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          />
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 text-[13px] sm:text-[15px] mb-4 max-w-xl lg:max-w-2xl mx-auto leading-relaxed"
          {...fadeLeft(0.25)}
        >
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </motion.p>

        {/* Cards — staggered */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 max-sm:gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.13, delayChildren: 0.2 } },
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

      </motion.div>
    </motion.section>
  );
};