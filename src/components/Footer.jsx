export const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Wajahat Kamal. All rights reserved.
        </p>
        <p className="text-sm">
          Built with{" "}
          <a
            target="_blank"
            href="https://reactjs.org"
            className="text-blue-500"
          >
            React JS
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            href="https://tailwindcss.com"
            className="text-blue-500"
          >
            Tailwind CSS.
          </a>
          <br />{" "}
          <a
            className="text-blue-500"
            target="_blank"
            href="https://github.com/wajahat-kamal/WK-Dev-Portfolio"
          >
            The code of this Website.
          </a>
        </p>
      </div>
    </footer>
  );
};
