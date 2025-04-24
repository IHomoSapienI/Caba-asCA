import { Link } from "react-router-dom"
import "./Footer.css"
import { Instagram } from 'lucide-react';
import { FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Cabañas Camino al Agua</h3>
          <p>Un refugio natural para desconectar y disfrutar</p>
          <p className="address">
            
            📍 Vereda San Lorenzo, Cocorná, Antioquia
            
          </p>
        </div>

        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul className="footer-links">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/mision-vision">Misión y Visión</Link>
            </li>
            <li>
              <Link to="/landing">Galería</Link>
            </li>
            <li>
              <a href="#contacto">Reservas</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <ul className="contact-info">
            <li>📞 +57 300 5561371 </li>
            <li>✉️ c.caminoalagua@gmail.com</li>
            <li>⏰ Abierto todos los días</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-links">
            
          
            <a href="https://www.tiktok.com/@cabanascaminoalagua?_t=ZS-8vmBUIBDRN1&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok color="black" size={"3vh"}/>  
            </a>


            <a href="https://www.instagram.com/cabanascaminoalagua/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram color="#EA07BDFF" size={"3vh"}/>   
            </a>
            
          </div>
          <div className="newsletter">
            <h4>Suscríbete a nuestro newsletter</h4>
            <form className="newsletter-form">
              <input type="email" placeholder="Tu email" required />
              <button type="submit">→</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Cabañas Camino al Agua. Todos los derechos reservados.</p>
        <div className="footer-bottom-links">
          <a href="#">Términos y Condiciones</a>
          <a href="#">Política de Privacidad</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
