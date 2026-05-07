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
  const [consent, setConsent] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof typeof formData, string>>>({});
  const [validationMessage, setValidationMessage] = useState<string[]>([]);
  const [checkboxHovered, setCheckboxHovered] = useState(false);
  const [checkboxAlert, setCheckboxAlert] = useState(false);

  const validate = () => {
    const newErrors: Partial<Record<keyof typeof formData, string>> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2)
      newErrors.name = 'Introduce tu nombre completo.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'El email no tiene un formato válido.';
    if (!/^[\d\s+\-.]{9,}$/.test(formData.phone.trim()))
      newErrors.phone = 'El teléfono debe tener al menos 9 dígitos.';
    if (!formData.eventType)
      newErrors.eventType = 'Selecciona un tipo de evento.';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updatedErrors = { ...errors, [name]: undefined };
    setFormData({ ...formData, [name]: value });
    setErrors(updatedErrors);
    if (Object.values(updatedErrors).every(v => !v)) setValidationMessage([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!consent) {
      setCheckboxAlert(true);
      setTimeout(() => setCheckboxAlert(false), 1500);
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setValidationMessage(Object.values(validationErrors) as string[]);
      return;
    }
    setValidationMessage([]);

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      const whatsappEventTypeMap: Record<string, string> = {
        feria: 'una Feria',
        boda: 'una Boda',
        cumpleaños: 'un Cumpleaños',
        corporativo: 'un Evento Corporativo',
        otro: 'otro tipo de evento'
      };
      const naturalWhatsappEventType = whatsappEventTypeMap[formData.eventType] || formData.eventType;

      const message = `¡Hola! Me encanta vuestra orquesta y me gustaría que formarais parte de mi evento 🎵

Sería para *${naturalWhatsappEventType}* el día *${formData.date}*.

Os dejo mis datos y un poco más de información:
👤 ${formData.name}
📧 ${formData.email}
📱 ${formData.phone}

💬 ${formData.message}`;


      const whatsappUrl = `https://wa.me/34636571207?text=${encodeURIComponent(message)}`;
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
      setConsent(false);
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
                className={errors.name ? 'input-error' : ''}
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
                className={errors.email ? 'input-error' : ''}
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
                className={errors.phone ? 'input-error' : ''}
                required
              />

            </div>

            <div className="form-group">
              <label htmlFor="date">Fecha del Evento *</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
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
                className={errors.eventType ? 'input-error' : ''}
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
                className={errors.message ? 'input-error' : ''}
                rows={5}
                required
              ></textarea>

            </div>

            <div className="form-group consent-group">
              <div className="consent-row">
                <input
                  type="checkbox"
                  id="consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  onMouseEnter={() => setCheckboxHovered(true)}
                  onMouseLeave={() => setCheckboxHovered(false)}
                  className={`${checkboxHovered ? 'checkbox-hovered' : ''} ${checkboxAlert ? 'checkbox-alert' : ''}`}
                />
                <span className="consent-text">
                  He leído y acepto el tratamiento de mis datos personales *
                  <button
                    type="button"
                    className="rgpd-tooltip-btn"
                    onClick={(e) => { e.preventDefault(); setShowTooltip(!showTooltip); }}
                    aria-label="Información sobre protección de datos"
                  >
                    ?
                  </button>
                </span>
              </div>
              {showTooltip && (
                <div className="rgpd-tooltip">
                  <strong className="rgpd-title">Información sobre protección de datos (RGPD)</strong>
                  <p>Los datos que nos facilites (nombre, email, teléfono y mensaje) se envían directamente a <strong>Orquesta Elegidos</strong> con el único fin de atender tu solicitud de contratación.</p>
                  <p>El envío se realiza a través de <strong>EmailJS</strong>, un servicio de terceros, y el sitio está alojado en <strong>GitHub Pages</strong>. Ambos servicios tienen servidores en Estados Unidos. Esta transferencia internacional está amparada bajo las garantías del RGPD de la UE mediante las cláusulas contractuales tipo aprobadas por la Comisión Europea.</p>
                  <p>Tus datos no serán cedidos a terceros ni usados para fines publicitarios. Puedes ejercer tus derechos de acceso, rectificación y supresión escribiendo a <strong>elegidos.gerencia@gmail.com</strong>.</p>
                  <button type="button" className="rgpd-tooltip-close" onClick={() => setShowTooltip(false)}>Cerrar</button>
                </div>
              )}
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

            {validationMessage.length > 0 && (
              <div className="status-message error">
                <strong>Por favor, corrige los siguientes errores:</strong>
                <ul className="validation-list">
                  {validationMessage.map((msg, i) => <li key={i}>{msg}</li>)}
                </ul>
              </div>
            )}

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
                <p>elegidos.gerencia@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <div>
                <h4>Teléfono / WhatsApp</h4>
                <p>Miguel Ángel Navas</p>
                <p>+34 636 571 207</p>
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
