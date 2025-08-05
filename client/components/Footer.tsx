import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const quickLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#services' },
    { name: 'Sobre Nosotros', href: '#about' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Contacto', href: '#contact' }
  ];

  const services = [
    'Limpieza Facial Profunda',
    'Tratamientos Anti-edad',
    'Hidratación Intensiva',
    'Masajes Faciales Relajantes',
    'Consulta Personalizada'
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer ref={ref} className="bg-gradient-to-b from-cream-50 to-nude-100">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-bronze-400 rounded-full flex items-center justify-center">
                <span className="text-white font-playfair font-bold text-xl">F</span>
              </div>
              <div>
                <h2 className="font-playfair font-bold text-2xl text-foreground">
                  Facial Therapy
                </h2>
                <p className="text-sm text-muted-foreground font-poppins">
                  Belleza Natural
                </p>
              </div>
            </Link>
            
            <p className="font-poppins text-muted-foreground leading-relaxed mb-6">
              Dedicados a realzar tu belleza natural con tratamientos profesionales 
              en un ambiente de lujo y tranquilidad.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-teal-500" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-playfair font-bold text-xl text-foreground mb-6">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-poppins text-muted-foreground hover:text-teal-600 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="font-playfair font-bold text-xl text-foreground mb-6">
              Nuestros Servicios
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="font-poppins text-muted-foreground">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="font-playfair font-bold text-xl text-foreground mb-6">
              Información de Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-teal-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-poppins text-muted-foreground">
                    Av. Principal 123<br />
                    Centro Comercial Plaza Beauty<br />
                    Local 45, 2do Piso
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-teal-500 flex-shrink-0" />
                <p className="font-poppins text-muted-foreground">
                  +1 (555) 123-4567
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-blush-400 flex-shrink-0" />
                <p className="font-poppins text-muted-foreground">
                  info@facialtherapy.com
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 w-full bg-gradient-to-r from-blush-400 to-blush-500 text-white px-6 py-3 rounded-full font-poppins font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Reservar Cita
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-nude-300 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="font-poppins text-muted-foreground text-center md:text-left mb-4 md:mb-0">
              © 2024 Facial Therapy. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="font-poppins text-sm text-muted-foreground hover:text-blush-500 transition-colors"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="font-poppins text-sm text-muted-foreground hover:text-blush-500 transition-colors"
              >
                Términos de Servicio
              </a>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center justify-center mt-4 text-muted-foreground"
          >
            <span className="font-poppins text-sm mr-2">Hecho con</span>
            <Heart size={16} className="text-blush-400 fill-current" />
            <span className="font-poppins text-sm ml-2">para tu belleza</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
