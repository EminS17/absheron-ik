import React from 'react';
import { Link } from 'react-router';
import { Trophy, Users, Calendar } from 'lucide-react';
import logo from '/src/assets/logo.png'; 
// (проверь правильность пути в зависимости от того, где лежит файл)

export default function Home() {
  const features = [
    {
      icon: Trophy,
      title: 'Peşəkarlıq',
      description: 'Yüksək oyun səviyyəsi və milli turnirlərdə nailiyyətlər',
    },
    {
      icon: Users,
      title: 'Komanda',
      description: 'Təcrübəli oyunçular və məşqçi heyəti',
    },
    {
      icon: Calendar,
      title: 'Müntəzəm oyunlar',
      description: 'Çempionatlarda və turnirlərdə davamlı iştirak',
    },
  ];

  const news = [
    {
      id: 1,
      title: 'Ev oyununda qələbə',
      date: '15 fevral 2026',
      description: 'ABŞERONİK 87:72 hesabı ilə əmin qələbə qazandı',
    },
    {
      id: 2,
      title: 'Komandaya yeni oyunçu',
      date: '10 fevral 2026',
      description: 'Klubumuza təcrübəli pleymeyker qoşuldu',
    },
    {
      id: 3,
      title: 'Qarşıdakı səfər oyunu',
      date: '8 fevral 2026',
      description: 'Komanda mühüm səfər oyununa hazırlaşır',
    },
  ];

  // JavaScript встроенные стили
  const styles = {
    hero: {
      background: 'linear-gradient(135deg, #3E6DB5, #2C5294)',
      color: '#ffffff',
      padding: '96px 16px'
    },
    container: { maxWidth: '1152px', margin: '0 auto' },
    heroGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '48px',
      alignItems: 'center'
    },
    heroTitle: { fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '24px', letterSpacing: '1px' },
    heroSubtitle: { fontSize: '1.5rem', marginBottom: '16px', color: '#f3f4f6', fontWeight: '500' },
    heroText: { fontSize: '1.125rem', marginBottom: '32px', color: '#e5e7eb', lineHeight: '1.6' },
    btnContainer: { display: 'flex', gap: '16px', flexWrap: 'wrap' },
    btnWhite: {
      backgroundColor: '#ffffff',
      color: '#3E6DB5',
      padding: '12px 32px',
      borderRadius: '8px',
      fontWeight: '500',
      textDecoration: 'none',
      textAlign: 'center'
    },
    btnOutline: {
      border: '2px solid #ffffff',
      color: '#ffffff',
      padding: '10px 32px',
      borderRadius: '8px',
      fontWeight: '500',
      textDecoration: 'none',
      textAlign: 'center'
    },
    logo: { width: '100%', maxWidth: '320px', display: 'block', margin: '0 auto', objectFit: 'contain' },
    sectionWhite: { padding: '80px 16px', backgroundColor: '#ffffff' },
    sectionGray: { padding: '80px 16px', backgroundColor: '#f9fafb' },
    sectionBlue: { padding: '80px 16px', backgroundColor: '#3E6DB5', color: '#ffffff', textAlign: 'center' },
    sectionTitle: { fontSize: '2.25rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '48px', color: '#1f2937' },
    grid3: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '32px'
    },
    featureCard: {
      backgroundColor: '#f9fafb',
      padding: '32px',
      borderRadius: '12px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
    },
    iconWrapper: {
      backgroundColor: '#3E6DB5',
      width: '64px',
      height: '64px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '24px'
    },
    cardTitle: { fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '12px', color: '#1f2937' },
    cardText: { color: '#4b5563', lineHeight: '1.5', margin: 0 },
    newsCard: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
    },
    newsImage: {
      height: '192px',
      background: 'linear-gradient(135deg, #3E6DB5, #2C5294)'
    },
    newsContent: { padding: '24px' },
    newsDate: { fontSize: '0.875rem', color: '#9ca3af', marginBottom: '8px' },
    ctaText: { fontSize: '1.25rem', marginBottom: '32px', color: '#f3f4f6', maxWidth: '640px', margin: '0 auto 32px auto' }
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <div style={styles.heroGrid}>
            <div>
              <h1 style={styles.heroTitle}>ABŞERONİK</h1>
              <p style={styles.heroSubtitle}>Abşeron İdman Klubu</p>
              <p style={styles.heroText}>
                Azərbaycanın peşəkar basketbol klubu. Qələbəyə doğru addımlamaq, 
                komanda ruhu və unudulmaz oyun nümayiş etdirmək bizim əsas hədəfimizdir.
              </p>
              <div style={styles.btnContainer}>
                <Link to="/about" style={styles.btnWhite}>Klub haqqında</Link>
                <Link to="/team" style={styles.btnOutline}>Komanda</Link>
              </div>
            </div>
            <div>
              <img src={logo} alt="ABŞERONİK Logo" style={styles.logo} />
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
                  <feature.icon color="#ffffff" size={32} />
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
            Ev oyunlarında komandamızı arenadan dəstəkləyin və maraqlı səfər qarşıdurmalarını canlı izləyin.
          </p>
          <Link to="/contact" style={{ ...styles.btnWhite, display: 'inline-block' }}>
            Bizimlə əlaqə
          </Link>
        </div>
      </section>
    </div>
  );
}