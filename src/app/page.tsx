import React from "react";
import Image from "next/image";
import Skills from "./components/Skills";
import Proj from "./components/Proj";
import "./style/page.css";
export default function Portfolio() {
  return (

        <div className="portfolio-container">
          <main className="portfolio-main">
            <section className="portfolio-section">
              <div className="portfolio-text">
                <h1 className="portfolio-heading">
                  Hi 👋,
                  <br />
                  My name is
                  <br />
                  <span className="portfolio-name">Darakhshan Shah</span>
                  <br />I build things for web
                </h1>
              </div>
    
              <div className="portfolio-image-container">
                <div className="portfolio-image-wrapper">
                  <Image
                    src="/images/profile.jpeg"
                    alt="profile Image"
                    className="portfolio-image"
                    width={320}
                    height={320}
                  />
                </div>
              </div>
            </section>

           <Skills/>
            <Proj/>

       
      </main>
    </div>
  );
}
