import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Helmet } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Helmet>
        <title>Wajahat Kamal | Full Stack Developer Portfolio</title>
        <meta name="description" content="Full Stack Developer specializing in React, Next.js, Node.js. Available for freelance and full-time opportunities." />
        <meta name="keywords" content="Full Stack Developer, React Developer, Node.js, Next.js, Wajahat Kamal" />
        <meta property="og:url" content="https://wajahat-kamal.vercel.app" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="p-0">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Analytics/>
    </>
  );
}

export default App;
