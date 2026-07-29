import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '/src/assets/logo.png'; 

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // 🚀 Автоматический скролл наверх при смене страницы
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    header: {
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    },
    navContainer: {
      maxWidth: '1152px',
      margin: '0 auto',
      padding: '12px 16px',
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
      gap: '10px',
      textDecoration: 'none'
    },
    logoImg: {
      height: '46px',
      width: 'auto',
      objectFit: 'contain'
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
      gap: '20px'
    },
    navLink: (linkPath) => {
      const isReg = linkPath === '/register';
      return {
        textDecoration: 'none',
        fontSize: '0.95rem',
        fontWeight: '600',
        transition: 'all 0.2s ease',
        color: isReg ? '#ffffff' : (isActive(linkPath) ? '#3E6DB5' : '#374151'),
        backgroundColor: isReg ? '#3E6DB5' : 'transparent',
        padding: isReg ? '8px 18px' : '6px 10px',
        borderRadius: isReg ? '8px' : '6px',
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
      marginTop: '12px',
      paddingBottom: '12px',
      borderTop: '1px solid #e5e7eb',
      paddingTop: '12px'
    },
    mobileNavFlex: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    main: {
      flex: 1
    },
    footer: {
      backgroundColor: '#3E6DB5',
      color: '#ffffff',
      padding: '40px 16px'
    },
    footerContainer: {
      maxWidth: '1152px',
      margin: '0 auto'
    },
    footerLogo: {
      height: '64px',
      width: 'auto',
      objectFit: 'contain'
    },
    footerTitle: {
      fontWeight: 'bold',
      marginBottom: '12px',
      fontSize: '1rem',
      color: '#ffffff'
    },
    footerLinksFlex: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    footerLink: {
      fontSize: '0.875rem',
      color: '#e5e7eb',
      textDecoration: 'none'
    },
    footerContactSpace: {
      fontSize: '0.875rem',
      color: '#e5e7eb'
    },
    footerContactP: {
      margin: '0 0 6px 0'
    },
    copyright: {
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
      marginTop: '28px',
      paddingTop: '20px',
      textAlign: 'center',
      fontSize: '0.85rem',
      color: '#e5e7eb'
    }
  };

  return (
    <div style={styles.layoutWrapper}>
      {/* Адаптивные стили */}
      <style>{`
        @media (max-width: 991px) {
          .desktop-only { display: none !important; }
          .footer-responsive-grid {
            display: flex;
            flex-direction: column;
            gap: 28px;
            text-align: center;
            align-items: center;
          }
        }
        @media (min-width: 992px) {
          .mobile-only { display: none !important; }
          .footer-responsive-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 32px;
            text-align: left;
            align-items: center;
          }
        }
      `}</style>

      {/* Header */}
      <header style={styles.header}>
        <nav style={styles.navContainer}>
          <div style={styles.navFlex}>
            
            {/* Logo + Text */}
            <Link to="/" style={styles.logoLink}>
              <img src={logo} alt="ABŞERONİK Logo" style={styles.logoImg} />
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
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
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

      {/* Footer (С вернувшимся красивым логотипом) */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div className="footer-responsive-grid">
            
            {/* Блок только с логотипом */}
            <div>
              <Link to="/">
                <img src={} alt="ABŞERONİK Logo" style={styles.footerLogo} />
              </Link>
            </div>
            
            {/* Навигация */}
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

            {/* Контакты */}
            <div>
              <h3 style={styles.footerTitle}>Əlaqə</h3>
              <div style={styles.footerContactSpace}>
                <p style={styles.footerContactP}>Email: absheronik@gmail.com</p>
                <p style={styles.footerContactP}>Tel: +994 51 742 51 51</p>
                <p style={styles.footerContactP}>Tel: +994 55 929 18 07</p>
                <p style={{ ...styles.footerContactP, marginBottom: 0 }}>Ünvan: Xırdalan, AAAF Park yaxınlığı</p>
              </div>
            </div>

          </div>

          <div style={styles.copyright}>
            © 2026 ABŞERONİK. Bütün hüquqlar qorunur.
          </div>
        </div>
      </footer>
    </div>
  );
}