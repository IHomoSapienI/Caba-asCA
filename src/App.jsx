"use client"

import { HashRouter, Routes, Route } from "react-router-dom"
// ⬆️ cambia esto en lugar de BrowserRouter

import { AnimatePresence } from "framer-motion"
import Landing from "./components/Landin/Landing"
import Home from "./components/Homee/Home"
import MisionVision from "./components/MisionVision/MisionVision"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import "./App.css"
import { WhatsAppIcon, InstagramIcon } from "./components/Icons/SocialIcons"
import { FaTiktok } from "react-icons/fa"

function App() {
  return (
    <HashRouter>
  <div className="app-container">
    <Navbar />
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mision-vision" element={<MisionVision />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </AnimatePresence>
    <Footer />

        Social media buttons
        <a
          href="https://wa.me/573005561371"
          text="Quiero Realizar Una Reserva Por Favor!"
          className="social-button whatsapp-button"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Reserva Tu cita"
        >
          <WhatsAppIcon />
        </a>

    

        <a
          href="https://instagram.com/tucuenta"
          className="social-button instagram-button"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Siguenos en Instagram"
        >
          <InstagramIcon />
          
        </a>
        <a
          href="https://www.tiktok.com/@cabanascaminoalagua?_t=ZS-8vmBUIBDRN1&_r=1"
          className="social-button tiktok-button"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Siguenos en TikTok"
        >
          <FaTiktok />
          
        </a>
      </div>
      </HashRouter>
  )
}

export default App
