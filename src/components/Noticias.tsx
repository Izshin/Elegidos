import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchFacebookPosts, type NewsItem } from '../services/apifyService';
import './Noticias.css';

const Noticias = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const posts = await fetchFacebookPosts();
        if (posts.length > 0) {
          setNews(posts);
        } else {
          setError(true); // Consider empty result as "error" or just no news
        }
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

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
          Mantente al día con todas nuestras novedades en Facebook
        </motion.h3>

        {loading ? (
          <div className="loading-container" style={{ textAlign: 'center', padding: '2rem' }}>
            <p>Cargando noticias...</p>
          </div>
        ) : error ? (
          <div className="error-container" style={{ textAlign: 'center', padding: '2rem' }}>
            <p style={{ marginBottom: '2rem' }}>No se pudieron cargar las noticias recientes.</p>
            <a href="https://www.facebook.com/orquesta.elegidos/?locale=es_ES" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Ver en Facebook
            </a>
          </div>
        ) : (
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
                {item.image && (
                  <div className="news-image">
                    <img
                      src={item.image.startsWith('http') ? item.image : `${import.meta.env.BASE_URL}${item.image.startsWith('/') ? item.image.slice(1) : item.image}`}
                      alt="Imagen de la noticia"
                    />
                  </div>
                )}
                <div className="news-content">
                  <div className="news-header">
                    <span className="news-date">{item.date}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="read-more">Leer más →</a>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Noticias;
