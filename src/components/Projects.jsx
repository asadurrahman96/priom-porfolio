import './Projects.css'

const projects = [
  {
    id: '01',
    title: 'Instant Online Quiz App',
    description: 'A full-stack MERN platform with real-time notifications, user authentication, and dynamic quiz creation.',
    image: 'https://priom-my-portfolio.netlify.app/assets/Quiz%20App.JPG',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    live: 'https://tsquize.vercel.app/',
    github: '#',
  },
  {
    id: '02',
    title: 'Swif-Cart E-Commerce',
    description: 'A modern e-commerce storefront with product filtering, cart management, and responsive design built with React and Tailwind CSS.',
    image: 'https://priom-my-portfolio.netlify.app/assets/Swift%20cart%20nav%20and%20banner.JPG',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    live: 'https://swift-cart-shopping.netlify.app/',
    github: '#',
  },
]

const Projects = () => {
  return (
    <section className="projects container" id="projects">
      <div className="projects-inner">
        <div className="section-label">// Featured Projects</div>
        <h2 className="section-title">Things I've <span>Built</span></h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <a href={project.live} target="_blank" rel="noreferrer" className="overlay-btn">
                    Live Site
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="overlay-btn outline">
                    GitHub
                  </a>
                </div>
              </div>

              <div className="project-body">
                <div className="project-num">{project.id} —</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="project-tech-badge">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.live} target="_blank" rel="noreferrer" className="project-link">
                    Live Site
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-more">
          <p>More coming soon...</p>
        </div>
      </div>
    </section>
  )
}

export default Projects