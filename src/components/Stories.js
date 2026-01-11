import React from 'react';
import { motion } from 'framer-motion';

const StorySection = ({ title, subtitle, text, align = 'left', delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.8, delay }}
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: align === 'left' ? 'flex-start' : 'flex-end',
            textAlign: align,
            maxWidth: '800px',
            margin: '0 auto 8rem',
            padding: '0 2rem'
        }}
    >
        <span style={{ fontSize: '0.8rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>{subtitle}</span>
        <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}>{title}</h3>
        <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: '#555', maxWidth: '600px' }}>{text}</p>
    </motion.div>
)

const Stories = () => {
    return (
        <section style={{ padding: '8rem 0', backgroundColor: '#fff', overflow: 'hidden' }}>
            <StorySection
                title="THE ART OF FELINE LIVING"
                subtitle="Lifestyle"
                text="To live with a Feline Vogue model is to invited art into your daily existence. It is not merely ownership; it is a curation of moments. The soft tread of paws on marble, the silhouette against a sunset window—these are the quiet luxuries that define our collection."
                align="left"
            />

            {/* Decorative Image Divider */}
            <div style={{ height: '60vh', width: '100%', background: 'url(/assets/abyssinian_crown.png) fixed center center / cover', marginBottom: '8rem', opacity: 0.9 }}></div>

            <StorySection
                title="CRAFTING PERFECTION"
                subtitle="Heritage"
                text="Our breeding program borrows from the principles of haute couture. We do not mass produce; we commission. Each lineage is traced with the precision of a royal archive, ensuring that every kitten possesses not just beauty, but the temperament of royalty."
                align="right"
            />
        </section>
    );
};

export default Stories;
