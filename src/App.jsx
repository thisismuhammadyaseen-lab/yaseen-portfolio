import { useState } from "react";
import profilePhoto from "./assets/profile.jpg";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: "Yaseen Restaurant",
      description:
        "A modern restaurant website with menu, order system and admin order management.",
      tech: ["React", "JavaScript", "Express", "MySQL"],
      link: "https://github.com/thisismuhammadyaseen-lab/Yaseen-Restaurant",
    },
    {
      title: "School LMS",
      description:
        "A school management system with students, courses, assignments, attendance and results.",
      tech: ["React", "Node.js", "MySQL", "CSS"],
      link: "https://github.com/thisismuhammadyaseen-lab/school-lms",
    },
    {
      title: "DramaFlix",
      description:
        "A modern drama streaming interface with video content and responsive design.",
      tech: ["React", "Vite", "Tailwind CSS"],
      link: "#",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "C++",
    "Python",
    "Git",
    "GitHub",
  ];

  return (
    <div className="app">
      <header className="navbar">
        <a href="#home" className="logo">
          Y<span>.</span>
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-text">
          <p className="small-title">HELLO, I'M</p>

          <h1>
            Muhammad <span>Yaseen</span>
          </h1>

          <h2>Web Developer & Programmer</h2>

          <p className="hero-description">
            I build modern, responsive and user-friendly websites and web
            applications using modern technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="socials">
            <a
              href="https://github.com/thisismuhammadyaseen-lab"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/yaseen-khan-ba08b6438/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://www.fiverr.com/muham_786"
              target="_blank"
              rel="noreferrer"
            >
              Fiverr
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="profile-circle">
            <img src={profilePhoto} alt="Muhammad Yaseen" />
          </div>

          <h3>Muhammad Yaseen</h3>
          <p>React Developer</p>

          <div className="code-box">
            <span>&lt;</span>
            <strong>code</strong>
            <span>/&gt;</span>
          </div>
        </div>
      </section>

      <section id="about" className="section about">
        <div className="section-heading">
          <p>ABOUT ME</p>
          <h2>Who I Am</h2>
        </div>

        <div className="about-content">
          <div className="about-card">
            <div className="about-icon">💻</div>

            <h3>Web Developer</h3>

            <p>
              I am a beginner web developer and programmer passionate about
              creating clean, modern and responsive web experiences.
            </p>
          </div>

          <div className="about-text">
            <h3>Building ideas into websites.</h3>

            <p>
              My name is Muhammad Yaseen. I am a student and aspiring
              developer from Pakistan. I enjoy learning programming,
              developing websites and creating useful digital projects.
            </p>

            <p>
              I work with HTML, CSS, JavaScript, React, C++, Python and
              Git/GitHub. I am continuously improving my development skills
              through practical projects.
            </p>

            <div className="about-stats">
              <div>
                <strong>08+</strong>
                <span>Skills</span>
              </div>

              <div>
                <strong>03+</strong>
                <span>Projects</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Learning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <div className="section-heading">
          <p>MY SKILLS</p>
          <h2>Technologies I Use</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill}>
              <div className="skill-number">
                0{index + 1}
              </div>

              <h3>{skill}</h3>

              <div className="skill-line">
                <span></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="section-heading">
          <p>MY WORK</p>
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className={`project-top project-${index + 1}`}>
                <span>0{index + 1}</span>

                <div className="project-code">
                  {"</>"}
                </div>
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target={project.link !== "#" ? "_blank" : undefined}
                  rel={
                    project.link !== "#"
                      ? "noreferrer"
                      : undefined
                  }
                  className="project-link"
                >
                  View Project →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section services-section">
        <div className="section-heading">
          <p>WHAT I DO</p>
          <h2>My Services</h2>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <span>01</span>
            <h3>Website Development</h3>

            <p>
              Modern responsive websites built for desktop, tablet and mobile.
            </p>
          </div>

          <div className="service-card">
            <span>02</span>
            <h3>React Development</h3>

            <p>
              Interactive React websites with clean components and modern UI.
            </p>
          </div>

          <div className="service-card">
            <span>03</span>
            <h3>Frontend Development</h3>

            <p>
              Clean and attractive frontend interfaces with smooth user
              experience.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-box">
          <div>
            <p className="small-title">LET'S WORK TOGETHER</p>

            <h2>Have a project in mind?</h2>

            <p>
              I am available for website development, React projects and
              frontend development work.
            </p>
          </div>

          <a
            href="mailto:thisismuhammadyaseen@gmail.com"
            className="primary-btn"
          >
            Contact Me →
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-logo">
          Y<span>.</span>
        </div>

        <p>© 2026 Muhammad Yaseen. All rights reserved.</p>

        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
