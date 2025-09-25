import { useEffect, useState, useCallback, useRef } from 'react';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AspectRatio } from './ui/aspect-ratio';

const promotions = [
  {
    src: 'https://cdn.builder.io/api/v1/image/assets%2F569482bcf7484687b647d2c95efe19e0%2Fb1dc025ad8204b3a9e810fe734ba7c06?format=webp&width=1600',
    alt: '30% OFF - Limpieza facial con microdermoabrasión y masaje relajante en espalda',
  },
  {
    src: 'https://cdn.builder.io/api/v1/image/assets%2F569482bcf7484687b647d2c95efe19e0%2F0e7e429a0d584814a84f896716e74b14?format=webp&width=1600',
    alt: '15% OFF - Limpieza facial profunda con hidrafacial y cámara hiperbárica',
  },
  {
    src: 'https://cdn.builder.io/api/v1/image/assets%2F569482bcf7484687b647d2c95efe19e0%2F67ae7229ba794cd2b600803ed0c37dbb?format=webp&width=1600',
    alt: 'Cada tratamiento es una promesa de cuidado personal',
  },
];

export default function Promotions() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="promotions" ref={sectionRef} className="py-20 bg-gradient-to-b from-cream-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="font-poppins text-teal-600 font-medium text-lg mb-3">Promociones</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">Imágenes promocionales</h2>
          <p className="font-poppins text-muted-foreground max-w-2xl mx-auto">Descubre nuestras ofertas y tratamientos destacados. Desliza para ver más.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {promotions.map((item, index) => (
                <div className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_70%] md:flex-[0_0_55%] lg:flex-[0_0_45%]" key={index}>
                  <div className="bg-white rounded-3xl shadow-xl border border-sand-300 overflow-hidden">
                    <AspectRatio ratio={16 / 9}>
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            aria-label="Anterior"
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-10 h-10 rounded-full bg-white/90 shadow-md border border-sand-300 hover:bg-white/100 backdrop-blur"
          >
            <ChevronLeft className="text-foreground" size={20} />
          </button>
          <button
            aria-label="Siguiente"
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-10 h-10 rounded-full bg-white/90 shadow-md border border-sand-300 hover:bg-white/100 backdrop-blur"
          >
            <ChevronRight className="text-foreground" size={20} />
          </button>

          <div className="mt-6 flex items-center justify-center gap-2">
            {promotions.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir a slide ${i + 1}`}
                onClick={() => emblaApi && emblaApi.scrollTo(i)}
                className={`h-2.5 rounded-full transition-all ${
                  selectedIndex === i ? 'w-7 bg-teal-500' : 'w-2.5 bg-sand-300'
                }`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-poppins font-semibold shadow-xl hover:shadow-2xl transition-all"
          >
            Reserva tu promoción
          </a>
        </motion.div>
      </div>
    </section>
  );
}
