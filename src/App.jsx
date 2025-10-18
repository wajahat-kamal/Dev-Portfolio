import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLoader from "./components/PageLoader";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import Resume from "./pages/Resume";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

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
              <Route path="/resume" element={<Resume />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;
