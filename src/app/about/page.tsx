import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../style/about.css"; // CSS file import

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-flex">
          <div className="about-image">
            <Image
              src="/images/profile.jpeg"
              alt="profile Image"
              className="profile-img"
              width={320}
              height={320}
            />
          </div>
          <div className="about-text">
            <h1 className="about-title">
              About <span className="highlight">Me</span>
            </h1>
            <h2 className="about-subtitle">Full Stack & MERN Stack</h2>
            <p className="about-description">
              I am a passionate Full Stack Developer with expertise in MERN Stack development,
              creating efficient and scalable web applications. Alongside web development,
              I excel in building user-friendly and feature-rich mobile applications,
              ensuring seamless performance across platforms. With a strong foundation in both
              front-end and back-end technologies, I aim to deliver innovative solutions that meet
              modern digital needs.
            </p>
            <Link href="/contact" passHref>
              <button
                className="about-button"
                aria-label="Read more about me"
              >
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
