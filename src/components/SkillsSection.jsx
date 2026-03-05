import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/Data";

function SkillsSection() {
  return (
    <div className="w-full overflow-hidden py-4 relative">
      <motion.div
        className="flex justify-center flex-wrap gap-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.06,
              delayChildren: 0.1,
            },
          },
        }}
      >
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
}

/* ====== Skill Card Component ====== */
const SkillCard = ({ skill }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20, filter: "blur(6px)", scale: 0.92 },
      show:   { opacity: 1, y: 0,  filter: "blur(0px)", scale: 1 },
    }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ scale: 1.08, y: -3 }}
    className="group flex flex-col items-center justify-center gap-1 rounded-lg border border-gray-700/40 
               bg-gray-800/40 backdrop-blur-md shadow-sm p-1.5 
               hover:shadow-md hover:border-blue-500/60 hover:bg-gray-800/60 min-w-16 cursor-pointer
               transition-colors duration-300"
  >
    <div
      className="w-14 h-14 flex items-center justify-center bg-white rounded-md shadow-sm 
                  group-hover:shadow-blue-500/30 transition-shadow duration-300"
    >
      <img
        src={skill.image}
        alt={skill.name}
        loading="lazy"
        className="w-11 h-11 object-contain"
      />
    </div>
    <div className="text-center">
      <h4 className="text-[11px] font-semibold text-white tracking-wide">
        {skill.name}
      </h4>
    </div>
  </motion.div>
);

export default SkillsSection;