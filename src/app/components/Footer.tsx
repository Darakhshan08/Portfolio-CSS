import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaCoffee } from "react-icons/fa";
import Image from "next/image";
import "../style/footer.css"; // Import the CSS file

function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-inner">
          {/* Top Section */}
          <div className="footer-top">
            {/* Logo */}
            <Link href="/" className="footer-logo">
              <Image 
                src="/images/d-logo-2.png"
                alt="Logo Image"
                width={25}
                height={25}
              />
              <span>arakhshan</span>
            </Link>

            {/* Contact Info */}
            <div className="footer-contact">
              <span>darakhshanshah8@gmail.com</span>
            </div>

            {/* Social Icons */}
            <div className="footer-icons">
              <a
                href="https://github.com/Darakhshan08"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/darakhshan-shah-4b0a79237"
                target="blank"
                rel="noopener noreferrer"
                className="footer-icon"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="footer-bottom">
            {/* Navigation */}
            <nav className="footer-nav">
              <Link href="/" className="footer-link">Home</Link>
              <Link href="/about" className="footer-link">About</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
            </nav>

            {/* Credits */}
            <p className="footer-credits">
              Designed and built by Darakhshan Shah with Love &amp;
              <FaCoffee className="footer-coffee" />
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
