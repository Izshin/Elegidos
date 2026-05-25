import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchFacebookPosts, type NewsItem } from '../services/apifyService';
import './Noticias.css';

const MAX_TITLE_FROM_LINE = 80;

const FALLBACK_TITLES = ['Publicación de Facebook'];
const FALLBACK_EXCERPTS = ['Ver publicación en Facebook...'];

const getDisplayContent = (item: NewsItem) => {
  const rawTitle = FALLBACK_TITLES.includes(item.title) ? '¡Elegidos en directo!' : item.title;
  const rawExcerpt = FALLBACK_EXCERPTS.includes(item.excerpt)
    ? 'Un momento que no te puedes perder. Entra a ver la publicación completa.'
    : item.excerpt;

  const firstNewline = rawExcerpt.indexOf('\n');
  if (firstNewline > 0) {
    const firstLine = rawExcerpt.slice(0, firstNewline).trim();
    const body = rawExcerpt.slice(firstNewline + 1).trim();
    const title = firstLine.length <= MAX_TITLE_FROM_LINE ? firstLine : rawTitle;
    return { title, body };
  }
  return { title: rawTitle, body: rawExcerpt };
};

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
            {news.map((item, index) => {
              const { title, body } = getDisplayContent(item);
              const displayBody = !item.image && body.length > 450 ? body.slice(0, 450) + '…' : body;
              return (
              <motion.article
                key={item.id}
                className={`news-card${!item.image ? ' news-card--no-image' : ''}`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {item.image && (
                  <div className="news-image">
                    <img
                      src={
                        item.image.startsWith('http')
                          ? item.image
                          : item.image.startsWith(import.meta.env.BASE_URL)
                            ? item.image
                            : `${import.meta.env.BASE_URL}${item.image.startsWith('/') ? item.image.slice(1) : item.image}`
                      }
                      alt="Imagen de la noticia"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null; // Prevent infinite loop
                        target.src = `${import.meta.env.BASE_URL}images/ElegidosLogo.png`;
                      }}
                    />
                  </div>
                )}
                <div className="news-content">
                  <div className="news-header">
                    <span className="news-date">{item.date}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{displayBody}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="read-more">Leer más →</a>
                </div>
              </motion.article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Noticias;
