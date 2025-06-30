import React from 'react';
import './More.css';
import image1 from '../img/hero.jpg'
import image2 from '../img/hero2.jpg'
import image3 from '../img/hk1.jpg'
import image4 from '../img/hk2.jpg'
import image5 from '../img/intern.jpg'
import image6 from '../img/intern2.jpg'

// Sample images - replace with your actual images
const galleryImages = [
  {
    id: 1,
    src: image1,
    alt: 'Graduation',
    caption: 'Monash Graduation'
  },
  {
    id: 2,
    src: image2,
    alt: 'Graduation2',
    caption: 'Monash Ceromony'
  },
  {
    id: 3,
    src: image3,
    alt: 'HKUST Research Program',
    caption: 'HKUST Research Program Lab'
  },
  {
    id: 4,
    src: image4,
    alt: 'HKUST Research Presentation',
    caption: 'HKUST Research Workshop'
  },
  {
    id: 5,
    src: image5,
    alt: 'Intern',
    caption: 'Dealing the P3 issue in Tiktok'
  },
  {
    id: 6,
    src: image6,
    alt: 'Conference',
    caption: 'HUAWEI Tech Conference'
  }
];

const More = () => {
  return (
    <section id="more" className="section-alt">
      <div className="more-container">
        <h2>Gallery</h2>
        <p className="section-subtitle">Some moments from my journey</p>
        
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="gallery-image"
                loading="lazy"
              />
              <div className="image-caption">
                <p>{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default More;