import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" style={{ padding: '8rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', alignItems: 'center', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ maxWidth: '800px' }}
                >
                    <p style={{ textTransform: 'uppercase', letterSpacing: '0.2em', color: '#888', marginBottom: '1rem' }}>
                        The Maison
                    </p>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '2rem', lineHeight: 1.1 }}>
                        REDEFINING <br /> <span style={{ fontStyle: 'italic', fontWeight: 300 }}>FELINE LUXURY</span>
                    </h2>
                    <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#444' }}>
                        Feline Vogue is not just an adoption agency; it is a curation of the finest feline companions.
                        We believe that a cat is the ultimate accessory to a sophisticated life—a living, breathing work of art
                        that brings elegance, grace, and a touch of untamed beauty into your home. Each of our models is
                        hand-selected for their pedigree, poise, and personality.
                    </p>
                </motion.div>

                <div style={{ width: '100%', height: '1px', backgroundColor: '#eee', marginTop: '2rem' }}></div>
            </div>
        </section>
    );
};

export default About;
