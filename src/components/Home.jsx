import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Users, Calendar, X, ZoomIn } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png'; 

export default function Home() {
  const [activeImage, setActiveImage] = useState(null);
  const { t } = useTranslation();

  const features = [
    {
      icon: Trophy,
      title: t('feat_1_title'),
      description: t('feat_1_desc'),
    },
    {
      icon: Users,
      title: t('feat_2_title'),
      description: t('feat_2_desc'),
    },
    {
      icon: Calendar,
      title: t('feat_3_title'),
      description: t('feat_3_desc'),
    },
  ];

  const news = [
    {
      id: 1,
      title: t('news_1_title'),
      description: t('news_1_desc'),
      videoUrl: 'https://www.youtube.com/watch?v=cnHeLAYzSR0',
      image: 'https://img.youtube.com/vi/cnHeLAYzSR0/hqdefault.jpg',
      isClickableImage: false
    },
    {
      id: 2,
      title: t('news_2_title'),
      description: t('news_2_desc'),
      videoUrl: null,
      image: '/team-photo.jpeg',
      isClickableImage: true
    },
    {
      id: 3,
      title: t('news_3_title'),
      description: t('news_3_desc'),
      videoUrl: null,
      image: '/gym.jpg',
      isClickableImage: true
    },
  ];

  const styles = {
    hero: {
      background: 'linear-gradient(135deg, #3E6DB5, #2C5294)',
      color: '#ffffff',
      padding: '48px 16px',
    },
    container: { maxWidth: '1152px', margin: '0 auto' },
    heroTitle: { fontSize: '2.8rem', fontWeight: 'bold', marginBottom: '16px', letterSpacing: '1px' },
    heroSubtitle: { fontSize: '1.3rem', marginBottom: '16px', color: '#f3f4f6', fontWeight: '500' },
    heroText: { fontSize: '1.05rem', marginBottom: '32px', color: '#e5e7eb', lineHeight: '1.6' },
    btnContainer: { display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' },
    btnWhite: {
      backgroundColor: '#ffffff',
      color: '#3E6DB5',
      padding: '12px 32px',
      borderRadius: '8px',
      fontWeight: '600',
      textDecoration: 'none',
      textAlign: 'center',
      flex: '1 1 140px'
    },
    btnOutline: {
      border: '2px solid #ffffff',
      color: '#ffffff',
      padding: '10px 32px',
      borderRadius: '8px',
      fontWeight: '600',
      textDecoration: 'none',
      textAlign: 'center',
      flex: '1 1 140px'
    },
    logo: { width: '100%', maxWidth: '260px', display: 'block', margin: '0 auto', objectFit: 'contain' },
    sectionWhite: { padding: '60px 16px', backgroundColor: '#ffffff' },
    sectionGray: { padding: '60px 16px', backgroundColor: '#f9fafb' },
    sectionBlue: { padding: '60px 16px', backgroundColor: '#3E6DB5', color: '#ffffff', textAlign: 'center' },
    sectionTitle: { fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '40px', color: '#1f2937' },
    grid3: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '24px'
    },
    featureCard: {
      backgroundColor: '#f9fafb',
      padding: '24px',
      borderRadius: '12px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    },
    iconWrapper: {
      backgroundColor: '#3E6DB5',
      width: '56px',
      height: '56px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px'
    },
    cardTitle: { fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px', color: '#1f2937' },
    cardText: { color: '#4b5563', lineHeight: '1.5', margin: 0 },
    newsCard: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column'
    },
    newsImage: (isClickable) => ({
      height: '180px',
      background: 'linear-gradient(135deg, #3E6DB5, #2C5294)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      cursor: isClickable ? 'pointer' : 'default',
      position: 'relative'
    }),
    newsContent: { padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' },
    ctaText: { fontSize: '1.1rem', color: '#f3f4f6', maxWidth: '640px', margin: '0 auto 32px auto' },
    
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '16px'
    },
    modalContent: {
      position: 'relative',
      maxWidth: '900px',
      width: '100%',
      maxHeight: '90vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    modalImage: {
      maxWidth: '100%',
      maxHeight: '85vh',
      borderRadius: '8px',
      objectFit: 'contain',
      boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
    },
    closeButton: {
      position: 'absolute',
      top: '-40px',
      right: '0',
      background: 'transparent',
      border: 'none',
      color: '#ffffff',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      fontSize: '1rem',
      fontWeight: '600'
    }
  };

  return (
    <div>
      <style>{`
        .hero-grid-responsive {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 32px;
        }
        .hero-logo-box {
          order: 1 !important;
          width: 100%;
        }
        .hero-text-box {
          order: 2 !important;
          width: 100%;
        }
        .zoom-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.2s ease;
          color: white;
        }
        .news-image-wrapper:hover .zoom-overlay {
          opacity: 1;
        }

        @media (min-width: 768px) {
          .hero-grid-responsive {
            display: grid;
            grid-template-columns: 1fr 1fr;
            text-align: left;
          }
          .hero-text-box {
            order: 1 !important;
          }
          .hero-logo-box {
            order: 2 !important;
          }
          .hero-btn-container {
            justify-content: flex-start !important;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <div className="hero-grid-responsive">
            <div className="hero-logo-box">
              <img src={logo} alt="ABŞERONİK Logo" style={styles.logo} />
            </div>
            <div className="hero-text-box">
              <h1 style={styles.heroTitle}>ABŞERONİK</h1>
              <p style={styles.heroSubtitle}>{t('hero_subtitle')}</p>
              <p style={styles.heroText}>
                {t('hero_text')}
              </p>
              <div style={styles.btnContainer} className="hero-btn-container">
                <Link to="/about" style={styles.btnWhite}>{t('btn_about')}</Link>
                <Link to="/team" style={styles.btnOutline}>{t('btn_team')}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.sectionWhite}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>{t('why_title')}</h2>
          <div style={styles.grid3}>
            {features.map((feature, index) => (
              <div key={index} style={styles.featureCard}>
                <div style={styles.iconWrapper}>
                  <feature.icon color="#ffffff" size={28} />
                </div>
                <h3 style={styles.cardTitle}>{feature.title}</h3>
                <p style={styles.cardText}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section style={styles.sectionGray}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>{t('news_title')}</h2>
          <div style={styles.grid3}>
            {news.map((item) => (
              <div key={item.id} style={styles.newsCard}>
                <div 
                  className={item.isClickableImage ? "news-image-wrapper" : ""}
                  style={{
                    ...styles.newsImage(item.isClickableImage),
                    ...(item.image ? { backgroundImage: `url(${item.image})` } : {})
                  }}
                  onClick={() => item.isClickableImage && setActiveImage(item.image)}
                >
                  {item.isClickableImage && (
                    <div className="zoom-overlay">
                      <ZoomIn size={32} />
                    </div>
                  )}
                </div>
                <div style={styles.newsContent}>
                  <h3 style={styles.cardTitle}>{item.title}</h3>
                  <p style={{ ...styles.cardText, marginBottom: item.videoUrl ? '16px' : '0' }}>
                    {item.description}
                  </p>
                  
                  {item.videoUrl && (
                    <a
                      href={item.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        marginTop: 'auto',
                        paddingTop: '12px',
                        color: '#3E6DB5',
                        fontWeight: '600',
                        textDecoration: 'none',
                        fontSize: '0.95rem'
                      }}
                    >
                      {t('watch_video')}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.sectionBlue}>
        <div style={styles.container}>
          <h2 style={{ ...styles.sectionTitle, color: '#ffffff', marginBottom: '24px' }}>{t('cta_title')}</h2>
          <p style={styles.ctaText}>
            {t('cta_desc')}
          </p>
          <Link to="/contact" style={{ ...styles.btnWhite, display: 'inline-block', flex: 'none' }}>
            {t('cta_btn')}
          </Link>
        </div>
      </section>

      {/* Modal Window */}
      {activeImage && (
        <div style={styles.modalOverlay} onClick={() => setActiveImage(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={() => setActiveImage(null)}>
              <X size={24} /> {t('close')}
            </button>
            <img src={activeImage} alt="Böyüdülmüş şəkil" style={styles.modalImage} />
          </div>
        </div>
      )}
    </div>
  );
}