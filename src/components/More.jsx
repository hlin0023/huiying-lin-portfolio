import React from 'react';
import './More.css';
import image1 from '../img/hero.jpg'
import image2 from '../img/hero2.jpg'
import image3 from '../img/hk1.jpg'
import image4 from '../img/hk2.jpg'
import image5 from '../img/intern.jpg'
import image6 from '../img/intern2.jpg'

import casual1 from '../img/gym.jpg'
import casual2 from '../img/running.jpg'
import casual3 from '../img/hiking.jpg'
// import casual3 from '../img/badminton.jpg'
// import casual4 from '../img/swimming.jpg'
// import casual5 from '../img/coffee.jpg'
// import casual6 from '../img/cocktail.jpg'

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

const galleryCasualImages = [
  {
    id: 1,
    src: casual1,
    alt: 'Gym',
    caption: 'Gym'
  },
  {
    id: 2,
    src: casual2,
    alt: 'Running',
    caption: 'Run'
  },
  {
    id: 3,
    src: casual3,
    alt: 'Hiking',
    caption: 'Hiking'
  }
  // {
  //   id: 4,
  //   src: casual4,
  //   alt: 'Swimming',
  //   caption: 'Swimming'
  // },
  // {
  //   id: 5,
  //   src: casual5,
  //   alt: 'Coffee',
  //   caption: 'Making Coffee'
  // },
  // {
  //   id: 6,
  //   src: casual6,
  //   alt: 'Cocktails',
  //   caption: 'Making Cocktails'
  // }
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

        <p className="section-subtitle">Something beyound my study and work</p>


        <div className="gallery-grid">
          {galleryCasualImages.map((image) => (
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