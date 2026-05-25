import { useState, useCallback } from 'react'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import img02 from '../../assets/images/gutters/4947571930521341002.jpg'
import img03 from '../../assets/images/gutters/4947571930521341003.jpg'
import img04 from '../../assets/images/gutters/4947571930521341004.jpg'
import img05 from '../../assets/images/gutters/4947571930521341005.jpg'
import img06 from '../../assets/images/gutters/4947571930521341006.jpg'
import img07 from '../../assets/images/gutters/4947571930521341007.jpg'
import img08 from '../../assets/images/gutters/4947571930521341008.jpg'
import img09 from '../../assets/images/gutters/4947571930521341009.jpg'
import img10 from '../../assets/images/gutters/4947571930521341010.jpg'
import img11 from '../../assets/images/gutters/4947571930521341011.jpg'
import img12 from '../../assets/images/gutters/4947571930521341012.jpg'
import img13 from '../../assets/images/gutters/4947571930521341013.jpg'
import img14 from '../../assets/images/gutters/4947571930521341014.jpg'
import img15 from '../../assets/images/gutters/4947571930521341015.jpg'

const images = [
  img02, img03, img04, img05, img06, img07,
  img08, img09, img10, img11, img12, img13, img14, img15,
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = useCallback((src) => setLightbox(src), [])
  const closeLightbox = useCallback(() => setLightbox(null), [])

  return (
    <>
      <TopBar />
      <Navbar />

      <div className="gallery-hero">
        <div className="section-label">Our Work</div>
        <h1 className="gallery-hero-title">Project Gallery</h1>
        <p className="gallery-hero-desc">Real installations by Az-Tex across San Antonio and surrounding areas.</p>
      </div>

      <div className="gallery-masonry">
        {images.map((src, i) => (
          <div
            key={i}
            className="gallery-item"
            onClick={() => openLightbox(src)}
            role="button"
            tabIndex={0}
            aria-label={`View gutter photo ${i + 1}`}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(src)}
          >
            <img
              src={src}
              alt={`Az-Tex gutter installation ${i + 1}`}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>

      {lightbox && (
        <div
          className="gallery-lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            className="gallery-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close"
          >✕</button>
          <img
            src={lightbox}
            alt="Full size gutter installation"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </>
  )
}
