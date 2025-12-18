import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './Contacto.css';

const Contacto = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    eventType: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      const message = `¡Hola! Me gustaría recibir información para contratar a la orquesta. Os dejo los detalles de mi evento:

Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Fecha: ${formData.date}
Tipo de Evento: ${formData.eventType}
Mensaje: ${formData.message}`;


      const whatsappUrl = `https://wa.me/34659996468?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      return;
    }

    // PC Logic - Send Email
    if (!form.current) return;

    setStatus('sending');

    const eventTypeMap: Record<string, string> = {
      feria: 'una Feria',
      boda: 'una Boda',
      cumpleaños: 'un Cumpleaños',
      corporativo: 'un Evento Corporativo',
      otro: 'otro tipo de evento'
    };

    const naturalEventType = eventTypeMap[formData.eventType] || formData.eventType;

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          date: formData.date,
          eventType: naturalEventType,
          message: formData.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        eventType: '',
        message: ''
      });
      setTimeout(() => setStatus('idle'), 5000); // Reset status after 5 seconds
    } catch (error) {
      console.error('FAILED...', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contacto" className="contacto">
      <div className="container">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Contrátanos
        </motion.h2>
        <motion.h3
          className="section-intro"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ¿Quieres que toquemos en tu evento? Escríbenos y hagamos realidad tu fiesta perfecta
        </motion.h3>

        <div className="contacto-content">
          <motion.form
            ref={form}
            className="contacto-form"
            onSubmit={handleSubmit}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="form-group">
              <label htmlFor="name">Nombre Completo *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Teléfono *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">Fecha del Evento</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="eventType">Tipo de Evento *</label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona un tipo</option>
                <option value="feria">Feria</option>
                <option value="boda">Boda</option>
                <option value="cumpleaños">Cumpleaños</option>
                <option value="corporativo">Evento Corporativo</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary"
              disabled={status === 'sending'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
            </motion.button>

            {status === 'success' && (
              <p className="status-message success">¡Mensaje enviado con éxito! Te contactaremos pronto.</p>
            )}
            {status === 'error' && (
              <p className="status-message error">Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.</p>
            )}
          </motion.form>

          <motion.div
            className="contacto-info"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Información de Contacto</h3>
            <div className="info-item">
              <div>
                <h4>Email</h4>
                <p>info@orquestaelegidos.com</p>
              </div>
            </div>
            <div className="info-item">
              <div>
                <h4>Teléfono</h4>
                <p>+34 600 123 456</p>
              </div>
            </div>
            <div className="info-item">
              <div>
                <h4>Ubicación</h4>
                <p>Andalucía, España</p>
              </div>
            </div>
            <div className="info-item">
              <div>
                <h4>Eventos</h4>
                <p>Ferias, Bodas, Cumpleaños, Eventos Corporativos</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
