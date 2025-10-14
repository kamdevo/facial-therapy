import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';
import { SparklesText } from './ui/sparkles-text';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-36 lg:pt-32">
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
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-poppins text-teal-600 font-medium text-base md:text-lg mb-3 md:mb-4 px-2 md:px-0"
            >
              Bienvenida a tu oasis de belleza
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mb-4 md:mb-6 px-2 md:px-0"
            >
              <SparklesText
                className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight"
                colors={{
                  first: "#14b8a6", // teal-500
                  second: "#d4943a", // bronze-500
                }}
                sparklesCount={15}
              >
                Realza tu belleza natural con Facial Therapy
              </SparklesText>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="font-poppins text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 px-2 md:px-0"
            >
              Tratamientos faciales profesionales diseñados para tu bienestar y confianza. 
              Descubre el cuidado que tu piel merece en un ambiente de lujo y tranquilidad.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
             
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] relative">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F569482bcf7484687b647d2c95efe19e0%2F42be7d1fdc574caaa6129d9d2ad2921b?format=webp&width=1600"
                  alt="Tratamiento facial en Facial Therapy"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cream-200/60 via-sand-200/20 to-teal-200/10 mix-blend-multiply"></div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg"
              >
                <div className="text-center">
                  <Star className="text-bronze-400 mx-auto mb-1" size={24} />
                  <p className="font-poppins text-xs font-semibold text-foreground">
                    5 años
                  </p>
                  <p className="font-poppins text-xs text-muted-foreground">
                    experiencia
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-sand-300 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-teal-400 rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
