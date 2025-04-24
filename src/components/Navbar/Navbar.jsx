"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import "./Navbar.css"

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <motion.nav
      className={`navbar ${isScrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <Link to="/" className="logo">
          Cabañas Camino al Agua
        </Link>

        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={closeMenu}>
            Inicio
          </Link>
          <Link
            to="/mision-vision"
            className={location.pathname === "/mision-vision" ? "active" : ""}
            onClick={closeMenu}
          >
            Misión y Visión
          </Link>
          <Link to="/landing" className={location.pathname === "/landing" ? "active" : ""} onClick={closeMenu}>
            Galería
          </Link>
          <a href="#contacto" className="btn-nav" onClick={closeMenu}>
            Reservar
          </a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
