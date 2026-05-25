import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <span className="footer-logo-main">Az-Tex</span>
          <span className="footer-logo-sub">Seamless Rain Gutters</span>
          <p className="footer-desc">
            San Antonio's trusted seamless gutter specialists. We protect homes across Bexar County
            with quality installations, repairs, and maintenance.
          </p>
          <p style={{ marginTop: '1rem', fontSize: '13px', fontFamily: 'sans-serif', color: '#555' }}>
            ☎ <a href="tel:2104005009" style={{ color: 'var(--aqua)' }}>(210) 400-5009</a>
          </p>
        </div>
        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            <li><Link to="/services">Gutter Installation</Link></li>
            <li><Link to="/services">Gutter Repair</Link></li>
            <li><Link to="/services">Gutter Guards</Link></li>
            <li><Link to="/services">Gutter Cleaning</Link></li>
            <li><Link to="/services">Downspouts</Link></li>
            <li><Link to="/services">New Construction</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Reviews</Link></li>
            <li><Link to="/">Service Area</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/contact">Free Estimate</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2025 Az-Tex Seamless Rain Gutters. All rights reserved.</span>
        <span>Serving San Antonio &amp; surrounding areas</span>
      </div>
    </footer>
  )
}
