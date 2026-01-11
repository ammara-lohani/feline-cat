import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--color-primary)',
            color: '#fff',
            padding: '4rem 2rem',
            marginTop: 'auto'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '2rem'
            }}>
                <div>
                    <h3 style={{ marginBottom: '1rem', letterSpacing: '0.1em' }}>FELINE VOGUE</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#888' }}>
                        Defining elegance since 2026.
                    </p>
                </div>

                <div style={{ display: 'flex', gap: '2rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#666', marginBottom: '0.5rem' }}>Explore</span>
                        <a href="#collections" style={{ fontSize: '0.9rem', color: '#bbb' }}>Collections</a>
                        <a href="#campaigns" style={{ fontSize: '0.9rem', color: '#bbb' }}>Campaigns</a>
                        <a href="#stores" style={{ fontSize: '0.9rem', color: '#bbb' }}>Boutiques</a>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#666', marginBottom: '0.5rem' }}>Legal</span>
                        <a href="#privacy" style={{ fontSize: '0.9rem', color: '#bbb' }}>Privacy</a>
                        <a href="#terms" style={{ fontSize: '0.9rem', color: '#bbb' }}>Terms</a>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Instagram size={20} color="#fff" />
                    <Twitter size={20} color="#fff" />
                    <Facebook size={20} color="#fff" />
                </div>
            </div>

            <div style={{
                borderTop: '1px solid #333',
                maxWidth: '1200px',
                margin: '3rem auto 0',
                paddingTop: '2rem',
                textAlign: 'center',
                fontSize: '0.7rem',
                color: '#555',
                fontFamily: 'var(--font-body)'
            }}>
                &copy; 2026 FELINE VOGUE. ALL RIGHTS RESERVED.
            </div>
        </footer>
    );
};

export default Footer;
