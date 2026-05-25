import { useNavigate } from 'react-router-dom'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const serviceItemBase = {
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gap: '2rem',
  alignItems: 'start',
}
const withBorder = { ...serviceItemBase, borderBottom: '1px solid var(--gray2)', paddingBottom: '2.5rem' }
const iconBoxAqua = { background: 'var(--aqua)', padding: '2rem', textAlign: 'center' }
const iconBoxGray = { background: 'var(--gray)', padding: '2rem', textAlign: 'center' }
const iconStyle = { fontSize: '48px', marginBottom: '0.5rem' }
const h3Style = { fontFamily: "'Arial Black', sans-serif", fontSize: '22px', textTransform: 'uppercase', marginBottom: '0.75rem' }
const pStyle = { fontFamily: 'sans-serif', color: 'var(--text-muted)', fontSize: '14px', lineHeight: '1.7', marginBottom: '1rem' }
const ulStyle = { fontFamily: 'sans-serif', fontSize: '13px', color: 'var(--text-muted)', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '1rem' }

export default function Services() {
  const navigate = useNavigate()

  return (
    <>
      <TopBar />
      <Navbar />

      {/* PAGE HEADER */}
      <div style={{ background: 'var(--black)', padding: '3rem 2rem', color: 'var(--white)' }}>
        <div className="section-label" style={{ color: 'var(--aqua)' }}>Everything You Need</div>
        <div className="section-title" style={{ color: 'var(--white)' }}>Our Gutter Services</div>
        <p style={{ fontFamily: 'sans-serif', color: '#aaa', maxWidth: '580px' }}>
          Az-Tex provides complete gutter solutions for residential and commercial properties across
          San Antonio, Helotes, Stone Oak, Schertz, and surrounding areas.
        </p>
      </div>

      <section>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

          {/* Seamless Gutter Installation */}
          <div style={withBorder}>
            <div style={iconBoxAqua}>
              <div style={iconStyle}>💧</div>
              <div style={{ fontFamily: 'sans-serif', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', color: 'var(--black)' }}>Most Popular</div>
            </div>
            <div>
              <h3 style={h3Style}>Seamless Gutter Installation</h3>
              <p style={pStyle}>Unlike sectional gutters, seamless gutters are custom-formed on-site using a single continuous piece of aluminum, steel, or copper. This eliminates joints and seams — the #1 cause of leaks — and creates a cleaner finished look for your home.</p>
              <ul style={ulStyle}>
                <li>✓ &nbsp; Available in 5" and 6" K-style profiles</li>
                <li>✓ &nbsp; Multiple color options to match your home</li>
                <li>✓ &nbsp; Custom-fabricated on your property</li>
                <li>✓ &nbsp; Aluminum, steel, and copper options</li>
              </ul>
              <button className="btn-primary" onClick={() => navigate('/contact')}>Get a Free Quote</button>
            </div>
          </div>

          {/* Gutter Repair */}
          <div style={withBorder}>
            <div style={iconBoxGray}>
              <div style={iconStyle}>🔧</div>
            </div>
            <div>
              <h3 style={h3Style}>Gutter Repair</h3>
              <p style={pStyle}>Sagging gutters, leaky joints, improper pitch, holes, or gutters pulling away from your fascia board — we diagnose the problem and fix it right the first time. Often a repair is all you need.</p>
              <ul style={ulStyle}>
                <li>✓ &nbsp; Joint and seam repair</li>
                <li>✓ &nbsp; Re-sloping and re-pitching</li>
                <li>✓ &nbsp; Hanger and bracket replacement</li>
                <li>✓ &nbsp; Hole and crack patching</li>
              </ul>
              <button className="btn-primary" onClick={() => navigate('/contact')}>Schedule a Repair</button>
            </div>
          </div>

          {/* Gutter Guards */}
          <div style={withBorder}>
            <div style={iconBoxGray}>
              <div style={iconStyle}>🌿</div>
            </div>
            <div>
              <h3 style={h3Style}>Gutter Guards &amp; Leaf Guards</h3>
              <p style={pStyle}>Stop climbing ladders every season to scoop out debris. Gutter guards keep leaves, twigs, and pests out while allowing water to flow freely. A smart investment that pays for itself over time.</p>
              <ul style={ulStyle}>
                <li>✓ &nbsp; Micro-mesh, screen, and solid cover options</li>
                <li>✓ &nbsp; Works with new or existing gutters</li>
                <li>✓ &nbsp; Reduces maintenance significantly</li>
                <li>✓ &nbsp; Backed by product warranty</li>
              </ul>
              <button className="btn-primary" onClick={() => navigate('/contact')}>Get a Free Quote</button>
            </div>
          </div>

          {/* Gutter Cleaning */}
          <div style={withBorder}>
            <div style={iconBoxGray}>
              <div style={iconStyle}>🌟</div>
            </div>
            <div>
              <h3 style={h3Style}>Gutter Cleaning</h3>
              <p style={pStyle}>Clogged gutters are the leading cause of foundation damage, roof damage, and basement flooding. We recommend cleaning at least twice a year — especially before San Antonio's spring and fall rain seasons.</p>
              <ul style={ulStyle}>
                <li>✓ &nbsp; Full debris removal from gutters and downspouts</li>
                <li>✓ &nbsp; Flush and flow test</li>
                <li>✓ &nbsp; Inspection report included</li>
                <li>✓ &nbsp; Residential and commercial</li>
              </ul>
              <button className="btn-primary" onClick={() => navigate('/contact')}>Schedule Cleaning</button>
            </div>
          </div>

          {/* Downspouts & New Construction */}
          <div style={serviceItemBase}>
            <div style={iconBoxGray}>
              <div style={iconStyle}>🏗</div>
            </div>
            <div>
              <h3 style={h3Style}>Downspouts &amp; New Construction</h3>
              <p style={pStyle}>Proper downspout placement and sizing ensures water is directed safely away from your foundation. We also work directly with builders and contractors for new construction projects throughout the San Antonio area.</p>
              <button className="btn-primary" onClick={() => navigate('/contact')}>Get a Free Quote</button>
            </div>
          </div>

        </div>
      </section>

      {/* CTA BANNER */}
      <div className="cta-banner">
        <h2>Not Sure What You Need?</h2>
        <p>We'll come out, inspect your system, and give you an honest recommendation — no pressure.</p>
        <div className="cta-banner-btns">
          <button className="btn-dark" onClick={() => navigate('/contact')}>Request Free Inspection</button>
          <button className="btn-white" onClick={() => { window.location.href = 'tel:2104005009' }}>☎ (210) 400-5009</button>
        </div>
      </div>

      <Footer />
    </>
  )
}
