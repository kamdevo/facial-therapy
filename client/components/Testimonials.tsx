import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "María González",
    age: 28,
    rating: 5,
    text: "El mejor lugar para el cuidado facial en la ciudad. El equipo es súper profesional y los resultados son increíbles. Mi piel nunca se había visto tan radiante.",
    treatment: "Limpieza Facial Profunda",
    image: "bg-gradient-to-br from-blush-300 to-gold-300"
  },
  {
    name: "Carmen Rodríguez",
    age: 35,
    rating: 5,
    text: "Llevo dos años viniendo a Facial Therapy y cada sesión es una experiencia relajante. Los tratamientos anti-edad han transformado completamente mi piel.",
    treatment: "Tratamientos Anti-edad",
    image: "bg-gradient-to-br from-nude-300 to-cream-300"
  },
  {
    name: "Ana López",
    age: 42,
    rating: 5,
    text: "El ambiente es súper relajante y el personal muy cálido. Los masajes faciales son divinos y siempre salgo sintiéndome renovada y bella.",
    treatment: "Masajes Faciales",
    image: "bg-gradient-to-br from-cream-300 to-blush-300"
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-gradient-to-b from-cream-50 to-white">
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
            Testimonios
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Lo que dicen{' '}
            <span className="bg-gradient-to-r from-teal-500 to-bronze-400 bg-clip-text text-transparent">
              nuestras clientas
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Cada testimonio refleja nuestro compromiso con la excelencia y la satisfacción de nuestras clientas.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-nude-200">
            {/* Quote Icon */}
            <Quote size={48} className="text-teal-300 mb-6" />
            
            {/* Testimonial Content */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <p className="font-poppins text-xl text-foreground leading-relaxed mb-6">
                "{testimonials[currentIndex].text}"
              </p>
              
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-gold-400 fill-current mr-1" />
                ))}
              </div>
              
              <p className="font-poppins text-sm text-teal-600 font-medium mb-2">
                Tratamiento: {testimonials[currentIndex].treatment}
              </p>
            </motion.div>

            {/* Customer Info */}
            <motion.div
              key={`info-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex items-center"
            >
              <div className={`w-16 h-16 ${testimonials[currentIndex].image} rounded-full flex items-center justify-center mr-4`}>
                <span className="text-white font-playfair font-bold text-xl">
                  {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h4 className="font-poppins font-semibold text-foreground text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="font-poppins text-muted-foreground">
                  {testimonials[currentIndex].age} años
                </p>
              </div>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white border-2 border-sand-300 rounded-full flex items-center justify-center shadow-lg hover:border-teal-500 transition-colors"
            >
              <ChevronLeft size={20} className="text-foreground" />
            </motion.button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-teal-500 w-8'
                      : 'bg-sand-300 hover:bg-sand-400'
                  }`}
                />
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white border-2 border-sand-300 rounded-full flex items-center justify-center shadow-lg hover:border-teal-500 transition-colors"
            >
              <ChevronRight size={20} className="text-foreground" />
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-center mt-16"
        >
          <p className="font-poppins text-muted-foreground mb-6">
            ¿Lista para vivir tu propia experiencia transformadora?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full font-poppins font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Agenda tu primera cita
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
