export const Footer = () => {
  return (
    <footer className="w-full py-5 border border-zinc-800/60 bg-[#0A0F1C] backdrop-blur-xl">
      <div className="text-center text-zinc-600 font-bold dark:text-zinc-400 text-[16px]">
        &copy; {new Date().getFullYear()} Wajahat Kamal | Full Stack Developer
      </div>
    </footer>
  );
};
