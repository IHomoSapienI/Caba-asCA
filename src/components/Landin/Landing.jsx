"use client"

import { motion } from "framer-motion"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./Landing.css"

function Landing() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  }

  return (
    <motion.div className="landing-container" initial="hidden" animate="visible" variants={fadeIn}>
      <header className="landing-header">
        <h1>Galería de Imágenes</h1>
        <p>Descubre la belleza de Cabañas Camino al Agua</p>
      </header>

      <div className="carousel-wrapper">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={true}
          showStatus={false}
          interval={5000}
          transitionTime={1000}
          className="main-carousel"
        >
          <div className="carousel-slide">
            <img src="/FotosYessi/Logo.jpg" alt="Logo" />
            <div className="carousel-caption">
              <h3>Entorno Natural</h3>
              <p>Disfruta de paisajes impresionantes</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src="/FotosYessi/Img19.jpg" alt="Paisaje 2" />
            <div className="carousel-caption">
              <h3>Cabañas Confortables</h3>
              <p>Paisajes Increibles</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src="/FotosYessi/Img12.jpg" alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Momentos Inolvidables</p>
            </div>
          </div>


          <div className="carousel-slide">
            <img src="/FotosYessi/Img29.jpg" alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Tu refugio natural</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src="/FotosYessi/Img31.jpg" alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Tu refugio natural</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src="/FotosYessi/Img27.jpg" alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Tu refugio natural</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src="/FotosYessi/Img32.jpg" alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Tu refugio natural</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src="/FotosYessi/Img34.jpg" alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Tu refugio natural</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src="/FotosYessi/Img24.jpg" alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Tu refugio natural</p>
            </div>
          </div>

          <div className="carousel-slide">
            <img src="/FotosYessi/Img37.jpg" alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Tu refugio natural</p>
            </div>
          </div>

          <div className="carousel-slide">
            <img src="/FotosYessi/Img46.jpg" alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Tu refugio natural</p>
            </div>
          </div>

          <div className="carousel-slide">
            <img src="/FotosYessi/Img39.jpg" alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Tu refugio natural</p>
            </div>
          </div>

          <div className="carousel-slide">
            <img src="/FotosYessi/Img41.jpg" alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Tu refugio natural</p>
            </div>
          </div>

          <div className="carousel-slide">
            <img src="/FotosYessi/Img42.jpg" alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Tu refugio natural</p>
            </div>
          </div>

          <div className="carousel-slide">
            <img src="/FotosYessi/Img8.jpg" alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Tu refugio natural</p>
            </div>
          </div>

          <div className="carousel-slide">
            <img src="/FotosYessi/Img17.jpg" alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Tu refugio natural</p>
            </div>
          </div>

          <div className="carousel-slide">
            <img src="/FotosYessi/Img15.jpg" alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Tu refugio natural</p>
            </div>
          </div>

          <div className="carousel-slide">
            <img src="/FotosYessi/Img11.jpg" alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Tu refugio natural</p>
            </div>
          </div>

        </Carousel>
      </div>

      <section className="gallery-section">
        <h2>Nuestras Instalaciones</h2>
        <div className="gallery-grid">
          <motion.div className="gallery-item" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src="/FotosYessi/Img47.webp" alt="Cabaña exterior" />
            <div className="gallery-caption">Exterior de cabañas</div>
          </motion.div>
          <motion.div className="gallery-item" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src="/FotosYessi/Img9.jpg" alt="Interior de cabaña" />
            <div className="gallery-caption">Interior acogedor</div>
          </motion.div>
          <motion.div className="gallery-item" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src="/FotosYessi/Img33.jpg" alt="Área común" />
            <div className="gallery-caption">Áreas comunes</div>
          </motion.div>
          <motion.div className="gallery-item" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src="/FotosYessi/Img27.jpg" alt="Río cercano" />
            <div className="gallery-caption">Río cercano</div>
          </motion.div>
          <motion.div className="gallery-item" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src="/FotosYessi/Img45.jpg" alt="Sendero natural" />
            <div className="gallery-caption">Senderos naturales</div>
          </motion.div>
          <motion.div className="gallery-item" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src="/FotosYessi/Img40.jpg" alt="Vista panorámica" />
            <div className="gallery-caption">Vistas panorámicas</div>
          </motion.div>
        </div>
      </section>

      <section className="video-section">
        <h2>Conoce Nuestra Experiencia</h2>
        <div className="video-container">
          <div className="video-placeholder">
            {/* <div className="play-button">▶</div> */}
            <video className="video1" src="/FotosYessi/Vid1.mp4" autoPlay muted loop controls alt="Video de cabañas" />
            
            <video className="video1" src="/FotosYessi/Vid3.mp4" autoPlay muted  loop controls alt="Video de cabañas" />

            <video className="video1" src="/FotosYessi/Vid5.mp4" autoPlay muted loop alt controls="Video de cabañas" />
          </div>
          
        </div>
      </section>
    </motion.div>
  )
}

export default Landing
