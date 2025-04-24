import { motion } from "framer-motion"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Logo from "../../assets/Logo.jpg"
import Img19 from "../../assets/Img19.jpg"
import Img12 from "../../assets/Img12.jpg"
import Img29 from "../../assets/Img29.jpg"
import Img31 from "../../assets/Img31.jpg"
import Img27 from "../../assets/Img27.jpg"
import Img32 from "../../assets/Img32.jpg"
import Img34 from "../../assets/Img34.jpg"
import Img24 from "../../assets/Img24.jpg"
import Img37 from "../../assets/Img37.jpg"
import Img46 from "../../assets/Img46.jpg"
import Img39 from "../../assets/Img39.jpg"
import Img41 from "../../assets/Img41.jpg"
import Img42 from "../../assets/Img42.jpg"
import Img8 from "../../assets/Img8.jpg"
import Img17 from "../../assets/Img17.jpg"
import Img15 from "../../assets/Img15.jpg"
import Img11 from "../../assets/Img11.jpg"
import Img47 from "../../assets/Img47.webp"
import Img9 from "../../assets/Img9.jpg"
import Img33 from "../../assets/Img33.jpg"
import Img45 from "../../assets/Img45.jpg"
import Img40 from "../../assets/Img40.jpg"
import Vid1 from "../../assets/Vid1.mp4"
import Vid3 from "../../assets/Vid3.mp4"
import Vid5 from "../../assets/Vid5.mp4"
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
            <img src={Logo} alt="Logo" />
            <div className="carousel-caption">
              <h3>Entorno Natural</h3>
              <p>Disfruta de paisajes impresionantes</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={Img19} alt="Paisaje 2" />
            <div className="carousel-caption">
              <h3>Cabañas Confortables</h3>
              <p>Paisajes Increibles</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={Img12} alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Momentos Inolvidables</p>
            </div>
          </div>

          <div className="carousel-slide">
            <img src={Img29} alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Tu refugio natural</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={Img31} alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Tu refugio natural</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={Img27} alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Tu refugio natural</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={Img32} alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Tu refugio natural</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={Img34} alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Tu refugio natural</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={Img24} alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Tu refugio natural</p>
            </div>
          </div>

          <div className="carousel-slide">
            <img src={Img37} alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Tu refugio natural</p>
            </div>
          </div>

          <div className="carousel-slide">
            <img src={Img46} alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Tu refugio natural</p>
            </div>
          </div>

          <div className="carousel-slide">
            <img src={Img39} alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Tu refugio natural</p>
            </div>
          </div>

          <div className="carousel-slide">
            <img src={Img41} alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Tu refugio natural</p>
            </div>
          </div>

          <div className="carousel-slide">
            <img src={Img42} alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Tu refugio natural</p>
            </div>
          </div>

          <div className="carousel-slide">
            <img src={Img8} alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Tu refugio natural</p>
            </div>
          </div>

          <div className="carousel-slide">
            <img src={Img17} alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Tu refugio natural</p>
            </div>
          </div>

          <div className="carousel-slide">
            <img src={Img15} alt="Paisaje 1" />
            <div className="carousel-caption">
              <h3>Cabañas Camino al Agua</h3>
              <p>Tu refugio natural</p>
            </div>
          </div>

          <div className="carousel-slide">
            <img src={Img11} alt="Paisaje 1" />
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
            <img src={Img47} alt="Cabaña exterior" />
            <div className="gallery-caption">Exterior de cabañas</div>
          </motion.div>
          <motion.div className="gallery-item" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src={Img9} alt="Interior de cabaña" />
            <div className="gallery-caption">Interior acogedor</div>
          </motion.div>
          <motion.div className="gallery-item" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src={Img33} alt="Área común" />
            <div className="gallery-caption">Áreas comunes</div>
          </motion.div>
          <motion.div className="gallery-item" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src={Img27} alt="Río cercano" />
            <div className="gallery-caption">Río cercano</div>
          </motion.div>
          <motion.div className="gallery-item" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src={Img45} alt="Sendero natural" />
            <div className="gallery-caption">Senderos naturales</div>
          </motion.div>
          <motion.div className="gallery-item" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <img src={Img40} alt="Vista panorámica" />
            <div className="gallery-caption">Vistas panorámicas</div>
          </motion.div>
        </div>
      </section>

      <section className="video-section">
        <h2>Conoce Nuestra Experiencia</h2>
        <div className="video-container">
          <video className="video1" src={Vid1} autoPlay muted loop controls alt="Video de cabañas" />
          <video className="video1" src={Vid3} autoPlay muted loop controls alt="Video de cabañas" />
          <video className="video1" src={Vid5} autoPlay muted loop controls alt="Video de cabañas" />
        </div>
      </section>
    </motion.div>
  )
}

export default Landing
