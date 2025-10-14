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
        <div className="bg-white/80 backdrop-blur-2xl rounded-2xl md:rounded-3xl shadow-lg border border-sand-200/50 px-4 md:px-6 lg:px-8">
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
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                  className="relative font-poppins font-medium text-sm lg:text-base text-foreground/90 hover:text-teal-600 transition-colors duration-300 group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block bg-gradient-to-r from-teal-500 to-teal-600 text-white px-5 py-2.5 lg:px-6 lg:py-3 rounded-full font-poppins font-medium text-sm lg:text-base shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Reservar Cita
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden p-2 rounded-xl bg-gradient-to-br from-teal-50 to-cream-50 text-foreground hover:from-teal-100 hover:to-cream-100 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation - Floating Dropdown */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-3 bg-white/90 backdrop-blur-2xl rounded-2xl shadow-xl border border-sand-200/50 overflow-hidden"
          >
            <nav className="p-4 space-y-1">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="block font-poppins font-medium text-foreground hover:text-teal-600 hover:bg-teal-50/50 transition-all duration-200 py-3 px-4 rounded-xl"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-xl font-poppins font-medium shadow-lg mt-3 active:scale-[0.98] transition-transform text-center"
              >
                Reservar Cita
              </motion.a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
