import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Droplets, Sparkles, Heart, Leaf, Clock, Shield, FlaskConical } from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: "Limpieza facial profunda",
    description: "Limpieza profunda para desobstruir poros y renovar la piel.",
    features: ["Diagnóstico de la piel", "Vaporización y extracción", "Máscara calmante"],
    duration: "60 min",
    price: "Desde $80"
  },
  {
    icon: Sparkles,
    title: "Limpieza facial con Hidrafacial",
    description: "Tecnología Hydrafacial para limpiar, exfoliar e hidratar en un solo paso.",
    features: ["Limpieza y exfoliación", "Extracción indolora", "Infusión de sueros"],
    duration: "60–75 min",
    price: "Desde $120"
  },
  {
    icon: Heart,
    title: "Hidratación facial con cámara hiperbárica",
    description: "Oxigenación e hidratación profunda utilizando cámara hiperbárica.",
    features: ["Oxigenoterapia", "Sueros hidratantes", "Sellado nutritivo"],
    duration: "45–60 min",
    price: "Desde $110"
  },
  {
    icon: FlaskConical,
    title: "Tratamiento de peeling químico",
    description: "Renovación controlada para uniformar el tono y mejorar la textura.",
    features: ["Ácidos médicos", "Neutralización segura", "Cuidado post-peeling"],
    duration: "45 min",
    price: "Desde $95"
  },
  {
    icon: Sparkles,
    title: "Porcelanizacion facial",
    description: "Acabado luminoso efecto porcelana ideal para eventos especiales.",
    features: ["Suavizado de textura", "Iluminación inmediata", "Hidratación intensiva"],
    duration: "60 min",
    price: "Desde $130"
  },
  {
    icon: Leaf,
    title: "Masaje relajante completo",
    description: "Masaje corporal completo para reducir estrés y tensión.",
    features: ["Aromaterapia", "Maniobras suaves descontracturantes", "Bienestar integral"],
    duration: "60–90 min",
    price: "Desde $90"
  },
  {
    icon: Leaf,
    title: "Masaje relajante de espalda",
    description: "Enfoque en cuello, hombros y espalda para aliviar la tensión.",
    features: ["Aceites esenciales", "Técnicas localizadas", "Relajación profunda"],
    duration: "30–45 min",
    price: "Desde $55"
  }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" ref={ref} className="py-20 bg-gradient-to-b from-white to-cream-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="font-poppins text-teal-600 font-medium text-lg mb-4"
          >
            Nuestros Servicios
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Tratamientos que{' '}
            <span className="bg-gradient-to-r from-teal-500 to-bronze-400 bg-clip-text text-transparent">
              transforman
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Cada tratamiento está diseñado para brindar resultados excepcionales 
            y una experiencia de relajación incomparable.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-nude-200 hover:border-teal-300 h-full group">
                {/* Service Icon */}
                <motion.div
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-teal-500 to-bronze-400 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6"
                >
                  <service.icon size={28} className="text-white md:w-8 md:h-8" />
                </motion.div>

                {/* Service Content */}
                <h3 className="font-playfair text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4 group-hover:text-teal-600 transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>
                
                <p className="font-poppins text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start font-poppins text-xs md:text-sm text-foreground">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2 md:mr-3 mt-1.5 flex-shrink-0"></div>
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Service Details */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4 md:pt-6 border-t border-nude-200">
                  <div className="flex items-center flex-wrap gap-3 md:gap-4">
                    <div className="flex items-center text-muted-foreground">
                      <Clock size={14} className="mr-1.5 md:mr-2 flex-shrink-0" />
                      <span className="font-poppins text-xs md:text-sm whitespace-nowrap">{service.duration}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Shield size={14} className="mr-1.5 md:mr-2 flex-shrink-0" />
                      <span className="font-poppins text-xs md:text-sm whitespace-nowrap">Garantizado</span>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="font-playfair text-base md:text-lg font-bold text-teal-600">
                      {service.price}
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 md:mt-6 bg-gradient-to-r from-sand-200 to-cream-200 hover:from-teal-500 hover:to-teal-600 text-foreground hover:text-white py-2.5 md:py-3 rounded-xl md:rounded-2xl font-poppins font-medium text-sm md:text-base transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Reservar este tratamiento
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="font-poppins text-muted-foreground mb-6">
            ¿No encuentras lo que buscas? Contáctanos para tratamientos personalizados.
          </p>
          <motion.button
            className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full font-poppins font-semibold shadow-xl"
          >
            Consulta Personalizada
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
