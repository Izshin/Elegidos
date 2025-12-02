import { useState } from 'react';
import { motion } from 'framer-motion';
import './Contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      message: ''
    });
  };

  return (
    <section id="contacto" className="contacto">
      <div className="container">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Contáctanos
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

          <motion.form
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enviar Mensaje
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
