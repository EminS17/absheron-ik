import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

// 🖼️ Используем логотип logo.png
import logo from '../assets/logo.png'; 

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // 🌙 Инициализация темы из localStorage или по умолчанию (light)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // 🚀 Переключение темы и сохранение в localStorage + установка класса на root
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

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

  const isDark = theme === 'dark';

  const styles = {
    layoutWrapper: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: isDark ? '#0f172a' : '#f9fafb',
      color: isDark ? '#f8fafc' : '#1e293b',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      overflowX: 'hidden',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    },
    header: {
      backgroundColor: isDark ? '#1e293b' : '#ffffff',
      boxShadow: isDark ? '0 2px 8px rgba(0, 0, 0, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.06)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      transition: 'background-color 0.3s ease'
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
      gap: '12px',
      textDecoration: 'none'
    },
    logoImg: {
      height: '46px',
      width: 'auto',
      objectFit: 'contain'
    },
    logoTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#3E6DB5',
      lineHeight: '1.1'
    },
    logoSubtitle: {
      fontSize: '0.75rem',
      color: isDark ? '#94a3b8' : '#4b5563',
      marginTop: '2px'
    },
    desktopNav: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px'
    },
    navLink: (linkPath) => {
      const isReg = linkPath === '/register';
      const activeColor = '#3E6DB5';
      const defaultColor = isDark ? '#cbd5e1' : '#374151';

      return {
        textDecoration: 'none',
        fontSize: '0.95rem',
        fontWeight: '600',
        transition: 'all 0.2s ease',
        color: isReg ? '#ffffff' : (isActive(linkPath) ? activeColor : defaultColor),
        backgroundColor: isReg ? '#3E6DB5' : 'transparent',
        padding: isReg ? '10px 20px' : '8px 12px',
        borderRadius: isReg ? '8px' : '6px',
        border: isReg ? '1px solid #3E6DB5' : 'none',
        display: 'block',
        boxSizing: 'border-box'
      };
    },
    themeBtn: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '8px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: isDark ? '#fbbf24' : '#475569',
      backgroundColor: isDark ? 'rgba(251, 191, 36, 0.1)' : '#f1f5f9',
      transition: 'all 0.2s ease',
      WebkitTapHighlightColor: 'transparent'
    },
    mobileMenuBtn: {
      background: 'none',
      border: 'none',
      padding: '8px',
      cursor: 'pointer',
      color: isDark ? '#f8fafc' : '#374151',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      WebkitTapHighlightColor: 'transparent'
    },
    mobileNav: {
      marginTop: '12px',
      paddingBottom: '16px',
      borderTop: `1px solid ${isDark ? '#334155' : '#f3f4f6'}`,
      paddingTop: '12px'
    },
    mobileNavFlex: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    main: {
      flex: 1
    },
    footer: {
      backgroundColor: '#3E6DB5',
      color: '#ffffff',
      padding: '40px 16px 24px 16px'
    },
    footerContainer: {
      maxWidth: '1152px',
      margin: '0 auto'
    },
    footerLogo: {
      height: '54px',
      width: 'auto',
      objectFit: 'contain'
    },
    footerTitle: {
      fontWeight: 'bold',
      marginBottom: '14px',
      fontSize: '1.05rem',
      color: '#ffffff',
      letterSpacing: '0.3px'
    },
    footerLinksFlex: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    },
    footerLink: {
      fontSize: '0.9rem',
      color: '#e5e7eb',
      textDecoration: 'none',
      display: 'inline-block',
      width: 'fit-content'
    },
    footerContactSpace: {
      fontSize: '0.9rem',
      color: '#e5e7eb',
      lineHeight: '1.6'
    },
    footerContactP: {
      margin: '0 0 8px 0'
    },
    copyright: {
      borderTop: '1px solid rgba(255, 255, 255, 0.15)',
      marginTop: '32px',
      paddingTop: '20px',
      textAlign: 'center',
      fontSize: '0.85rem',
      color: '#d1d5db'
    }
  };

  return (
    <div style={styles.layoutWrapper}>
      <style>{`
        /* Оптимизация футера и меню под телефон */
        @media (max-width: 991px) {
          .desktop-only { display: none !important; }
          .footer-responsive-grid {
            display: flex;
            flex-direction: column;
            gap: 32px;
            text-align: left;
            align-items: flex-start;
          }
          .footer-col {
            width: 100%;
          }
        }
        @media (min-width: 992px) {
          .mobile-only { display: none !important; }
          .footer-responsive-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 32px;
            text-align: left;
            align-items: start;
          }
          .desktop-link {
            width: auto !important;
            display: inline-block !important;
          }
        }
      `}</style>

      {/* Header */}
      <header style={styles.header}>
        <nav style={styles.navContainer}>
          <div style={styles.navFlex}>
            
            {/* Logo + Название */}
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
                  className="desktop-link"
                  style={styles.navLink(link.path)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Кнопка смены темы (Desktop) */}
              <button
                onClick={toggleTheme}
                style={styles.themeBtn}
                title={isDark ? "Açıq rejim" : "Tünd rejim"}
                aria-label="Переключить тему"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Controls (Theme Toggle + Menu) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="mobile-only">
              <button
                onClick={toggleTheme}
                style={styles.themeBtn}
                title={isDark ? "Açıq rejim" : "Tünd rejim"}
                aria-label="Переключить тему"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                style={styles.mobileMenuBtn}
                aria-label="Müəyyən et"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
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
          <div className="footer-responsive-grid">
            
            <div className="footer-col">
              <Link to="/">
                <img src={logo} alt="ABŞERONİK Logo" style={styles.footerLogo} />
              </Link>
            </div>
            
            <div className="footer-col">
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

            <div className="footer-col">
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