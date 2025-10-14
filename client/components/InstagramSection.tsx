import { useEffect, useState, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Instagram, ExternalLink } from 'lucide-react';

export default function InstagramSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start', 
    skipSnaps: false,
    slidesToScroll: 1
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback((api: any) => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    // Process Instagram embeds when they load
    if (typeof window !== 'undefined' && (window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Instagram post URLs - Reemplaza estos con los URLs reales de los posts
  const instagramPosts = [
    'https://www.instagram.com/reel/DPmjW08DnwV/?igsh=YXlscDZsOXgwYnhk',
    'https://www.instagram.com/reel/DPWKfrWDp0d/?igsh=czg2YXI3cmE2djd5',
    'https://www.instagram.com/reel/DPMSEApDl4p/?igsh=djA3a2xwM2Y0cWdn',
    'https://www.instagram.com/reel/DPFlLSKjkOt/?igsh=MWszYWVtdGd4aXJyNA==',
    'https://www.instagram.com/reel/DOzOf0NDi7-/?igsh=MWhza2xhZ2o0cTBvOQ==',
    'https://www.instagram.com/reel/DOiuEdCjuxs/?igsh=dWR6dGVkNGk0aDA0',
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-cream-50" id="instagram" ref={sectionRef}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-100 to-purple-100 px-4 md:px-6 py-1.5 md:py-2 rounded-full mb-3 md:mb-4"
          >
            <Instagram className="text-pink-600 flex-shrink-0" size={18} />
            <span className="font-poppins text-pink-600 font-medium text-xs md:text-sm lg:text-base">Síguenos en Instagram</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4 leading-tight px-2"
          >
            Conoce más de{' '}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              nosotros
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="font-poppins text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-4 md:mb-6 px-2"
          >
            Descubre tips de belleza, resultados increíbles y contenido exclusivo en{' '}
            <a 
              href="https://www.instagram.com/facialtherapycali/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700 font-semibold inline-flex items-center gap-1 transition-colors"
            >
              @facialtherapycali
              <ExternalLink size={14} className="flex-shrink-0" />
            </a>
          </motion.p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-3 md:gap-4 lg:gap-6">
              {instagramPosts.map((postUrl, index) => (
                <div 
                  key={index} 
                  className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%]"
                >
                  <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg border border-sand-200 overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                    <blockquote
                      className="instagram-media"
                      data-instgrm-permalink={postUrl}
                      data-instgrm-version="14"
                      style={{
                        background: '#FFF',
                        border: 0,
                        borderRadius: '3px',
                        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                        margin: '1px',
                        maxWidth: '540px',
                        minWidth: '326px',
                        padding: 0,
                        width: 'calc(100% - 2px)',
                      }}
                    >
                      <a href={postUrl} target="_blank" rel="noopener noreferrer">
                        Ver esta publicación en Instagram
                      </a>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 lg:-translate-x-6 bg-white/90 backdrop-blur-sm hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10 border border-sand-200"
            aria-label="Previous"
          >
            <ChevronLeft className="text-foreground" size={20} />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 lg:translate-x-6 bg-white/90 backdrop-blur-sm hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10 border border-sand-200"
            aria-label="Next"
          >
            <ChevronRight className="text-foreground" size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 md:gap-2 mt-6 md:mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === selectedIndex
                    ? 'w-6 md:w-8 h-2 bg-gradient-to-r from-pink-500 to-purple-500'
                    : 'w-2 h-2 bg-sand-300 hover:bg-sand-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8 md:mt-12"
        >
          <a
            href="https://www.instagram.com/facialtherapycali/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-poppins font-semibold text-sm md:text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Instagram size={20} className="flex-shrink-0" />
            <span>Seguir en Instagram</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
