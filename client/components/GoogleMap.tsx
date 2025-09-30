import { motion } from 'framer-motion';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';

interface GoogleMapProps {
  isInView: boolean;
}

export default function GoogleMap({ isInView }: GoogleMapProps) {
  // Ubicación mock - Centro de una ciudad (ej: Bogotá, Colombia)
  const mockLocation = {
    lat: 4.6097,
    lng: -74.0817,
    address: "Avenida 5B #25 Norte-32",
    neighborhood: "San Vicente",
    city: "Cali, Colombia"
  };

  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${mockLocation.lat},${mockLocation.lng}&zoom=16&maptype=roadmap`;
  
  // Para el demo, usaré un iframe de ejemplo de Google Maps
  const demoMapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.2847855654!2d-74.08450062588928!3d4.609710643080441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a5cb9b6c6db%3A0x9b2b2b2b2b2b2b2b!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1sen!2sus!4v1647890123456!5m2!1sen!2sus`;

  const locationFeatures = [
    {
      icon: MapPin,
      title: "Fácil Acceso",
      description: "Ubicación céntrica con excelente transporte público y accesibilidad"
    },
    {
      icon: Navigation,
      title: "Estacionamiento Gratuito",
      description: "Parqueadero disponible con espacios para personas con discapacidad"
    },
    {
      icon: Clock,
      title: "Horarios Extendidos",
      description: "Lun-Vie: 9AM-7PM | Sáb: 9AM-6PM | Dom: 10AM-4PM"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-sand-200"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-2">
              Nuestra Ubicación
            </h3>
            <p className="font-poppins opacity-90">
              Te esperamos en nuestro acogedor spa
            </p>
          </div>
          <MapPin size={32} className="text-white/80" />
        </div>
      </div>

      {/* Map Container */}
      <div className="relative">
        <div className="aspect-[16/10] bg-gradient-to-br from-cream-100 to-sand-100">
          <iframe
            src={demoMapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            title="Facial Therapy Location"
          ></iframe>
        </div>
        
        {/* Floating Address Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute bottom-4 left-4 right-4 md:left-6 md:right-6 bg-white rounded-2xl p-4 md:p-6 shadow-xl border border-sand-200 backdrop-blur-sm bg-white/95"
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-bronze-400 rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-poppins font-semibold text-foreground text-lg mb-1">
                Facial Therapy Spa
              </h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p className="font-poppins">{mockLocation.address}</p>
                <p className="font-poppins">{mockLocation.neighborhood}</p>
                <p className="font-poppins">{mockLocation.floor}</p>
                <p className="font-poppins font-medium text-teal-600">{mockLocation.city}</p>
              </div>
            </div>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-teal-500 text-white rounded-xl font-poppins font-medium hover:bg-teal-600 transition-colors shadow-lg hover:shadow-xl"
            >
              <Navigation size={16} className="mr-2" />
              <span className="hidden sm:inline">Cómo llegar</span>
              <span className="sm:hidden">Ir</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Location Features */}
      <div className="p-6">
        <div className="grid md:grid-cols-3 gap-4">
          {locationFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="text-center p-4 rounded-2xl bg-gradient-to-br from-cream-50 to-sand-50 border border-sand-200"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-bronze-400 rounded-xl flex items-center justify-center mx-auto mb-3">
                <feature.icon size={20} className="text-white" />
              </div>
              <h5 className="font-poppins font-semibold text-foreground mb-2">
                {feature.title}
              </h5>
              <p className="font-poppins text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-6 p-4 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl text-white text-center"
        >
          <p className="font-poppins mb-3">
            ¿Necesitas indicaciones más detalladas?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-600 rounded-xl font-poppins font-semibold hover:bg-cream-50 transition-colors"
            >
              <Navigation size={18} className="mr-2" />
              Abrir en Google Maps
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center px-6 py-3 bg-bronze-500 text-white rounded-xl font-poppins font-semibold hover:bg-bronze-600 transition-colors"
            >
              <Phone size={18} className="mr-2" />
              Llamar para ubicación
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
