import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '/src/assets/logo.png'; 

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Ana Səhifə' },
    { path: '/about', label: 'Klub Haqqında' },
    { path: '/team', label: 'Komanda' },
    { path: '/contact', label: 'Əlaqə' },
    { path: '/register', label: 'Qeydiyyat' }, 
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const styles = {
    layoutWrapper: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f9fafb',
      fontFamily: 'sans-serif'
    },
    header: {
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    },
    navContainer: {
      maxWidth: '1152px',
      margin: '0 auto',
      padding: '16px',
      boxSizing: 'border-box'
    },
    navFlex: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    logoLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      textDecoration: 'none'
    },
    logoImg: {
      height: '48px',
      width: 'auto'
    },
    logoTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      color: '#3E6DB5',
      lineHeight: '1.2'
    },
    logoSubtitle: {
      fontSize: '0.75rem',
      color: '#4b5563'
    },
    desktopNav: {
      display: 'flex',
      alignItems: 'center',
      gap: '24px'
    },
    navLink: (linkPath) => {
      const isReg = linkPath === '/register';
      return {
        textDecoration: 'none',
        fontSize: '1rem',
        fontWeight: '500',
        transition: 'all 0.2s ease',
        color: isReg ? '#ffffff' : (isActive(linkPath) ? '#3E6DB5' : '#374151'),
        backgroundColor: isReg ? '#3E6DB5' : 'transparent',
        padding: isReg ? '8px 16px' : '0',
        borderRadius: isReg ? '6px' : '0',
        border: isReg ? '1px solid #3E6DB5' : 'none',
      };
    },
    mobileMenuBtn: {
      background: 'none',
      border: 'none',
      padding: '8px',
      cursor: 'pointer',
      color: '#374151',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    mobileNav: {
      marginTop: '16px',
      paddingBottom: '16px',
      borderTop: '1px solid #e5e7eb',
      paddingTop: '16px'
    },
    mobileNavFlex: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    main: {
      flex: 1
    },
    footer: {
      backgroundColor: '#3E6DB5',
      color: '#ffffff',
      padding: '48px 16px'
    },
    footerContainer: {
      maxWidth: '1152px',
      margin: '0 auto'
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '32px'
    },
    footerLogo: {
      height: '64px',
      width: 'auto',
      marginBottom: '16px'
      // Фильтр яркости удалён, чтобы логотип оставался цветным
    },
    footerText: {
      fontSize: '0.875rem',
      color: '#e5e7eb',
      margin: 0
    },
    footerTitle: {
      fontWeight: 'bold',
      marginBottom: '16px',
      fontSize: '1rem'
    },
    footerLinksFlex: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    footerLink: {
      fontSize: '0.875rem',
      color: '#e5e7eb',
      textDecoration: 'none',
      transition: 'color 0.2s ease'
    },
    footerContactSpace: {
      fontSize: '0.875rem',
      color: '#e5e7eb'
    },
    footerContactP: {
      margin: '0 0 8px 0'
    },
    copyright: {
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
      marginTop: '32px',
      paddingTop: '32px',
      textAlign: 'center',
      fontSize: '0.875rem',
      color: '#e5e7eb'
    }
  };

  return (
    <div style={styles.layoutWrapper}>
      {/* Header */}
      <header style={styles.header}>
        <nav style={styles.navContainer}>
          <div style={styles.navFlex}>
            {/* Logo */}
            <Link to="/" style={styles.logoLink}>
              <img src={logo} alt="ABŞERONİK" style={styles.logoImg} />
              <div>
                <div style={styles.logoTitle}>ABŞERONİK</div>
                <div style={styles.logoSubtitle}>Abşeron İdman Klubu</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div style={styles.desktopNav} className="desktop-only">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={styles.navLink(link.path)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={styles.mobileMenuBtn}
              className="mobile-only"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div style={styles.mobileNav}>
              <div style={styles.mobileNavFlex}>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      ...styles.navLink(link.path),
                      textAlign: link.path === '/register' ? 'center' : 'left'
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={styles.footerGrid}>
            <div>
              <img src={logo} alt="ABŞERONİK" style={styles.footerLogo} />
              <p style={styles.footerText}>Peşəkar basketbol klubu</p>
            </div>
            
            <div>
              <h3 style={styles.footerTitle}>Naviqasiya</h3>
              <div style={styles.footerLinksFlex}>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    style={styles.footerLink}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 style={styles.footerTitle}>Əlaqə</h3>
              <div style={styles.footerContactSpace}>
                <p style={styles.footerContactP}>Email: absheronik@gmail.com</p>
                <p style={styles.footerContactP}>Telefon: +994 12 XXX XX XX</p>
                <p style={{ ...styles.footerContactP, marginBottom: 0 }}>Ünvan: Bakı, Azərbaycan</p>
              </div>
            </div>
          </div>

          <div style={styles.copyright}>
            © 2026 ABŞERONİK. Bütün hüquqlar qorunur.
          </div>
        </div>
      </footer>

      {/* Адаптивные стили для скрытия */}
      <style>{`
        @media (max-width: 991px) {
          .desktop-only { display: none !important; }
        }
        @media (min-width: 992px) {
          .mobile-only { display: none !important; }
        }
      `}</style>
    </div>
  );
}