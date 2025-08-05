import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-sand-50 to-teal-50"></div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 left-10 opacity-20"
      >
        <Sparkles size={40} className="text-bronze-400" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -3, 3, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-32 right-20 opacity-20"
      >
        <Star size={32} className="text-teal-400" />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, -10, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute bottom-32 left-1/4 opacity-15"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-sand-300 to-cream-300 rounded-full"></div>
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-poppins text-teal-600 font-medium text-lg mb-4"
            >
              Bienvenida a tu oasis de belleza
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
            >
              Realza tu{' '}
              <span className="bg-gradient-to-r from-blush-400 to-gold-400 bg-clip-text text-transparent">
                belleza natural
              </span>
              {' '}con Facial Therapy
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="font-poppins text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Tratamientos faciales profesionales diseñados para tu bienestar y confianza. 
              Descubre el cuidado que tu piel merece en un ambiente de lujo y tranquilidad.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blush-400 to-blush-500 text-white px-8 py-4 rounded-full font-poppins font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Agenda tu cita ahora
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-nude-300 text-foreground px-8 py-4 rounded-full font-poppins font-semibold text-lg hover:bg-nude-100 transition-all duration-300"
              >
                Ver servicios
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-cream-200 via-nude-200 to-blush-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blush-300 to-gold-300 rounded-full flex items-center justify-center">
                    <Sparkles size={60} className="text-white" />
                  </div>
                  <p className="font-playfair text-2xl text-foreground/80">
                    Tu belleza natural
                  </p>
                  <p className="font-poppins text-foreground/60 mt-2">
                    Cuidado profesional
                  </p>
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg"
              >
                <div className="text-center">
                  <Star className="text-gold-400 mx-auto mb-1" size={24} />
                  <p className="font-poppins text-xs font-semibold text-foreground">
                    5 años
                  </p>
                  <p className="font-poppins text-xs text-muted-foreground">
                    experiencia
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-nude-300 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-blush-400 rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
