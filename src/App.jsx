import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import React, { useEffect, useState } from 'react';
import PageLoader from './components/PageLoader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);


  return (

  
      <>
      {loading ? (
        <PageLoader />
      ) : (
        <div className="p-0">
          
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