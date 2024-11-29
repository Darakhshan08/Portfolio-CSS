import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import "../style/navbar.css"; // Import the CSS file

function Navbar() {
  return (
    <div className="navbar-container">
      <header className="navbar-header">
        {/* Logo and Text */}
        <div className="navbar-logo">
          <Image 
            src="/images/d-logo-2.png"
            alt="Logo Image"
            width={25}
            height={25}
          />
          <span className="navbar-logo-text">arakhshan</span>
        </div>

        {/* Navigation Links */}
        <nav className="navbar-links">
          <Link href="/" className="navbar-link">Home</Link>
          <Link href="/about" className="navbar-link">About</Link>
          <Link href="/contact" className="navbar-link">Contact</Link>
        </nav>

        {/* Social Media Icons */}
        <div className="navbar-icons">
          <a
            href="https://github.com/Darakhshan08"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/darakhshan-shah-4b0a79237"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-icon"
          >
            <FaLinkedin />
          </a>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
