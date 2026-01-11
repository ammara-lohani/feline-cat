import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onLoadingComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onLoadingComplete();
        }, 2500); // 2.5s display time
        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                backgroundColor: '#000',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#d4af37' // Gold
            }}
        >
            <div style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    style={{ marginBottom: '1rem' }}
                >
                    {/* Simple geometric shape or text logo */}
                    <div style={{
                        width: '60px',
                        height: '60px',
                        border: '2px solid #d4af37',
                        margin: '0 auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: 'rotate(45deg)'
                    }}>
                        <div style={{ width: '30px', height: '30px', backgroundColor: '#d4af37' }}></div>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '2rem',
                        letterSpacing: '0.3em',
                        color: '#fff'
                    }}
                >
                    FELINE VOGUE
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    style={{
                        color: '#666',
                        fontSize: '0.8rem',
                        marginTop: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em'
                    }}
                >
                    Loading Elegance
                </motion.p>
            </div>
        </motion.div>
    );
};

export default Loader;
