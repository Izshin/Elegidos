import { motion } from 'framer-motion';

const TourPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        minHeight: '100vh',
        paddingTop: '100px',
        backgroundColor: 'var(--color-black)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '2rem'
      }}
    >
      <a
        href="https://www.facebook.com/photo.php?fbid=5343305385745840&id=844227455653678&set=a.844227505653673&locale=ms_MY"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'block', maxWidth: '100%', padding: '2rem' }}
      >
        <motion.img
          src={`${import.meta.env.BASE_URL}images/Tour%20placeholder.jpg`}
          alt="Tour Dates Placeholder"
          whileHover={{
            boxShadow: '0 0 30px var(--color-accent)',
            scale: 1.02
          }}
          transition={{ duration: 0.3 }}
          style={{
            maxWidth: '100%',
            height: 'auto',
            maxHeight: 'calc(100vh - 150px)',
            objectFit: 'contain',
            borderRadius: '8px',
            border: '4px solid var(--color-accent)',
            cursor: 'pointer'
          }}
        />
      </a>
    </motion.div>
  );
};

export default TourPage;
