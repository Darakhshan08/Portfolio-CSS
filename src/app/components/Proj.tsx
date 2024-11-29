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

          {/* Fourth Div */}
          {/* <div className="project-card">
            <img
              src="https://picsum.photos/400/250?random=4"
              alt="Weather App"
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">Weather App</h3>
              <p className="project-description">
                Real-time weather forecasting app with location-based updates.
              </p>
              <p className="project-tech-stack">
                Tech stack: React Native, OpenWeather API
              </p>
              <div className="project-links">
                <a className="project-link">Live Preview</a>
                <a className="project-link">View Code</a>
              </div>
            </div>
          </div> */}

          {/* Fifth Div */}
          {/* <div className="project-card">
            <img
              src="https://picsum.photos/400/250?random=5"
              alt="Fitness Tracker"
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">Fitness Tracker</h3>
              <p className="project-description">
                Personal fitness tracking application with workout plans.
              </p>
              <p className="project-tech-stack">
                Tech stack: React, TypeScript, Chart.js
              </p>
              <div className="project-links">
                <a className="project-link">Live Preview</a>
                <a className="project-link">View Code</a>
              </div>
            </div>
          </div> */}

          {/* Sixth Div */}
          {/* <div className="project-card">
            <img
              src="https://picsum.photos/400/250?random=6"
              alt="Recipe Finder"
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">Recipe Finder</h3>
              <p className="project-description">
                Recipe search and management app with meal planning features.
              </p>
              <p className="project-tech-stack">
                Tech stack: Next.js, Prisma, PostgreSQL
              </p>
              <div className="project-links">
                <a className="project-link">Live Preview</a>
                <a className="project-link">View Code</a>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    
    </>
  )
}

export default proj