import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-xl sm:text-2xl font-bold">Flan-T5 Summarizer</h1>
        <button className="sm:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
        <div
          className={`${
            open ? "block" : "hidden"
          } sm:flex sm:items-center sm:space-x-6`}
        >
          <Link to="/" className="block py-2 hover:text-gray-200">
            Home
          </Link>
          <Link to="/about" className="block py-2 hover:text-gray-200">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
