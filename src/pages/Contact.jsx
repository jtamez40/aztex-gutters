import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <>
      <TopBar />
      <Navbar />

      {/* PAGE HEADER */}
      <div style={{ background: 'var(--black)', padding: '3rem 2rem', color: 'var(--white)' }}>
        <div className="section-label" style={{ color: 'var(--aqua)' }}>Get in Touch</div>
        <div className="section-title" style={{ color: 'var(--white)' }}>Contact Az-Tex</div>
        <p style={{ fontFamily: 'sans-serif', color: '#aaa', maxWidth: '580px' }}>
          Ready for a free estimate? Have a question? We respond fast — usually within a few hours.
        </p>
      </div>

      <section>
        <div className="contact-grid">

          {/* Contact Info */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <div className="contact-icon">☎</div>
              <div className="contact-item-text">
                <strong>Phone</strong>
                <a href="tel:2104005009">(210) 400-5009</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🕑</div>
              <div className="contact-item-text">
                <strong>Hours</strong>
                <span>Mon – Sat: 8:00 AM – 6:00 PM</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🏠</div>
              <div className="contact-item-text">
                <strong>Service Area</strong>
                <span>San Antonio, Helotes, Stone Oak, Schertz, Converse, Live Oak &amp; more</span>
              </div>
            </div>
            <div style={{ marginTop: '2rem', background: 'var(--aqua-light)', borderLeft: '4px solid var(--aqua)', padding: '1.25rem 1.5rem' }}>
              <p style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--aqua-dark)', marginBottom: '4px' }}>Free Estimates</p>
              <p style={{ fontFamily: 'sans-serif', fontSize: '13px', color: 'var(--text-muted)' }}>All estimates are 100% free and come with no obligation. We'll inspect your gutters and give you an honest recommendation.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-card">
            <h3>Request a Free Estimate</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group"><input type="text" placeholder="First Name" /></div>
                <div className="form-group"><input type="text" placeholder="Last Name" /></div>
              </div>
              <div className="form-group"><input type="tel" placeholder="Phone Number" /></div>
              <div className="form-group"><input type="email" placeholder="Email Address" /></div>
              <div className="form-group"><input type="text" placeholder="Property Address" /></div>
              <div className="form-group">
                <select defaultValue="">
                  <option value="">Select a Service</option>
                  <option>Gutter Installation</option>
                  <option>Gutter Repair</option>
                  <option>Gutter Guards / Leaf Guards</option>
                  <option>Gutter Cleaning</option>
                  <option>Downspout Installation</option>
                  <option>New Construction</option>
                  <option>Not Sure — Need Inspection</option>
                </select>
              </div>
              <div className="form-group">
                <textarea rows="4" placeholder="Tell us a little about your project or any concerns..."></textarea>
              </div>
              <button type="submit" className="btn-submit">Submit My Request</button>
              <p style={{ fontFamily: 'sans-serif', fontSize: '11px', color: '#aaa', marginTop: '10px', textAlign: 'center' }}>
                By submitting you agree to be contacted by Az-Tex Seamless Rain Gutters via phone, text, or email.
              </p>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}
