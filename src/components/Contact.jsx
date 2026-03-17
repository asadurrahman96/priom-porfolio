import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-label">// Get In Touch</div>
        <h2 className="section-title">Let's <span>Connect</span></h2>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-heading">GET IN TOUCH.</h3>
            <p>Have a project in mind or just want to say hi? Feel free to send me a message!</p>
            <div className="contact-links">
              <a href="mailto:asadurrahman1720@gmail.com" className="contact-link">
                <div className="contact-icon">@</div>
                <span>asadurrahman1720@gmail.com</span>
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="contact-link">
                <div className="contact-icon">GH</div>
                <span>github.com/asadurrahman</span>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="contact-link">
                <div className="contact-icon">LI</div>
                <span>linkedin.com/in/asadurrahman</span>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                className="form-input"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="type your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-input"
                name="message"
                placeholder="Hey Asadur! I'd love to work with you..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary contact-submit">
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact