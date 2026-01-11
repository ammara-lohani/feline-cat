import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section style={{
            height: '100vh',
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000'
        }}>
            {/* Background Image */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/assets/hero-cat.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                    opacity: 0.9,
                    zIndex: 1
                }}
            />

            {/* Overlay gradient */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.4) 100%)',
                    zIndex: 2
                }}
            />

            {/* Content */}
            <div style={{
                position: 'relative',
                zIndex: 10,
                textAlign: 'center',
                color: '#fff',
                padding: '0 2rem'
            }}>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '1rem',
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        marginBottom: '1rem',
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                    }}
                >
                    Winter Collection 2026
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    style={{
                        fontSize: 'clamp(3rem, 10vw, 8rem)',
                        lineHeight: 0.9,
                        marginBottom: '2rem',
                        textShadow: '0 4px 10px rgba(0,0,0,0.5)',
                        letterSpacing: '-0.03em'
                    }}
                >
                    PURE <br />
                    <span style={{ fontStyle: 'italic', fontWeight: 300 }}>ELEGANCE</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <a
                        href="#collections"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '1rem',
                            background: 'transparent',
                            border: '1px solid #fff',
                            color: '#fff',
                            padding: '1rem 3rem',
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#fff';
                            e.currentTarget.style.color = '#000';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = '#fff';
                        }}
                    >
                        Discover Collection
                        <motion.span
                            animate={{ y: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            ↓
                        </motion.span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
