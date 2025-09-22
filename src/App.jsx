import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { useEffect } from "react";

// Google Ad Component
function GoogleAd({ adClient, adSlot, style = {}, className = "" }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error", e);
    }
  }, []);

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={style}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}

// Pages
function HomePage() {
  return (
    <div className="flex flex-col items-center gap-4 mt-4">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <p>This is some demo text in the center of the Home page.</p>

      <GoogleAd
        adClient="ca-pub-3940256099942544"   // ✅ Google Test Client
        adSlot="6383935993"                  // ✅ Google Test Slot
        style={{ display: "block", width: "100%", height: "250px" }}
      />
    </div>
  );
}

function AboutPage() {
  return (
    <div className="flex flex-col items-center gap-4 mt-4">
      <h1 className="text-2xl font-bold mb-4">About Page</h1>
      <p>This is some demo text in the center of the About page.</p>

      <GoogleAd
        adClient="ca-pub-3940256099942544"   // ✅ Google Test Client
        adSlot="6383935993"                  // ✅ Google Test Slot
        style={{ display: "block", width: "100%", height: "250px" }}
      />
    </div>
  );
}

// Navbar
function Navbar() {
  return (
    <nav className="p-4 bg-gray-900 text-white">
      <ul className="flex items-center space-x-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
}

// App
export default function App() {
  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
