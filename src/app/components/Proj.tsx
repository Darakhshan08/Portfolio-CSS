import React from 'react'
import Image from "next/image";
import '../style/proj.css';

function proj() {
  return (
    <>
     <section className="projects-section">
        <h2 className="section-title">Projects</h2>
        <p className="section-description">Things I&apos;ve built so far</p>

        <div className="projects-grid">
          {/* First Div */}
          <div className="project-card">
            <img
              src="/images/home1.png"
              alt="E-commerce Platform"
              className="project-image"
              width={640} /* Adjust the width value as needed */
              height={192} 
           
            />
            <div className="project-content">
              <h3 className="project-title">E-commerce Platform</h3>
              <p className="project-description">
                An intuitive e-commerce platform with a responsive design and cart functionality.
              </p>
              <p className="project-tech-stack">Tech stack: React, Tailwind CSS</p>
              <div className="project-links">
                <a
                  href="https://react-home-page-alpha.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  
                >
                  Live Preview
                </a>
              </div>
            </div>
          </div>

          {/* Second Div */}
          <div className="project-card">
            <img
              src="/images/clon-1.png"
              alt="eBay Home Page Clone"
              className="project-image"
              width={640} /* Adjust the width value as needed */
              height={192} 
           
            />
            <div className="project-content">
              <h3 className="project-title">eBay Home Page Clone</h3>
              <p className="project-description">
                I have created a responsive clone of the eBay site home page.
              </p>
              <p className="project-tech-stack">Tech stack: React, Tailwind CSS</p>
              <div className="project-links">
                <a
                  href="https://react-ebay-clone.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Preview
                </a>
              </div>
            </div>
          </div>

          {/* Third Div */}
          <div className="project-card">
            <img
              src="/images/dash.png"
              alt="React Flowbite Dashboard Clone"
              className="project-image"
              width={640} /* Adjust the width value as needed */
              height={192} 
           
            />
            <div className="project-content">
              <h3 className="project-title">React Flowbite Dashboard Clone</h3>
              <p className="project-description">
                A feature-rich React Flowbite Dashboard clone with data charts, real-time updates,
                and seamless navigation.
              </p>
              <p className="project-tech-stack">Tech stack: React, Tailwind CSS</p>
              <div className="project-links">
                <a
                  href="https://react-flowbite-dashboard-clone.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Preview
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}

export default proj