import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Droplets, Sparkles, Heart, Leaf, Clock, Shield } from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: "Limpieza Facial Profunda",
    description: "Eliminación de impurezas y células muertas para una piel radiante y renovada.",
    features: ["Exfoliación suave", "Extracción de puntos negros", "Hidratación profunda"],
    duration: "60 min",
    price: "Desde $80"
  },
  {
    icon: Sparkles,
    title: "Tratamientos Anti-edad",
    description: "Combate los signos del envejecimiento con técnicas avanzadas y productos premium.",
    features: ["Radiofrecuencia", "Microdermoabrasión", "Mascarillas rejuvenecedoras"],
    duration: "90 min",
    price: "Desde $120"
  },
  {
    icon: Heart,
    title: "Hidratación Intensiva",
    description: "Restaura la elasticidad y luminosidad natural de tu piel con tratamientos hidratantes.",
    features: ["Ácido hialurónico", "Vitamina C", "Mascarillas nutritivas"],
    duration: "45 min",
    price: "Desde $65"
  },
  {
    icon: Leaf,
    title: "Masajes Faciales Relajantes",
    description: "Reduce el estrés y mejora la circulación con técnicas de masaje especializadas.",
    features: ["Técnicas orientales", "Aceites esenciales", "Relajación total"],
    duration: "30 min",
    price: "Desde $45"
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
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-nude-200 h-full">
                {/* Service Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-16 h-16 bg-gradient-to-br from-teal-500 to-bronze-400 rounded-2xl flex items-center justify-center mb-6"
                >
                  <service.icon size={32} className="text-white" />
                </motion.div>

                {/* Service Content */}
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-4 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="font-poppins text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center font-poppins text-sm text-foreground">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Service Details */}
                <div className="flex items-center justify-between pt-6 border-t border-nude-200">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-muted-foreground">
                      <Clock size={16} className="mr-2" />
                      <span className="font-poppins text-sm">{service.duration}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Shield size={16} className="mr-2" />
                      <span className="font-poppins text-sm">Garantizado</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-playfair text-lg font-bold text-teal-600">
                      {service.price}
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-6 bg-gradient-to-r from-sand-200 to-cream-200 text-foreground py-3 rounded-2xl font-poppins font-medium hover:from-teal-500 hover:to-teal-600 hover:text-white transition-all duration-300"
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
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="font-poppins text-muted-foreground mb-6">
            ¿No encuentras lo que buscas? Contáctanos para tratamientos personalizados.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full font-poppins font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Consulta Personalizada
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
