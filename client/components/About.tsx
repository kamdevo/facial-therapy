import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Heart, Users, Clock } from 'lucide-react';

const stats = [
  { icon: Users, value: "500+", label: "Clientes satisfechas" },
  { icon: Award, value: "12", label: "Años de experiencia" },
  { icon: Heart, value: "98%", label: "Recomendación" },
  { icon: Clock, value: "1000+", label: "Tratamientos realizados" }
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" ref={ref} className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="font-poppins text-teal-600 font-medium text-base md:text-lg mb-3 md:mb-4"
            >
              🫂 Sobre Nosotros  
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-arbutus text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight"
            >
              Nuestra pasión es{' '}
              <span className="bg-gradient-to-r from-teal-500 to-bronze-400 bg-clip-text text-transparent">
                tu bienestar
              </span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="space-y-3 md:space-y-4 mb-6 md:mb-8"
            >
              <p className="font-poppins text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                En Facial Therapy, creemos que cada persona merece sentirse bella y confiada en su propia piel. 
                Fundado con la visión de brindar tratamientos de excelencia, nos especializamos en cuidados 
                faciales personalizados que respetan la naturaleza única de cada cliente.
              </p>
              
              <p className="font-poppins text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                Nuestro equipo de especialistas certificados combina técnicas tradicionales con las últimas 
                innovaciones en dermatología estética, garantizando resultados excepcionales en un ambiente 
                de relajación y bienestar total.
              </p>
            </motion.div>

            {/* Philosophy Points */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3 md:space-y-4 mb-6 md:mb-8"
            >
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-teal-500 to-bronze-400 rounded-full flex items-center justify-center mt-0.5 md:mt-1 flex-shrink-0">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-sm md:text-base text-foreground mb-0.5 md:mb-1">Cuidado Personalizado</h4>
                  <p className="font-poppins text-xs md:text-sm text-muted-foreground leading-relaxed">Cada tratamiento se adapta a las necesidades específicas de tu piel.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-teal-500 to-bronze-400 rounded-full flex items-center justify-center mt-0.5 md:mt-1 flex-shrink-0">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-sm md:text-base text-foreground mb-0.5 md:mb-1">Productos Premium</h4>
                  <p className="font-poppins text-xs md:text-sm text-muted-foreground leading-relaxed">Utilizamos solo los mejores productos, probados dermatológicamente.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-teal-500 to-bronze-400 rounded-full flex items-center justify-center mt-0.5 md:mt-1 flex-shrink-0">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-sm md:text-base text-foreground mb-0.5 md:mb-1">Ambiente Relajante</h4>
                  <p className="font-poppins text-xs md:text-sm text-muted-foreground leading-relaxed">Un espacio diseñado para tu comodidad y tranquilidad absoluta.</p>
                </div>
              </div>
            </motion.div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="inline-block bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-poppins font-semibold text-sm md:text-base shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Conoce nuestro equipo
            </motion.a>
          </motion.div>

          {/* Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8 hover:scale-102 transition-transform duration-300">
              <div className="aspect-[4/5] bg-gradient-to-br from-cream-200 via-sand-200 to-teal-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-teal-400 to-bronze-300 rounded-full flex items-center justify-center">
                    <Heart size={60} className="text-white" aria-hidden="true" />
                  </div>
                  <p className="font-arbutus text-2xl text-foreground/80">
                    Nuestro equipo
                  </p>
                  <p className="font-poppins text-foreground/60 mt-2">
                    Especialistas certificados
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-nude-200 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-bronze-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon size={24} className="text-white" aria-hidden="true" />
                  </div>
                  <p className="font-arbutus text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="font-poppins text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
