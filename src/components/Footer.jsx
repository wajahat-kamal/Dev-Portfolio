
export const Footer = () => {
  return (
    <footer className="text-foreground py-3 sm:py-4 px-3 sm:px-20 bg-[#0B111E] flex justify-center items-center gap-2 sm:gap-0 text-center sm:text-left">
      {/* Left Section */}
      <div className="text-center">
        <p className="text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} Wajahat Kamal 27-July. All rights reserved.
        </p>
        <p className="text-xs sm:text-sm">
          Built with{" "}
          <a
            target="_blank"
            href="https://reactjs.org"
            className="text-blue-500 hover:underline"
          >
            React JS
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            href="https://tailwindcss.com"
            className="text-blue-500 hover:underline"
          >
            Tailwind CSS
          </a>
          .
        </p>
      </div>

     
    </footer>
  );
};
