import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', href: '#collections' },
    { name: 'Runway', href: '#collections' },
    { name: 'Maison', href: '#about' },
    { name: 'Adopt', href: '#adopt' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1.5rem 2rem',
        transition: 'all 0.3s ease',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
        color: isScrolled || isMobileMenuOpen ? 'var(--color-primary)' : 'var(--color-bg)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1400px', margin: '0 auto' }}>
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.5rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: isScrolled ? 'var(--color-primary)' : 'inherit' // Ensure visibility against hero
          }}
        >
          Feline Vogue
        </motion.div>

        {/* Desktop Links */}
        <div className="desktop-menu" style={{ display: 'none', gap: '3rem', md: { display: 'flex' } }}>
          <style>{`
            @media (min-width: 768px) {
              .desktop-menu { display: flex !important; }
              .mobile-toggle { display: none !important; }
            }
          `}</style>
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.05 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                color: isScrolled ? 'var(--color-primary)' : 'inherit'
              }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Icons */}
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>

          <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ cursor: 'pointer' }}>
            {isMobileMenuOpen ? <X size={24} color="var(--color-primary)" /> : <Menu size={24} style={{ color: isScrolled ? 'var(--color-primary)' : 'inherit' }} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'var(--color-bg)',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2rem',
                  color: 'var(--color-primary)',
                  cursor: 'pointer',
                }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
