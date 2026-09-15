import React from 'react';
import { Award, Target, Heart, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logo from '/src/assets/logo.png'; 
import kitImage from '/src/assets/kit.jpg';

export default function About() {
  const { t } = useTranslation();

  const values = [
    {
      icon: Award,
      title: t('val_1_title'),
      description: t('val_1_desc'),
    },
    {
      icon: Target,
      title: t('val_2_title'),
      description: t('val_2_desc'),
    },
    {
      icon: Heart,
      title: t('val_3_title'),
      description: t('val_3_desc'),
    },
    {
      icon: TrendingUp,
      title: t('val_4_title'),
      description: t('val_4_desc'),
    },
  ];

  const styles = {
    hero: {
      background: 'linear-gradient(135deg, #3E6DB5, #2C5294)',
      color: '#ffffff',
      padding: '80px 16px',
      textAlign: 'center'
    },
    heroTitle: { fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '24px' },
    heroText: { fontSize: '1.25rem', color: '#f3f4f6' },
    sectionWhite: { padding: '64px 16px', backgroundColor: '#ffffff' },
    sectionGray: { padding: '64px 16px', backgroundColor: '#f9fafb' },
    sectionBlue: { padding: '64px 16px', backgroundColor: '#3E6DB5', color: '#ffffff', textAlign: 'center' },
    container: { maxWidth: '1152px', margin: '0 auto' },
    aboutGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '48px',
      alignItems: 'center'
    },
    logo: { width: '100%', maxWidth: '448px', display: 'block', margin: '0 auto' },
    kitLogo: { 
      width: '100%', 
      maxWidth: '600px', 
      display: 'block', 
      margin: '0 auto', 
      borderRadius: '16px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' 
    },
    title: { fontSize: '2rem', fontWeight: 'bold', marginBottom: '24px', color: '#1f2937' },
    textBlock: { color: '#4b5563', lineHeight: '1.6' },
    p: { marginBottom: '16px' },
    grid4: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '32px'
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '24px',
      textAlign: 'center',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    },
    iconWrapper: {
      backgroundColor: '#3E6DB5',
      width: '64px',
      height: '64px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 16px auto'
    },
    cardTitle: { fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '8px', color: '#1f2937' },
    cardText: { fontSize: '0.875rem', color: '#4b5563', margin: 0 },
    missionText: { fontSize: '1.25rem', color: '#f3f4f6', maxWidth: '896px', margin: '0 auto', lineHeight: '1.6' }
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.heroTitle}>{t('about_title')}</h1>
          <p style={styles.heroText}>{t('about_subtitle')}</p>
        </div>
      </section>

      {/* About Content */}
      <section style={styles.sectionWhite}>
        <div style={styles.container}>
          <div style={styles.aboutGrid}>
            <div>
              <img src={logo} alt="ABŞERONİK Logo" style={styles.logo} />
            </div>
            <div>
              <h2 style={styles.title}>{t('history_title')}</h2>
              <div style={styles.textBlock}>
                <p style={styles.p}>
                  {t('history_p1')}
                </p>
                <p style={styles.p}>
                  {t('history_p2')}
                </p>
                <p style={{ ...styles.p, marginBottom: 0 }}>
                  {t('history_p3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={styles.sectionGray}>
        <div style={styles.container}>
          <h2 style={{ ...styles.title, textAlign: 'center', marginBottom: '48px' }}>{t('values_title')}</h2>
          <div style={styles.grid4}>
            {values.map((value, index) => (
              <div key={index} style={styles.card}>
                <div style={styles.iconWrapper}>
                  <value.icon color="#ffffff" size={28} />
                </div>
                <h3 style={styles.cardTitle}>{value.title}</h3>
                <p style={styles.cardText}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Club Kit Section */}
      <section style={styles.sectionWhite}>
        <div style={styles.container}>
          <h2 style={{ ...styles.title, textAlign: 'center', marginBottom: '32px' }}>{t('kit_title')}</h2>
          <div>
            <img src={kitImage} alt={t('kit_title')} style={styles.kitLogo} />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section style={styles.sectionBlue}>
        <div style={styles.container}>
          <h2 style={{ ...styles.heroTitle, color: '#ffffff' }}>{t('mission_title')}</h2>
          <p style={styles.missionText}>
            {t('mission_text')}
          </p>
        </div>
      </section>
    </div>
  );
}