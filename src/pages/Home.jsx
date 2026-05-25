import { useNavigate } from 'react-router-dom'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import gutterImg from '../../assets/images/gutters/4947571930521341008.jpg'
import servicesImg from '../../assets/images/gutters/4947571930521341005.jpg'

export default function Home() {
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <>
      <TopBar />
      <Navbar />

      {/* HERO */}
      <div className="hero">
        <div>
          <div className="hero-badge">San Antonio, TX</div>
          <h1>Seamless Gutters<br /><span>Done Right.</span></h1>
          <p>Protect your home from costly water damage with professionally installed seamless rain gutters. Az-Tex has been keeping San Antonio homes dry for years.</p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => navigate('/contact')}>Get a Free Estimate</button>
            <button className="btn-outline" onClick={() => { window.location.href = 'tel:2104005009' }}>☎ Call (210) 400-5009</button>
          </div>
        </div>
        <div className="hero-form-card">
          <h3>Request Your Free Estimate</h3>
          <p>We'll respond within 24 hours</p>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group"><input type="text" placeholder="First Name" /></div>
              <div className="form-group"><input type="text" placeholder="Last Name" /></div>
            </div>
            <div className="form-group"><input type="tel" placeholder="Phone Number" /></div>
            <div className="form-group"><input type="email" placeholder="Email Address" /></div>
            <div className="form-group"><input type="text" placeholder="Your Address" /></div>
            <div className="form-group">
              <select defaultValue="">
                <option value="">Select a Service</option>
                <option>Gutter Installation</option>
                <option>Gutter Repair</option>
                <option>Gutter Guards / Leaf Guards</option>
                <option>Gutter Cleaning</option>
                <option>Downspout Installation</option>
              </select>
            </div>
            <button type="submit" className="btn-submit">Send My Request</button>
          </form>
        </div>
      </div>

      {/* HERO IMAGE */}
      <div style={{ lineHeight: 0 }}>
        <img
          src={gutterImg}
          alt="Az-Tex seamless gutter installation in San Antonio"
          style={{ width: '100%', maxHeight: '420px', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-item"><div className="trust-icon">✓</div> Licensed &amp; Insured</div>
        <div className="trust-item"><div className="trust-icon">★</div> 5-Star Rated</div>
        <div className="trust-item"><div className="trust-icon">🔒</div> Satisfaction Guaranteed</div>
        <div className="trust-item"><div className="trust-icon">☎</div> Free Estimates</div>
        <div className="trust-item"><div className="trust-icon">🏠</div> Local San Antonio</div>
      </div>

      {/* SERVICES PREVIEW */}
      <section className="services-bg">
        <div className="center">
          <div className="section-label">What We Do</div>
          <div className="section-title">Our Gutter Services</div>
          <div className="section-desc" style={{ margin: '0 auto 2.5rem' }}>
            From new installs to repairs and cleaning, Az-Tex handles every aspect of your gutter system in San Antonio and surrounding areas.
          </div>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">💧</div>
            <h4>Seamless Gutter Installation</h4>
            <p>Custom-fabricated on-site to your exact measurements. No seams means fewer leaks.</p>
            <span className="service-link">Learn More →</span>
          </div>
          <div className="service-card">
            <div className="service-icon">🔧</div>
            <h4>Gutter Repair</h4>
            <p>Sagging, leaking, or pulling away from the fascia? We fix it fast and right.</p>
            <span className="service-link">Learn More →</span>
          </div>
          <div className="service-card">
            <div className="service-icon">🌿</div>
            <h4>Gutter Guards &amp; Leaf Guards</h4>
            <p>Keep debris out and reduce maintenance with high-quality gutter protection systems.</p>
            <span className="service-link">Learn More →</span>
          </div>
          <div className="service-card">
            <div className="service-icon">🌟</div>
            <h4>Gutter Cleaning</h4>
            <p>Clogged gutters lead to water damage. Regular cleaning keeps your system flowing freely.</p>
            <span className="service-link">Learn More →</span>
          </div>
          <div className="service-card">
            <div className="service-icon">⬇</div>
            <h4>Downspout Installation</h4>
            <p>Proper downspout placement directs water safely away from your foundation.</p>
            <span className="service-link">Learn More →</span>
          </div>
          <div className="service-card">
            <div className="service-icon">🏗</div>
            <h4>New Construction</h4>
            <p>Working with builders across San Antonio. We keep projects on schedule.</p>
            <span className="service-link">Learn More →</span>
          </div>
        </div>
        <div className="center" style={{ marginTop: '2rem' }}>
          <button className="btn-primary" onClick={() => navigate('/services')}>View All Services</button>
        </div>
      </section>

      {/* SERVICES IMAGE */}
      <div style={{ lineHeight: 0 }}>
        <img
          src={servicesImg}
          alt="Az-Tex gutter services in San Antonio"
          style={{ width: '100%', maxHeight: '460px', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* WHY US */}
      <section>
        <div className="why-grid">
          <div>
            <div className="section-label">Why Az-Tex</div>
            <div className="section-title">San Antonio's Trusted Gutter Experts</div>
            <ul className="why-list">
              <li>
                <div className="why-check">✓</div>
                <div className="why-text">
                  <strong>Seamless — No Joints, No Leaks</strong>
                  <span>All gutters are custom-formed on-site using a continuous run of aluminum.</span>
                </div>
              </li>
              <li>
                <div className="why-check">✓</div>
                <div className="why-text">
                  <strong>Local San Antonio Company</strong>
                  <span>We live here, work here, and stand behind every job we do in our community.</span>
                </div>
              </li>
              <li>
                <div className="why-check">✓</div>
                <div className="why-text">
                  <strong>Licensed, Bonded &amp; Insured</strong>
                  <span>Full coverage protects you and your property throughout the entire project.</span>
                </div>
              </li>
              <li>
                <div className="why-check">✓</div>
                <div className="why-text">
                  <strong>Free Detailed Estimates</strong>
                  <span>No pressure, no obligation. We give you an honest quote before any work begins.</span>
                </div>
              </li>
              <li>
                <div className="why-check">✓</div>
                <div className="why-text">
                  <strong>Workmanship Warranty</strong>
                  <span>We stand behind our work with a warranty on labor and materials.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="why-stat-box">
            <div className="stat-row">
              <div className="stat-num">500+</div>
              <div className="stat-label">Homes Protected in San Antonio</div>
            </div>
            <div className="stat-row">
              <div className="stat-num">5★</div>
              <div className="stat-label">Average Customer Rating</div>
            </div>
            <div className="stat-row">
              <div className="stat-num">100%</div>
              <div className="stat-label">Satisfaction Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews-bg">
        <div className="center">
          <div className="section-label" style={{ color: 'var(--aqua)' }}>What Our Customers Say</div>
          <div className="section-title">5-Star Reviews from San Antonio Homeowners</div>
        </div>
        <div className="reviews-grid">
          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p className="review-text">"Az-Tex was professional from start to finish. They showed up on time, did excellent work, and cleaned everything up. My gutters look great and work perfectly."</p>
            <div className="reviewer">Maria G. <span>— Helotes, TX</span></div>
          </div>
          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p className="review-text">"I got three quotes and Az-Tex was the most professional by far. Honest pricing, great communication, and quality installation. Highly recommend them."</p>
            <div className="reviewer">James R. <span>— Stone Oak, TX</span></div>
          </div>
          <div className="review-card">
            <div className="stars">★★★★★</div>
            <p className="review-text">"They replaced all my old gutters after a storm and the difference is incredible. Fast service, fair price, and no mess left behind. Will use again."</p>
            <div className="reviewer">Linda T. <span>— Schertz, TX</span></div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <div className="cta-banner">
        <h2>Ready to Protect Your Home?</h2>
        <p>Get a free, no-obligation estimate from San Antonio's seamless gutter experts.</p>
        <div className="cta-banner-btns">
          <button className="btn-dark" onClick={() => navigate('/contact')}>Get My Free Estimate</button>
          <button className="btn-white" onClick={() => { window.location.href = 'tel:2104005009' }}>☎ (210) 400-5009</button>
        </div>
      </div>

      {/* GOOGLE MAP */}
      <div style={{ lineHeight: 0, borderTop: '3px solid var(--aqua)' }}>
        <iframe
          title="Az-Tex Seamless Rain Gutters Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.6!2d-98.5735!3d29.4287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c5f1e8a5e0001%3A0x1!2s4730+Pettus+St%2C+San+Antonio%2C+TX+78228!5e0!3m2!1sen!2sus!4v1700000000000"
          width="100%"
          height="420"
          style={{ display: 'block', border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <Footer />
    </>
  )
}
