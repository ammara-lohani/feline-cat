import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
    { source: "VOGUE", text: "The ultimate accessory for the modern aristocrat. Feline Vogue has redefined pet ownership." },
    { source: "HARPER'S BAZAAR", text: "Simply breathtaking. A collection that rivals the runways of Paris." },
    { source: "ELLE DECOR", text: "A living masterpiece in every home. These cats are not pets; they are statements." }
];

const Reviews = () => {
    return (
        <section style={{ padding: '6rem 2rem', borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                {reviews.map((review, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        style={{ textAlign: 'center' }}
                    >
                        <h4 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>{review.source}</h4>
                        <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#666', lineHeight: 1.6 }}>"{review.text}"</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;
