import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <nav>
      <div className="logo">
        <span className="logo-main">Az-Tex</span>
        <span className="logo-sub">Seamless Rain Gutters</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span className="phone-nav">☎ (210) 400-5009</span>
        <button className="nav-cta" onClick={() => navigate('/contact')}>Free Quote</button>
      </div>
    </nav>
  )
}
