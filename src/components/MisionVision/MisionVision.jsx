"use client"

import { motion } from "framer-motion"
import "./MisionVision.css"

function MisionVision() {
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
    <div className="mision-vision-container">
      <div className="page-header">
        <h1>Nuestra Misión y Visión</h1>
        <p>Conoce los valores que nos guían</p>
      </div>

      <motion.div className="content-container" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div className="card mision-card" variants={itemVariants}>
          <div className="card-icon">🌱</div>
          <h2>Misión</h2>
          <p>
          Ofrecer una experiencia única de hospedaje en cabañas rurales que permite a nuestros huéspedes 
          reconectarse con la naturaleza y encontrar verdadero descanso, brindando instalaciones
           confortables y servicios de calidad que respetan y preservan el entorno natural.
          </p>
        </motion.div>

        <motion.div className="card vision-card" variants={itemVariants}>
          <div className="card-icon">🔭</div>
          <h2>Visión</h2>
          <p>
          En el 2028, Cabañas Camino al Agua busca ser reconocida como el destino preferido 
          para el turismo rural sostenible en la región, destacando por nuestro compromiso con 
          el bienestar de los huéspedes, la conservación del medio ambiente y el desarrollo de la 
          comunidad local.
          </p>
        </motion.div>

        <motion.div className="card valores-card" variants={itemVariants}>
          <div className="card-icon">💚</div>
          <h2>Nuestros Valores</h2>
          <ul className="valores-list">
            <li>
              <strong>Sostenibilidad:</strong> Nos comprometemos a minimizar nuestro impacto ambiental y promover
              prácticas sostenibles.
            </li>
            <li>
              <strong>Autenticidad:</strong> Valoramos y preservamos la cultura local, ofreciendo experiencias genuinas.
            </li>
            <li>
              <strong>Calidad:</strong> Buscamos la excelencia en cada detalle para garantizar la satisfacción de
              nuestros huéspedes.
            </li>
            
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        className="historia-section section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2>Nuestra Historia</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2020</h3>
              <p>
                Nace la idea de crear un espacio de hospedaje en armonía con la naturaleza, inspirado por la belleza del
                entorno natural y la necesidad de ofrecer un refugio sostenible.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2021</h3>
              <p>
                Fundación de Cabañas Camino al Agua con las primeras dos cabañas construidas con materiales locales.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2022</h3>
              <p>
                Apertura oficial al público y recepción de los primeros huéspedes, quienes disfrutaron de la tranquilidad
                y belleza del lugar.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Hoy</h3>
              <p>
                Continuamos creciendo y mejorando nuestras instalaciones manteniendo nuestro compromiso con la
                naturaleza.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2028</h3>
              <p>
                Se busca el reconocimiento como destino turístico sostenible, destacando por su compromiso con la
                conservación del medio ambiente y el desarrollo de la comunidad local.
              </p>
            </div>
          </div>
          
          
        </div>
      </motion.div>
    </div>
  )
}

export default MisionVision
