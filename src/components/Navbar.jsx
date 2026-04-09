import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Services", "Contact", "Help"];

  return (
    <nav className="navbar">
      <h1 className="logo">
        Ele<span>men</span>tum
      </h1>

      {/* Desktop Links */}
      <ul className="links">
        {navLinks.map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Button */}
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu">
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((item) => (
            // <a key={item} href={`#${item.toLowerCase()}`}>
            //   {item}
            // </a>
            <a
         key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
          >
          {item}
         </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;