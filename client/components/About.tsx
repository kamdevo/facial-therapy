import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Heart, Users, Clock } from 'lucide-react';

const stats = [
  { icon: Users, value: "500+", label: "Clientes satisfechas" },
  { icon: Award, value: "5", label: "Años de experiencia" },
  { icon: Heart, value: "98%", label: "Recomendación" },
  { icon: Clock, value: "1000+", label: "Tratamientos realizados" }
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
              className="font-poppins text-teal-600 font-medium text-lg mb-4"
            >
              Sobre Nosotros
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6"
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
              className="space-y-4 mb-8"
            >
              <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
                En Facial Therapy, creemos que cada persona merece sentirse bella y confiada en su propia piel. 
                Fundado con la visión de brindar tratamientos de excelencia, nos especializamos en cuidados 
                faciales personalizados que respetan la naturaleza única de cada cliente.
              </p>
              
              <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
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
              className="space-y-4 mb-8"
            >
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-gradient-to-br from-teal-500 to-bronze-400 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-foreground mb-1">Cuidado Personalizado</h4>
                  <p className="font-poppins text-muted-foreground">Cada tratamiento se adapta a las necesidades específicas de tu piel.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-gradient-to-br from-teal-500 to-bronze-400 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-foreground mb-1">Productos Premium</h4>
                  <p className="font-poppins text-muted-foreground">Utilizamos solo los mejores productos, probados dermatológicamente.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-gradient-to-br from-teal-500 to-bronze-400 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-foreground mb-1">Ambiente Relajante</h4>
                  <p className="font-poppins text-muted-foreground">Un espacio diseñado para tu comodidad y tranquilidad absoluta.</p>
                </div>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full font-poppins font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Conoce nuestro equipo
            </motion.button>
          </motion.div>

          {/* Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            {/* Main Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl mb-8"
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-cream-200 via-sand-200 to-teal-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-teal-400 to-bronze-300 rounded-full flex items-center justify-center">
                    <Heart size={60} className="text-white" />
                  </div>
                  <p className="font-playfair text-2xl text-foreground/80">
                    Nuestro equipo
                  </p>
                  <p className="font-poppins text-foreground/60 mt-2">
                    Especialistas certificados
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-nude-200 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-bronze-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon size={24} className="text-white" />
                  </div>
                  <p className="font-playfair text-2xl font-bold text-foreground mb-1">
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
