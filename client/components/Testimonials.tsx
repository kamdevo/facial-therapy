import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { AnimatedList } from './ui/animated-list';

const testimonials = [
  {
    name: "María González",
    age: 28,
    rating: 5,
    text: "El mejor lugar para el cuidado facial en la ciudad. El equipo es súper profesional y los resultados son increíbles. Mi piel nunca se había visto tan radiante.",
    treatment: "Limpieza Facial Profunda",
  },
  {
    name: "Carmen Rodríguez",
    age: 35,
    rating: 5,
    text: "Llevo dos años viniendo a Facial Therapy y cada sesión es una experiencia relajante. Los tratamientos anti-edad han transformado completamente mi piel.",
    treatment: "Tratamientos Anti-edad",
  },
  {
    name: "Ana López",
    age: 42,
    rating: 5,
    text: "El ambiente es súper relajante y el personal muy cálido. Los masajes faciales son divinos y siempre salgo sintiéndome renovada y bella.",
    treatment: "Masajes Faciales",
  },
  {
    name: "Laura Pérez",
    age: 31,
    rating: 5,
    text: "Resultados visibles desde la primera sesión. La atención y el detalle son impecables.",
    treatment: "Hidratación Intensiva",
  },
  {
    name: "Daniela Ruiz",
    age: 27,
    rating: 5,
    text: "Ambiente hermoso y profesionales con manos de ángel. 100% recomendado.",
    treatment: "Masajes Faciales",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const Card = (t: typeof testimonials[number]) => (
    <div className="bg-white/80 backdrop-blur rounded-3xl p-6 shadow-xl border border-sand-300" key={t.name}>
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-bronze-400 grid place-items-center text-white font-playfair font-bold">
          {t.name.split(' ').map((n) => n[0]).join('')}
        </div>
        <div className="flex-1">
          <Quote size={28} className="text-teal-300" />
          <p className="font-poppins text-foreground/90 leading-relaxed mt-2">“{t.text}”</p>
          <div className="mt-3 flex items-center gap-2">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} size={16} className="text-bronze-400 fill-current" />
            ))}
          </div>
          <div className="mt-3 text-sm font-poppins text-muted-foreground">
            {t.name} · {t.age} años · {t.treatment}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="testimonials" ref={ref} className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-cream-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <p className="font-poppins text-teal-600 font-medium text-sm md:text-base lg:text-lg mb-2 md:mb-4">Testimonios</p>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight px-2">
            Voces de nuestras <span className="bg-gradient-to-r from-teal-500 to-bronze-400 bg-clip-text text-transparent">clientas</span>
          </h2>
          <p className="font-poppins text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Historias reales, resultados reales.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          <AnimatedList delay={900} className="max-h-[420px] md:max-h-[520px]">
            {testimonials.slice(0, Math.ceil(testimonials.length / 2)).map(Card)}
          </AnimatedList>
          <AnimatedList delay={1100} className="hidden lg:flex max-h-[520px]">
            {testimonials.slice(Math.ceil(testimonials.length / 2)).map(Card)}
          </AnimatedList>
        </div>
      </div>
    </section>
  );
}
