import { motion } from 'framer-motion';
import './Tour.css';

interface TourDate {
  id: number;
  date: string;
  venue: string;
  location: string;
  eventType: string;
}

const tourDates: TourDate[] = [
  {
    id: 1,
    date: '15 DIC 2025',
    venue: 'Feria de Navidad',
    location: 'Sevilla',
    eventType: 'Feria'
  },
  {
    id: 2,
    date: '22 DIC 2025',
    venue: 'Evento Privado',
    location: 'Barcelona',
    eventType: 'Evento Privado'
  },
  {
    id: 3,
    date: '31 DIC 2025',
    venue: 'Nochevieja en la Plaza',
    location: 'Valencia',
    eventType: 'Feria'
  },
  {
    id: 4,
    date: '15 ENE 2026',
    venue: 'Feria de Invierno',
    location: 'Sevilla',
    eventType: 'Feria'
  },
  {
    id: 5,
    date: '28 ENE 2026',
    venue: 'Boda Especial',
    location: 'Málaga',
    eventType: 'Evento Privado'
  }
];

const Tour = () => {
  return (
    <section id="tour" className="tour">
      <div className="container">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Próximas Fechas
        </motion.h2>
        <motion.h3
          className="section-intro"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Descubre dónde nos presentaremos próximamente
        </motion.h3>

        <div className="tour-list">
          {tourDates.map((show, index) => (
            <motion.div
              key={show.id}
              className="tour-item"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 10, scale: 1.02 }}
            >
              <div className="tour-date">
                <span className="date-text">{show.date}</span>
              </div>
              <div className="tour-details">
                <h3>{show.venue}</h3>
                <p className="tour-location">{show.location}</p>
                <span className="tour-type">{show.eventType}</span>
              </div>
              <div className="tour-action">
                <motion.button
                  className="btn btn-primary"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Info
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tour;
