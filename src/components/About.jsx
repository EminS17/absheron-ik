import React from 'react';
import { Award, Target, Heart, TrendingUp } from 'lucide-react';
import logo from '/src/assets/logo.png'; 

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Peşəkarlıq',
      description: 'Etdiyimiz hər şeydə ən yüksək standartlara can atırıq',
    },
    {
      icon: Target,
      title: 'Məqsədyönlülük',
      description: 'Ambisiyalı məqsədlər qoyuruq və onlara nail oluruq',
    },
    {
      icon: Heart,
      title: 'Komanda ruhu',
      description: 'Birlikdə daha güclüyük – əsas prinsipimiz budur',
    },
    {
      icon: TrendingUp,
      title: 'İnkişaf',
      description: 'Davamlı təkmilləşir, regionda basketbol və futbolu inkişaf etdiririk',
    },
  ];

  const achievements = [
    { year: '2025', title: 'Azərbaycan Superliqasının çempionu' },
    { year: '2024', title: 'Ölkə kubokunun qalibi' },
    { year: '2023', title: 'Çempionatın pley-off mərhələsinə vəsiqə' },
    { year: '2022', title: 'Klubun təsis edilməsi' },
  ];

  // Объект со стилями
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
    timelineContainer: { maxWidth: '768px', margin: '0 auto', position: 'relative' },
    timelineLine: { position: 'absolute', left: '32px', top: 0, bottom: 0, width: '2px', backgroundColor: '#3E6DB5' },
    timelineItem: { position: 'relative', paddingLeft: '80px', paddingBottom: '48px' },
    timelineDot: {
      position: 'absolute',
      left: '20px',
      top: '4px',
      width: '28px',
      height: '28px',
      backgroundColor: '#3E6DB5',
      borderRadius: '50%',
      border: '4px solid #ffffff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      zIndex: 2
    },
    timelineContent: { backgroundColor: '#f9fafb', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' },
    year: { fontSize: '1.5rem', fontWeight: 'bold', color: '#3E6DB5', marginBottom: '8px' },
    achTitle: { fontSize: '1.125rem', fontWeight: '600', color: '#1f2937' },
    missionText: { fontSize: '1.25rem', color: '#f3f4f6', maxWidth: '896px', margin: '0 auto', lineHeight: '1.6' }
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.heroTitle}>Klub haqqında</h1>
          <p style={styles.heroText}>«ABŞERONİK» idman klubunun tarixi, dəyərləri və nailiyyətləri</p>
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
              <h2 style={styles.title}>Bizim tariximiz</h2>
              <div style={styles.textBlock}>
                <p style={styles.p}>
                  «ABŞERONİK» idman klubu 2022-ci ildə Azərbaycanın Abşeron rayonunda 
                  təsis edilib. Klubumuz ilk olaraq yalnız basketbol üzrə fəaliyyətə başlayaraq 
                  regionda peşəkar basketbolu inkişaf etdirməyi qarşısına məqsəd qoymuşdu.
                </p>
                <p style={styles.p}>
                  Qısa müddət ərzində klubumuz ölkə yarışlarında dinamik və baxımlı oyun 
                  nümayiş etdirərək ən güclü komandalar arasında yer almağı bacardı. Biz komandamızla 
                  fəxr edir və oyun keyfiyyətini daha da yüksəltmək üçün davamlı olaraq çalışırıq.
                </p>
                <p style={{ ...styles.p, marginBottom: 0 }}>
                  Bu ildən etibarən isə klubumuz daha da böyüyərək futbol fəaliyyətinə də start verdi – artıq 
                  klubumuzda futbol məşqləri də keçirilir! «ABŞERONİK» – yalnız bir idman klubu deyil, 
                  bu həm də Azərbaycanda idmanın inkişaf mərkəzidir və burada gələcəyin ulduzları yetişdirilir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={styles.sectionGray}>
        <div style={styles.container}>
          <h2 style={{ ...styles.title, textAlign: 'center', marginBottom: '48px' }}>Bizim dəyərlərimiz</h2>
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

      {/* Achievements Section */}
      <section style={styles.sectionWhite}>
        <div style={styles.container}>
          <h2 style={{ ...styles.title, textAlign: 'center', marginBottom: '48px' }}>Uğurlarımız</h2>
          <div style={styles.timelineContainer}>
            <div style={styles.timelineLine}></div>
            
            {achievements.map((achievement, index) => (
              <div key={index} style={{ ...styles.timelineItem, paddingBottom: index === achievements.length - 1 ? 0 : '48px' }}>
                <div style={styles.timelineDot}></div>
                <div style={styles.timelineContent}>
                  <div style={styles.year}>{achievement.year}</div>
                  <div style={styles.achTitle}>{achievement.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section style={styles.sectionBlue}>
        <div style={styles.container}>
          <h2 style={{ ...styles.heroTitle, color: '#ffffff' }}>Bizim missiyamız</h2>
          <p style={styles.missionText}>
            Azərbaycanda basketbol və futbolu inkişaf etdirmək, istedadlı idmançılar 
            yetişdirmək və azarkeşlərə baxımlı, peşəkar oyunla qələbə sevinci 
            bəxş etməkdir. Biz gənc nəsil üçün örnək olmağa və gəncləri idmanla 
            məşğul olmağa ruhlandırmağa çalışırıq.
          </p>
        </div>
      </section>
    </div>
  );
}