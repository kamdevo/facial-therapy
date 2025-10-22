import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M16 21.75C19.1756 21.75 21.75 19.1756 21.75 16V8C21.75 4.82436 19.1756 2.25 16 2.25H8C4.82436 2.25 2.25 4.82436 2.25 8V16C2.25 19.1756 4.82436 21.75 8 21.75H16ZM13.7115 5.7629C13.5952 5.41393 13.243 5.20083 12.8799 5.25975C12.5168 5.31867 12.25 5.63223 12.25 6.00007V15.0001C12.25 16.2427 11.2426 17.2501 10 17.2501C8.75736 17.2501 7.75 16.2427 7.75 15.0001C7.75 13.7574 8.75736 12.7501 10 12.7501C10.4142 12.7501 10.75 12.4143 10.75 12.0001C10.75 11.5859 10.4142 11.2501 10 11.2501C7.92893 11.2501 6.25 12.929 6.25 15.0001C6.25 17.0711 7.92893 18.7501 10 18.7501C12.0711 18.7501 13.75 17.0711 13.75 15.0001V8.45786C14.5169 9.17047 15.5973 9.75007 17 9.75007C17.4142 9.75007 17.75 9.41428 17.75 9.00007C17.75 8.58585 17.4142 8.25007 17 8.25007C16.0281 8.25007 15.2888 7.85087 14.7414 7.33115C14.1812 6.79933 13.8434 6.15846 13.7115 5.7629Z" fill="currentColor" />
  </svg>
);

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const quickLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#services' },
    { name: 'Sobre Nosotros', href: '#about' },
    { name: 'Contacto', href: '#contact' }
  ];

  const services = [
    'Limpieza facial profunda',
    'Limpieza facial con Hidrafacial',
    'Hidratación facial con cámara hiperbárica',
    'Tratamiento de peeling químico',
    'Porcelanizacion facial',
    'Masaje relajante completo',
    'Masaje relajante de espalda'
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/facialtherapycali?igsh=MWlqNXRhdDUxdTh5aA%3D%3D&utm_source=qr', target: "_", label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@jennifermartinez-i8f?si=QThxnQxVRwPNT2iL',  label: 'YouTube' },
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@facial.therapy?_t=ZS-90A8XrLN2Ju&_r=1', label: 'TikTok' }
  ];

  return (
    <footer ref={ref} className="bg-gradient-to-b from-cream-50 to-nude-100">
      <div className="container mx-auto px-4 lg:px-8 py-10 md:py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Link to="/" className="flex items-center space-x-2 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-teal-500 to-bronze-400 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-playfair font-bold text-lg md:text-xl">F</span>
              </div>
              <div className="min-w-0">
                <h2 className="font-playfair font-bold text-xl md:text-2xl text-foreground truncate">
                  Facial Therapy
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground font-poppins">
                  Belleza Natural
                </p>
              </div>
            </Link>
            
            <p className="font-poppins text-muted-foreground leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
              Dedicados a realzar tu belleza natural con tratamientos profesionales 
              en un ambiente de lujo y tranquilidad.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3 md:space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 flex-shrink-0"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-teal-500 md:w-5 md:h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h3 className="font-playfair font-bold text-lg md:text-xl text-foreground mb-4 md:mb-6">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-poppins text-sm md:text-base text-muted-foreground hover:text-teal-600 transition-colors duration-300"
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
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-playfair font-bold text-lg md:text-xl text-foreground mb-4 md:mb-6">
              Nuestros Servicios
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="font-poppins text-xs md:text-sm text-muted-foreground">
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
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="font-playfair font-bold text-lg md:text-xl text-foreground mb-4 md:mb-6">
              Información de Contacto
            </h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start space-x-2 md:space-x-3">
                <MapPin size={18} className="text-teal-500 mt-1 flex-shrink-0 md:w-5 md:h-5" />
                <div className="min-w-0">
                  <p className="font-poppins text-xs md:text-sm text-muted-foreground">
                    Avenida 5B #25 Norte-32<br />
                    San Vicente<br />
                    Cali, Colombia
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 md:space-x-3">
                <Phone size={18} className="text-teal-500 flex-shrink-0 md:w-5 md:h-5" />
                <p className="font-poppins text-xs md:text-sm text-muted-foreground break-words">
                  +57 305 2962347
                </p>
              </div>
              
              <div className="flex items-center space-x-2 md:space-x-3">
                <Mail size={18} className="text-teal-500 flex-shrink-0 md:w-5 md:h-5" />
                <p className="font-poppins text-xs md:text-sm text-muted-foreground break-words">
                  info@facialtherapy.com
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 md:mt-6 w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full font-poppins font-medium text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Reservar Cita
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-t border-nude-300 mt-8 md:mt-10 lg:mt-12 pt-6 md:pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
            <p className="font-poppins text-xs md:text-sm text-muted-foreground text-center md:text-left">
              © 2024 Facial Therapy. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center space-x-4 md:space-x-6">
              <a
                href="#"
                className="font-poppins text-xs md:text-sm text-muted-foreground hover:text-teal-600 transition-colors"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="font-poppins text-xs md:text-sm text-muted-foreground hover:text-teal-600 transition-colors"
              >
                Términos de Servicio
              </a>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center mt-3 md:mt-4 text-muted-foreground"
          >
            <span className="font-poppins text-xs md:text-sm mr-2">Hecho con</span>
            <Heart size={14} className="text-teal-500 fill-current md:w-4 md:h-4" />
            <span className="font-poppins text-xs md:text-sm ml-2">para tu belleza</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
