"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import "./Home.css"

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="home-container" 
    >
      
      <div className="hero-section">
        <div className="hero-content">
          <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            Bienvenidos a Cabañas Camino al Agua
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Un refugio natural para desconectar y disfrutar
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hero-buttons"
          >
            <Link to="/landing" className="btn">
              Ver Galería
            </Link>
            <a href="#contacto" className="btn btn-secondary">
              Reservar Ahora
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="features-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="feature-card" variants={itemVariants}>
          <div className="feature-icon">🌿</div>
          <h3>Naturaleza Pura</h3>
          <p>Disfruta de un entorno natural único, rodeado de vegetación y sonidos de la naturaleza.</p>
        </motion.div>

        <motion.div className="feature-card" variants={itemVariants}>
          <div className="feature-icon">🏡</div>
          <h3>Cabañas Confortables</h3>
          <p>Nuestras cabañas están equipadas con todo lo necesario para una estadía cómoda y placentera.</p>
        </motion.div>

        <motion.div className="feature-card" variants={itemVariants}>
          <div className="feature-icon">💧</div>
          <h3>Cerca del Agua</h3>
          <p>A pocos pasos de arroyos y ríos cristalinos donde podrás refrescarte y relajarte.</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="about-section section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>Sobre Nosotros</h2>
        <p>
          En Cabañas Camino al Agua ofrecemos una experiencia única de hospedaje en cabañas rurales que permite a
          nuestros huéspedes reconectarse con la naturaleza. Ubicados en un entorno privilegiado, nuestras instalaciones
          combinan el confort moderno con el encanto rústico para crear un ambiente acogedor y auténtico.
        </p>
        <p>
          Fundadas en 2021, nuestras cabañas han sido diseñadas pensando en la sostenibilidad y el respeto por el medio
          ambiente, utilizando materiales locales y prácticas eco-amigables.
        </p>
        <Link to="/mision-vision" className="btn">
          Conoce Nuestra Misión y Visión
        </Link>
      </motion.div>

      <motion.div
        className="testimonials-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>Lo que dicen nuestros huéspedes</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>
                "Una experiencia inolvidable. Las cabañas son hermosas y el entorno natural es impresionante. Volveremos
                pronto!"
              </p>
              <div className="testimonial-author">- María y Juan</div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"El lugar perfecto para desconectar de la ciudad. Atención personalizada y cabañas muy cómodas."</p>
              <div className="testimonial-author">- Carlos G.</div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>
                "Pasamos un fin de semana maravilloso. La tranquilidad del lugar y la cercanía con la naturaleza son
                incomparables."
              </p>
              <div className="testimonial-author">- Familia Rodríguez</div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        id="contacto"
        className="contact-section section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>Reserva Tu Estadía</h2>
        <p>Completa el formulario y nos pondremos en contacto contigo para confirmar tu reserva.</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Teléfono</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="checkin">Fecha de llegada</label>
              <input type="date" id="checkin" name="checkin" required />
            </div>
            <div className="form-group">
              <label htmlFor="checkout">Fecha de salida</label>
              <input type="date" id="checkout" name="checkout" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="guests">Número de huéspedes</label>
            <select id="guests" name="guests" required>
              <option value="">Seleccionar</option>
              <option value="1">1 persona</option>
              <option value="2">2 personas</option>
              <option value="3">3 personas</option>
              <option value="4">4 personas</option>
              <option value="5">5 personas</option>
              <option value="6">6+ personas</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje (opcional)</label>
            <textarea id="message" name="message" rows="4"></textarea>
          </div>
          <button type="submit" className="btn">
            Enviar Solicitud
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default Home
