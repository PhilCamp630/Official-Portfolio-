import React from 'react';
import "./skills.css";


const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">My technical languages</span>
        <div className="skills_graphics container">
        <div align = "center">
                <img src="https://static-00.iconduck.com/assets.00/html-icon-1451x2048-69sehqrp.png" title="HTML5" alt="HTML" width="65" class="skill_icon" />
                <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="92" class="skill_icon"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="80" class="skill_icon" />
                <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/react/react-original-wordmark.svg" title="React" alt="React" width="80" class="skill_icon"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/mysql/mysql-original-wordmark.svg" title="MySQL"  alt="MySQL" width="100" class="skill_icon" />
                <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nodejs/nodejs-original-wordmark.svg" title="NodeJS" alt="NodeJS" width="90" class="skill_icon"/>
                <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/git/git-original-wordmark.svg" title="Git" alt="Git" width="90" class="skill_icon"/>
            </div>
        </div>
        <div className="skills_container container grid">

        </div>
    </section>
  )
}

export default Skills