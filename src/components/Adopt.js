import React from 'react';
import { motion } from 'framer-motion';

const Adopt = () => {
    return (
        <section id="adopt" style={{ padding: '6rem 2rem', backgroundColor: '#f9f9f9' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '1.5rem' }}
                >
                    ACQUIRE A MUSE
                </motion.h2>
                <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '3rem', lineHeight: 1.6 }}>
                    Ready to welcome a masterpiece into your life? <br />
                    Inquire about our available models or schedule a private viewing.
                </p>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Name</label>
                            <input type="text" style={{ padding: '1rem', border: '1px solid #ddd', backgroundColor: 'transparent', fontSize: '1rem' }} placeholder="Your Name" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email</label>
                            <input type="email" style={{ padding: '1rem', border: '1px solid #ddd', backgroundColor: 'transparent', fontSize: '1rem' }} placeholder="your@email.com" />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Message</label>
                        <textarea rows="4" style={{ padding: '1rem', border: '1px solid #ddd', backgroundColor: 'transparent', fontSize: '1rem', resize: 'none' }} placeholder="Tell us which model caught your eye..."></textarea>
                    </div>

                    <button
                        type="submit"
                        style={{
                            padding: '1.2rem',
                            backgroundColor: '#000',
                            color: '#fff',
                            border: 'none',
                            fontSize: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em',
                            cursor: 'pointer',
                            marginTop: '1rem'
                        }}
                    >
                        Send Inquiry
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default Adopt;
