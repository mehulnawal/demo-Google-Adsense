import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";

// ------------------- Ad Placeholder Component -------------------
export function AdPlaceholder({ side }) {
  return (
    <div className="w-full h-48 bg-gray-800 border border-gray-700 flex items-center justify-center my-2">
      <span className="text-gray-300 font-semibold">{side} Ad</span>
    </div>
  );
}

// ------------------- Pages -------------------
export function HomePage() {
  return (
    <div className="flex flex-row justify-center gap-4 mt-4">

      {/* Left Ad */}
      <div className="w-1/6 hidden md:block">
        <AdPlaceholder side="Left" />
      </div>

      {/* Center Content */}
      <div className="w-full md:w-4/6 text-center text-gray-200">
        <h1 className="text-2xl font-bold mb-4">Home Page</h1>
        <p>This is some demo text in the center of the Home page.</p>
      </div>

      {/* Right Ad */}
      <div className="w-1/6 hidden md:block">
        <AdPlaceholder side="Right" />
      </div>
    </div>
  );
}

export function AboutPage() {
  return (
    <div className="flex flex-row justify-center gap-4 mt-4">
      {/* Left Ad */}
      <div className="w-1/6 hidden md:block">
        <AdPlaceholder side="Left" />
      </div>

      {/* Center Content */}
      <div className="w-full md:w-4/6 text-center text-gray-200">
        <h1 className="text-2xl font-bold mb-4">About Page</h1>
        <p>This is some demo text in the center of the About page.</p>
      </div>

      {/* Right Ad */}
      <div className="w-1/6 hidden md:block">
        <AdPlaceholder side="Right" />
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