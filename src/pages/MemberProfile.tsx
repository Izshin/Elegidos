import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { members } from '../data/members';
import './MemberProfile.css';

const MemberProfile = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const member = members.find(m => m.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!member) {
        return (
            <div className="member-profile">
                <div className="container text-center">
                    <h2>Miembro no encontrado</h2>
                    <button onClick={() => navigate('/orquesta')} className="back-button">
                        Volver a La Orquesta
                    </button>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            className="member-profile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div
                className="member-background"
                style={{
                    background: member.gradient,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.1,
                    zIndex: 0
                }}
            />

            <div className="container member-hero">
                <motion.div
                    className="member-image-container"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <img src={member.image} alt={member.title} className="member-image" />
                </motion.div>

                <motion.div
                    className="member-info"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h1 className="member-name">{member.title}</h1>
                    <h2 className="member-role">{member.subtitle}</h2>

                    {member.bio && <p className="member-bio">{member.bio}</p>}

                    <div className="member-details">
                        <div className="detail-item">
                            <h4>Origen</h4>
                            <p>{member.handle}</p>
                        </div>
                        <div className="detail-item">
                            <h4>Rol</h4>
                            <p>{member.location}</p>
                        </div>
                    </div>

                    <motion.button
                        className="back-button"
                        onClick={() => navigate('/orquesta')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Volver a La Orquesta
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default MemberProfile;
