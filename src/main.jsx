import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const skills = [
  ["Programming", "Java", "Python", "SQL"],
  ["Backend", "Spring Boot", "Spring Security", "REST APIs", "JWT"],
  ["Frontend", "HTML", "CSS", "JavaScript", "React"],
  ["Database & Tools", "MySQL", "Git", "GitHub", "Maven", "Postman"]
];

const projects = [
  {
    name: "CareerPilotAI",
    type: "AI-powered career guidance platform",
    description:
      "A platform designed to help users explore career goals, manage skills and receive AI-assisted career guidance.",
    stack: ["React", "Java", "Spring Boot", "Spring Security", "MySQL", "Gemini API", "JWT"],
    github: "https://github.com/Amit-Bandivaddar/CareerPilotAI"
  },
  {
    name: "HireHub Job Portal",
    type: "Full-stack job portal",
    description:
      "A full-stack job portal project. Add a concise description of the features you implemented, such as job listings, applications and user-specific access.",
    stack: ["Java", "Spring Boot", "React", "MySQL", "REST APIs"],
    github: "Amit-Bandivaddar / HireHub-job-portal"
  }
];

function App() {
  return (
    <div className="page">
      <nav className="nav container">
        <a className="brand" href="#home">AB<span>.</span></a>
        <div className="navlinks">
          <a href="#about">About</a><a href="#skills">Skills</a>
          <a href="#projects">Projects</a><a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="#contact">Let's connect <span>↗</span></a>
      </nav>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse"></span> OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES</div>
            <p className="hello">Hello, I'm</p>
            <h1>Amit <span>Bandivaddar.</span></h1>
            <h2>Aspiring Software Engineer <b>·</b> Python Backend Developer</h2>
            <p className="intro">
              I build backend-focused applications and enjoy solving problems with
              Python, Spring Boot and SQL. I’m a Computer Science student who is
              continuously learning and turning ideas into practical software.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Explore my work <span>↗</span></a>
              <a className="button secondary" href="#contact">Contact me</a>
            </div>
            <div className="socials">
              <a href="https://github.com/Amit-Bandivaddar" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="orb orb-one"></div><div className="orb orb-two"></div>
            <div className="code-window">
              <div className="window-top"><i></i><i></i><i></i><span>developer.java</span></div>
              <pre><code><em>public class</em> Developer {"{"}{"\n"}  String name = <strong>"Amit"</strong>;{"\n"}  String focus = <strong>"Backend"</strong>;{"\n"}{"\n"}  <em>void</em> build() {"{"}{"\n"}    learn();{"\n"}    create();{"\n"}    improve();{"\n"}  {"}"}{"\n"}{"}"}</code></pre>
            </div>
            <div className="floating-tag">☕ Python · Spring Boot</div>
            <div className="hero-caption">Building. Learning. Improving.</div>
          </div>
        </section>

        <section className="section container" id="about">
          <div className="section-label">01 / ABOUT</div>
          <div className="section-grid">
            <h2>Curious mind.<br/><span>Practical builder.</span></h2>
            <div>
              <p className="section-text">
                I am a Computer Science Engineering student at University Visvesvaraya
                College of Engineering (UVCE), interested in backend development and
                building useful software applications.
              </p>
              <p className="muted">
                My current focus is strengthening Java, Spring Boot, database
                fundamentals and data structures and algorithms while developing
                full-stack projects.
              </p>
              <div className="mini-facts">
                <div><strong>01</strong><span>Backend development</span></div>
                <div><strong>02</strong><span>Problem solving</span></div>
                <div><strong>03</strong><span>Continuous learning</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <div className="section-label">02 / TECHNICAL SKILLS</div>
            <h2 className="section-heading">Tools I work with<span>.</span></h2>
            <div className="skill-grid">
              {skills.map(([title, ...items]) => (
                <article className="skill-card" key={title}>
                  <div className="skill-icon">{title === "Programming" ? "⌘" : title === "Backend" ? "⌁" : title === "Frontend" ? "▣" : "▤"}</div>
                  <h3>{title}</h3>
                  <div className="tags">{items.map(item => <span key={item}>{item}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="projects">
          <div className="section-label">03 / SELECTED PROJECTS</div>
          <div className="projects-title">
            <h2 className="section-heading">Things I've built<span>.</span></h2>
            <p className="muted">A selection of academic and personal development work.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="project-top"><span>PROJECT 0{index + 1}</span><span className="project-symbol">{index === 0 ? "✳" : "⌘"}</span></div>
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
                <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                  {project.github === "#" ? "Add GitHub repository link" : "View on GitHub"} <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="education">
          <div className="container education-inner">
            <div className="section-label">04 / EDUCATION</div>
            <div><h2>Computer Science Engineering</h2><p>University Visvesvaraya College of Engineering (UVCE)</p><span className="muted">B.E. · Graduated in: 2027</span></div>
          </div>
        </section>

        <section className="section container contact" id="contact">
          <div className="section-label">05 / CONTACT</div>
          <h2>Have an opportunity<br/>or idea? <span>Let's talk.</span></h2>
          <p className="muted">I'm interested in software engineering opportunities and meaningful projects.</p>
          <div className="contact-links">
            <a href="mailto:amit.h.b@campusuvce.in">amit.h.b@campusuvce.in↗</a>
            <a href="https://github.com/Amit-Bandivaddar" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
          <p className="footer">© {new Date().getFullYear()} Amit Bandivaddar. Built with React.</p>
        </section>
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
