import { motion } from 'framer-motion';
import './Noticias.css';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  category: string;
}

const news: NewsItem[] = [
  {
    id: 1,
    title: 'Gran éxito en la Feria de San Isidro',
    date: '20 NOV 2025',
    excerpt: 'Miles de personas disfrutaron de nuestro show en la emblemática feria madrileña. Una noche inolvidable llena de rock y pop.',
    category: 'Eventos'
  },
  {
    id: 2,
    title: 'Nuevo repertorio de reggaeton latino',
    date: '15 NOV 2025',
    excerpt: 'Ampliamos nuestro catálogo con los éxitos más recientes del género urbano, incluyendo Bad Bunny, Karol G y más.',
    category: 'Música'
  },
  {
    id: 3,
    title: 'Incorporación de nuevos integrantes',
    date: '10 NOV 2025',
    excerpt: 'Damos la bienvenida a Elena Ruiz al saxofón, quien aportará un nuevo sonido a nuestras versiones.',
    category: 'Orquesta'
  },
  {
    id: 4,
    title: 'Disponibles para bodas en 2026',
    date: '5 NOV 2025',
    excerpt: 'Ya estamos tomando reservas para eventos privados y bodas para la temporada 2026. ¡Contacta con nosotros!',
    category: 'Anuncios'
  }
];

const Noticias = () => {
  return (
    <section id="noticias" className="noticias">
      <div className="container">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Últimas Noticias
        </motion.h2>
        <motion.h3
          className="section-intro"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Mantente al día con todas nuestras novedades
        </motion.h3>
        
        <div className="news-grid">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              className="news-card"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <span className="news-category">{item.category}</span>
              <span className="news-date">{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <a href="#" className="read-more">Leer más →</a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Noticias;
