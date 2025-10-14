import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import GoogleMap from './GoogleMap';
import { toast } from '@/components/ui/use-toast';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      notes: formData.message,
      date: (document.getElementById('appt-date') as HTMLInputElement | null)?.value || '',
      time: (document.getElementById('appt-time') as HTMLInputElement | null)?.value || '',
    };
    import('@/lib/appointments').then(({ Appointments }) => {
      Appointments.create(payload);
      toast({ title: 'Solicitud enviada', description: 'Tu cita ha sido registrada. Te contactaremos pronto.' });
    });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      details: ["Avenida 5B #25 Norte-32", "San Vicente", "Cali, Colombia"]
    },
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+57 305 2962347", "WhatsApp: +57 305 2962347"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@facialtherapy.com", "reservas@facialtherapy.com"]
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["Lun - Sáb: 9:00 AM - 5:00 PM"]
    }
  ];

  const services = [
    "Limpieza facial profunda",
    "Limpieza facial con Hidrafacial",
    "Hidratación facial con cámara hiperbárica",
    "Tratamiento de peeling químico",
    "Porcelanizacion facial",
    "Masaje relajante completo",
    "Masaje relajante de espalda"
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-gradient-to-b from-white to-cream-50">
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
            Contacto
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Agenda tu{' '}
            <span className="bg-gradient-to-r from-teal-500 to-bronze-400 bg-clip-text text-transparent">
              cita hoy
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Estamos aquí para ayudarte a encontrar el tratamiento perfecto para tu piel. 
            Contáctanos y comienza tu transformación.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-2xl border border-sand-300"
          >
            <h3 className="font-playfair text-3xl font-bold text-foreground mb-6">
              Reserva tu cita
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-poppins font-medium text-foreground mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-sand-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label className="block font-poppins font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-sand-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-poppins font-medium text-foreground mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-sand-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block font-poppins font-medium text-foreground mb-2">
                    Servicio de interés
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-sand-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-poppins font-medium text-foreground mb-2">Fecha preferida</label>
                  <input
                    id="appt-date"
                    type="date"
                    className="w-full px-4 py-3 border border-sand-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block font-poppins font-medium text-foreground mb-2">Hora preferida</label>
                  <input
                    id="appt-time"
                    type="time"
                    className="w-full px-4 py-3 border border-sand-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block font-poppins font-medium text-foreground mb-2">
                  Mensaje adicional
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-nude-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blush-400 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Cuéntanos sobre tus necesidades específicas o preguntas..."
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-4 rounded-xl font-poppins font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                Enviar mensaje
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-sand-300 flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-bronze-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-foreground text-lg mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="font-poppins text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>

        {/* Expanded Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fácil de{' '}
              <span className="bg-gradient-to-r from-teal-500 to-bronze-400 bg-clip-text text-transparent">
                encontrar
              </span>
            </h3>
            <p className="font-poppins text-lg text-muted-foreground max-w-2xl mx-auto">
              Ubicados estratégicamente en el corazón de la ciudad para tu comodidad.
              Con excelente acceso al transporte público y estacionamiento disponible.
            </p>
          </div>

          <GoogleMap isInView={isInView} />
        </motion.div>
      </div>
    </section>
  );
}
