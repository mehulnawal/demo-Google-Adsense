import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

// ------------------- Google Ad Component -------------------
export function GoogleAd({ adClient, adSlot, style = {}, className = "" }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("Adsense error", e);
      }
    }, 500); // wait 0.5 seconds to ensure the ad container is in the DOM

    return () => clearTimeout(timeout);
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


// ------------------- Pages -------------------
export function HomePage() {
  return (
    <div className="flex flex-col items-center gap-4 mt-4">

      {/* Main Content */}
      <div className="w-full md:w-4/6 text-center text-gray-200">
        <h1 className="text-2xl font-bold mb-4">Home Page</h1>
        <p>This is some demo text in the center of the Home page.</p>
        <p>By Mehul</p>
      </div>

      {/* Ad below content */}
      <div className="w-full md:w-4/6 mt-4">
        <GoogleAd
          adClient="ca-pub-3383945416257696"
          adSlot="5780745916"
          style={{ display: "block", width: "100%", height: "250px" }}
        />
      </div>
    </div>
  );
}

export function AboutPage() {
  return (
    <div className="flex flex-col items-center gap-4 mt-4">

      {/* Main Content */}
      <div className="w-full md:w-4/6 text-center text-gray-200">
        <h1 className="text-2xl font-bold mb-4">About Page</h1>
        <p>This is some demo text in the center of the About page.</p>
      </div>

      {/* Ad below content */}
      <div className="w-full md:w-4/6 mt-4">
        <GoogleAd
          adClient="ca-pub-3383945416257696"
          adSlot="3940256099942544:3119834574"
          style={{ display: "block", width: "100%", height: "250px" }}
        />
      </div>
    </div>
  );
}

// ------------------- Navbar -------------------
export function Navbar() {
  return (
    <nav className="p-4 bg-gray-900">
      <ul className="flex items-center space-x-4">
        <li>
          <Link to="/" className="text-blue-400 hover:underline">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-blue-400 hover:underline">About</Link>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
}

// ------------------- App -------------------
function App() {
  return (
    <div className="bg-gray-950 min-h-screen">
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


export default App;