import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png"
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Inicio", href: "#hero" },
    { name: "Servicios", href: "#services" },
    { name: "Sobre Nosotros", href: "#about" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 lg:px-8 pt-4"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="bg-white/60 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-lg border border-sand-200/50 px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div>
              <Link to="/" className="flex items-center space-x-2 md:space-x-3">
                <img
                  src={logoImg}
                  width="512px"
                  alt="Facial Therapy logo"
                  className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain drop-shadow"
                />
                <div className="hidden sm:block">
                  <h1 className="font-playfair font-bold text-lg md:text-xl lg:text-2xl text-foreground leading-none">
                    Facial Therapy
                  </h1>
                  <p className="text-xs md:text-sm text-muted-foreground font-poppins">
                    Belleza Natural
                  </p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" aria-label="Navegación principal">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative font-poppins font-medium text-sm lg:text-base text-foreground/90 hover:text-teal-600 transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-lg px-2 py-1"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <a
              href="#contact"
              className="hidden lg:block bg-gradient-to-r from-teal-500 to-teal-600 text-white px-5 py-2.5 lg:px-6 lg:py-3 rounded-full font-poppins font-medium text-sm lg:text-base shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              aria-label="Reservar una cita"
            >
              Reservar Cita
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-gradient-to-br from-teal-50 to-cream-50 text-foreground hover:from-teal-100 hover:to-cream-100 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Floating Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl border border-sand-200/50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="p-4 space-y-1" aria-label="Menú móvil">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block font-poppins font-medium text-foreground hover:text-teal-600 hover:bg-teal-50/50 transition-all duration-200 py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-xl font-poppins font-medium shadow-lg mt-3 active:scale-[0.98] transition-transform text-center focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                aria-label="Reservar una cita"
              >
                Reservar Cita
              </a>
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
}
