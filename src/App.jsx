import React, { useState } from 'react';
import ReactLogo from './assets/react.svg';
import ProjectCarousel from './ProjectCarousel';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="overhang">
        <a href="https://www.instagram.com/arjun.sahney">
          <img src="Instagram-Icon.png" alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/arjun-sahney-40b88624b/">
          <img src="Linkedlin.png" alt="LinkedIn" />
        </a>
        <a href="mailto:yourmail@gmail.com">
          <img src="GMAIL.png" alt="Gmail" />
        </a>
        <a href="https://github.com/ArjunSahney">
          <img src="github.png" alt="GitHub" />
        </a>
      </div>
      <div className="container">
        <div className="header">
          <img src="Screen Shot 2023-05-12 at 4.20.02 PM.png" className="header-image" />
        </div>
        <div className="logo-container">
          <img src="Arjun Sahney.png" className="logo-image" />
        </div>
        <h1>Arjun Sahney's Personal Website</h1>
        <p>
          Hi there! My name is Arjun Sahney and I'm a freshman at Dartmouth studying Computer Science modified with Physics
          with a minor in History. I've lived in London, Bombay, Hong Kong, and now New York and have deep passions in
          Quantum Computing, Software Development, and the Startup Space. <br />
          <br />
          In my free time, I enjoy reading, playing Squash and Soccer, and creating music. Feel free to leave your email
          below if you want to get in contact:
        </p>
        <div className="form">
          <label htmlFor="fname">Email:</label>
          <input type="text" id="fname" />
          <input type="submit" value="Submit" />
        </div>
        <div className="content">
          <div className="about-me">
            <div className="skills">
              <h2>Skills:</h2>
              <div className="skills-flex-container">
                <div className="skill-item">
                  <img src="Python-logo-notext.svg.png" alt="Python" />
                  <p>Python</p>
                </div>
                <div className="skill-item">
                  <img src="Java-tutorials.png" alt="Java" />
                  <p>Java</p>
                </div>
                <div className="skill-item">
                  <img src="1200px-C_Programming_Language.svg.png" alt="C" />
                  <p>C</p>
                </div>
                <div className="skill-item">
                  <img src="htmlcssjs-overview.png" alt="HTML/CSS/JS" />
                  <p>HTML/CSS/JS</p>
                </div>
                <div className="skill-item">
                  <img src="microsoftsuite.svg.png" alt="Microsoft Suite" />
                  <p>Microsoft Suite</p>
                </div>
                <div className="skill-item">
                  <img src="github.png" alt="Git" />
                  <p>Git</p>
                </div>
                <div className="skill-item">
                <img src="Accounting.png" alt="Accounting" />
                  <p>Accounting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2>Past Experiences:</h2>
        <div className="flexbox-container">
          <div className="flexbox-item">
            <h3>Incoming Software Engineer - CloudChef</h3>
            <ul>
              <li>Collaborating with a team of software engineers to design and implement scalable and efficient backend systems.</li>
            </ul>
          </div>
          <div className="flexbox-item">
            <h3>Consultant Intern - TAMID Technology Consultants</h3>
            <ul>
              <li>Provided tech consultancy services to Israeli startup Binmatch through building data processing and ML models.</li>
            </ul>
          </div>
          <div className="flexbox-item">
            <h3>Research Intern - International Finance Corporation, Climate Business</h3>
            <ul>
              <li>Conducted research for the Head of Global Climate Business on potential private-sector ESG investments by the IFC into youth climate initiatives.</li>
            </ul>
          </div>
          <div className="flexbox-item">
            <h3>Research Intern - Panopticon Foundation</h3>
            <ul>
              <li>Assisted US Naval War College Professor of Strategy & Policy, Yvonne Chiu, in field research on private sector and government welfare policies for an in-process book on transitioning societies "Iron Fist, Silk Glove".</li>
            </ul>
          </div>
        </div>
        <div className="projects">
          <h2>Projects:</h2>
          <div className="project-carousel">
            <ProjectCarousel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

