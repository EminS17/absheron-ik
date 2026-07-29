import React from 'react';
import { Link } from 'react-router';
import { Trophy, Users, Calendar } from 'lucide-react';
import logo from '/src/assets/logo.png'; 

export default function Home() {
  const features = [
    {
      icon: Trophy,
      title: 'Peşəkarlıq',
      description: 'Basketbol və futbol üzrə yüksək oyun səviyyəsi və milli turnirlərdə nailiyyətlər',
    },
    {
      icon: Users,
      title: 'Komanda',
      description: 'Təcrübəli idmançılar, futbolçular, basketbolçular və peşəkar məşqçi heyəti',
    },
    {
      icon: Calendar,
      title: 'Müntəzəm oyunlar',
      description: 'Çempionatlarda, liqalarda və turnirlərdə davamlı iştirak',
    },
  ];

  const news = [
    {
      id: 1,
      title: 'Basketbol ev oyununda qələbə',
      date: '15 fevral 2026',
      description: 'ABŞERONİK basketbol komandası 87:72 hesabı ilə əmin qələbə qazandı',
    },
    {
      id: 2,
      title: 'Futbol komandamıza yeni oyunçu',
      date: '10 fevral 2026',
      description: 'Klubumuzun futbol heyətinə hücumameyilli təcrübəli hücumçu qoşuldu',
    },
    {
      id: 3,
      title: 'Qarşıdakı səfər oyunları',
      date: '8 fevral 2026',
      description: 'Komandalarımız mühüm səfər turnirlərinə fəal hazırlaşır',
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
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
    },
    newsImage: {
      height: '160px',
      background: 'linear-gradient(135deg, #3E6DB5, #2C5294)'
    },
    newsContent: { padding: '20px' },
    newsDate: { fontSize: '0.85rem', color: '#9ca3af', marginBottom: '8px' },
    ctaText: { fontSize: '1.1rem', color: '#f3f4f6', maxWidth: '640px', margin: '0 auto 32px auto' }
  };

  return (
    <div>
      {/* Принудительное управление порядком отображения */}
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
            
            {/* Блок с логотипом (первый на мобильных) */}
            <div className="hero-logo-box">
              <img src={logo} alt="ABŞERONİK Logo" style={styles.logo} />
            </div>

            {/* Текстовый блок */}
            <div className="hero-text-box">
              <h1 style={styles.heroTitle}>ABŞERONİK</h1>
              <p style={styles.heroSubtitle}>Abşeron İdman Klubu</p>
              <p style={styles.heroText}>
                Azərbaycanın peşəkar basketbol və futbol klubu. Qələbəyə doğru addımlamaq, 
                komanda ruhu və unudulmaz oyun nümayiş etdirmək bizim əsas hədəfimizdir.
              </p>
              <div style={styles.btnContainer} className="hero-btn-container">
                <Link to="/about" style={styles.btnWhite}>Klub haqqında</Link>
                <Link to="/team" style={styles.btnOutline}>Komanda</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.sectionWhite}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Niyə ABŞERONİK?</h2>
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
          <h2 style={styles.sectionTitle}>Son Xəbərlər</h2>
          <div style={styles.grid3}>
            {news.map((item) => (
              <div key={item.id} style={styles.newsCard}>
                <div style={styles.newsImage}></div>
                <div style={styles.newsContent}>
                  <div style={styles.newsDate}>{item.date}</div>
                  <h3 style={styles.cardTitle}>{item.title}</h3>
                  <p style={styles.cardText}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.sectionBlue}>
        <div style={styles.container}>
          <h2 style={{ ...styles.sectionTitle, color: '#ffffff', marginBottom: '24px' }}>Oyunlarımızı izləyin</h2>
          <p style={styles.ctaText}>
            Basketbol və futbol matçlarımızda komandamızı arenadan dəstəkləyin və maraqlı səfər qarşıdurmalarını canlı izləyin.
          </p>
          <Link to="/contact" style={{ ...styles.btnWhite, display: 'inline-block', flex: 'none' }}>
            Bizimlə əlaqə
          </Link>
        </div>
      </section>
    </div>
  );
}