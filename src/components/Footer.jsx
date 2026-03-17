import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">&lt;Asadur /&gt;</div>
          <p className="footer-text">
            Designed & Built by <span>Asadur Rahman</span> · {new Date().getFullYear()}
          </p>
          <div className="footer-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:asadurrahman1720@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer