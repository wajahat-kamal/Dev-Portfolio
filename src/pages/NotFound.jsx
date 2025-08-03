import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#321581] text-white px-6">
      <h1 className="text-9xl font-extrabold tracking-widest text-red-500 select-none">404</h1>
      <p className="text-2xl md:text-3xl font-semibold mt-6">Page Not Found</p>
      <p className="mt-3 text-center max-w-md text-white">
        Sorry! The page you’re looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-8 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-xl transition duration-300"
      >
        Go back to Home
      </Link>
    </div>
  );
};
