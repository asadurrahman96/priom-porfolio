import "./About.css";
import resumePDF from "../assets/Asadur Rahman Revised.pdf";
import profileImg from "../assets/Asadur Graduation selfie.jpg";

const techStack = [
  "HTML",
  "CSS",
  "Tailwind",
  "JavaScript",
  "React",
  "Next JS (In Progress)",
  "MongoDB",
  "C++ / DSA",
  "Git",
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-inner container" >
        <div className="section-label">// About Me</div>
        <h2 className="section-title">
          Who I <span>Am</span>
        </h2>

        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="about-image-frame">
              <img
                src={profileImg}
                alt="Asadur Rahman"
                className="about-image"
              />
            </div>
            <a
              href={resumePDF}
              className="btn-primary about-resume-btn"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
          </div>

          <div className="about-text">
            <p>
              Fully committed to the philosophy of life-long learning, I am a
              junior developer with a deep passion for{" "}
              <strong>JavaScript</strong>, <strong>React</strong>, and all
              things web development.
            </p>
            <p>
              Currently, I am focusing on mastering{" "}
              <strong>Data Structures and Algorithms (DSA)</strong> while
              building full-stack applications with <strong>MongoDB</strong> and{" "}
              <strong>Tailwind CSS</strong>.
            </p>

            <div className="about-tech">
              <h3 className="about-tech-title">Tech Stack</h3>
              <div className="about-tech-grid">
                {techStack.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
