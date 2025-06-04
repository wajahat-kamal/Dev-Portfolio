import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import React, { useEffect, useState } from 'react';
import PageLoader from './components/PageLoader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 2 seconds on every load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Set loader time

    return () => clearTimeout(timer);
  }, []);


  return (

  
      <>
      {loading ? (
        <PageLoader />
      ) : (
        <div className="p-1">
          
      <BrowserRouter>
        <Routes>

          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
        </div>
      )}
    </>

  );
}





export default App;