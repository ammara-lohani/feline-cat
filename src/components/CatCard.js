import React from 'react';
import { motion } from 'framer-motion';

const CatCard = ({ name, breed, age, price, image }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            style={{
                width: '100%',
                cursor: 'pointer',
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                backgroundColor: '#fff'
            }}
        >
            <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '3/4' }}>
                <motion.img
                    src={image}
                    alt={name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                    }}
                />
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '1rem',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                    color: '#fff',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end'
                }}>
                    <div>
                        <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.8 }}>{breed}</p>
                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '0.2rem' }}>{name}</h3>
                    </div>
                    <p style={{ fontSize: '1rem', fontWeight: 600 }}>${price}</p>
                </div>
            </div>

            <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <button style={{
                    background: '#000',
                    color: '#fff',
                    border: 'none',
                    padding: '0.8rem 2rem',
                    textTransform: 'uppercase',
                    fontSize: '0.8rem',
                    letterSpacing: '0.1em',
                    cursor: 'pointer',
                    width: '100%'
                }}>
                    Adopt Model
                </button>
            </div>
        </motion.div>
    );
};

export default CatCard;
