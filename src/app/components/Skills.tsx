import React from 'react'
import Image from "next/image";
import "../style/skills.css";

function Skills() {
    return (
      <>
        <section className="skills-section">
          <h2 className="skills-heading">My Tech Stack</h2>
          <p className="skills-subheading">
            Technologies I&apos;ve been working with recently
          </p>
  
          <div className="skills-grid">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML5"
              className="skills-icon"
              width={64}
              height={64}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS3"
              className="skills-icon"
              width={64}
              height={64}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              className="skills-icon"
              width={64}
              height={64}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              className="skills-icon"
              width={64}
              height={64}
            />
            <Image
              src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
              alt="Redux"
              className="skills-icon"
              width={64}
              height={64}
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              alt="Bootstrap"
              className="skills-icon"
              width={64}
              height={64}
            />
          </div>
        </section>
      
 
    </>
  )
}

export default Skills