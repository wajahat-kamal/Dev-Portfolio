import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      className="w-full py-5 border border-zinc-800/60 bg-[#0A0F1C] backdrop-blur-xl"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <div className="text-center text-zinc-600 font-bold dark:text-zinc-400 text-[16px]">
        &copy; {new Date().getFullYear()}{" "}
        <motion.span
          className="text-primary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Wajahat Kamal
        </motion.span>
        {" "}| Full Stack Developer
      </div>
    </motion.footer>
  );
};