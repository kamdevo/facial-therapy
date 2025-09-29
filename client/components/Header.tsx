import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#services' },
    { name: 'Sobre Nosotros', href: '#about' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div>
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F569482bcf7484687b647d2c95efe19e0%2Ff44a3fcb8b7a4cd6bd08f098474795c0?format=webp&width=512"
                alt="Facial Therapy logo"
                className="w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow"
              />
              <div>
                <h1 className="font-playfair font-bold text-2xl text-foreground leading-none">
                  Facial Therapy
                </h1>
                <p className="text-sm text-muted-foreground font-poppins">
                  Belleza Natural
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 + 0.1 }}
                className="font-poppins font-medium text-foreground"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden md:block bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-full font-poppins font-medium shadow-lg"
          >
            Reservar Cita
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-nude-100 text-foreground"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white/80 backdrop-blur-md rounded-b-2xl shadow"
        >
          <nav className="py-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block font-poppins font-medium text-foreground hover:text-primary transition-colors duration-300 py-2"
              >
                {item.name}
              </a>
            ))}
            <button className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-full font-poppins font-medium shadow-lg mt-4">
              Reservar Cita
            </button>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
}
