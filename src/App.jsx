import { Link, Outlet, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

// ------------------- Google Ad Component -------------------
export function GoogleAd({ adClient, adSlot, style }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={style}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}

// ------------------- Pages -------------------
export function Home() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Home Page</h1>
      <p>Welcome to the demo site with AdSense test ads.</p>

      {/* Test Ad Unit - Medium Rectangle */}
      <GoogleAd
        adClient="ca-pub-3383945416257696"
        adSlot="3119834574"
        style={{ display: "block", width: "300px", height: "250px" }}
      />
    </div>
  );
}


export function About() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>About Page</h1>
      <p>This is the About page where another demo ad will be shown.</p>

      {/* Test Ad Unit - Leaderboard */}
      <GoogleAd
        adClient="ca-pub-3383945416257696"
        adSlot="9307969911"
        style={{ display: "block", width: "728px", height: "90px" }}
      />
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
import { BrowserRouter as Router, } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem", background: "#f0f0f0" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>
          Home
        </Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;