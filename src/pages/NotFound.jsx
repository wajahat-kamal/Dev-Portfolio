export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500">Page Not Found</h1>
      <a href="/" className="mt-6 text-2xl text-blue-500 hover:underline">
        Go back to Home
      </a>
    </div>
  );
}