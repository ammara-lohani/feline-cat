import React from 'react';
import CatCard from './CatCard';
import { motion } from 'framer-motion';

const cats = [
    {
        id: 1,
        name: 'Duchess',
        breed: 'Persian',
        age: '2 Years',
        price: '2,500',
        image: '/assets/hero-cat.png'
    },
    {
        id: 5,
        name: 'Sterling',
        breed: 'Russian Blue',
        age: '3 Years',
        price: '3,800',
        image: '/assets/russian_blue_pearls.png'
    },
    {
        id: 2,
        name: 'Suki',
        breed: 'Siamese',
        age: '1.5 Years',
        price: '1,800',
        image: '/assets/siamese_silk.png'
    },
    {
        id: 6,
        name: 'Ramses',
        breed: 'Abyssinian',
        age: '2 Years',
        price: '4,500',
        image: '/assets/abyssinian_crown.png'
    },
    {
        id: 3,
        name: 'Reginald',
        breed: 'Maine Coon',
        age: '3 Years',
        price: '3,200',
        image: '/assets/maine_coon_bowtie.png'
    },
    {
        id: 7,
        name: 'Barnaby',
        breed: 'Scottish Fold',
        age: '1 Year',
        price: '2,100',
        image: '/assets/scottish_fold_vest.png'
    },
    {
        id: 4,
        name: 'Cairo',
        breed: 'Sphynx',
        age: '2 Years',
        price: '4,000',
        image: '/assets/sphynx_gold.png'
    },
    {
        id: 8,
        name: 'Gatsby',
        breed: 'Bengal',
        age: '4 Years',
        price: '5,000',
        image: '/assets/bengal_tuxedo.png'
    }
];

const Gallery = () => {
    return (
        <section id="collections" style={{ padding: '6rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textTransform: 'uppercase', letterSpacing: '0.2em', color: '#888', marginBottom: '1rem' }}
                >
                    The Collection
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', lineHeight: 0.9 }}
                >
                    RUNWAY READY
                </motion.h2>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '4rem 2rem'
            }}>
                {cats.map((cat, index) => (
                    <motion.div
                        key={cat.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                    >
                        <CatCard {...cat} />
                    </motion.div>
                ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '6rem' }}>
                <a href="#adopt" style={{ fontSize: '1rem', textDecoration: 'underline', color: '#000', textTransform: 'uppercase', letterSpacing: '0.1em' }}>View Full Archive</a>
            </div>
        </section>
    );
};

export default Gallery;
