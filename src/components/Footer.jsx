export const Footer = () => {
  return (
    <footer className="w-full py-4 border border-zinc-200/60 dark:border-zinc-800/60 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl">
      <div className="text-center text-zinc-600 font-bold dark:text-zinc-400 text-[16px]">
        &copy; {new Date().getFullYear()} Wajahat Kamal | Full Stack Developer
      </div>
    </footer>
  );
};
