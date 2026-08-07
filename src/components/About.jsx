import React from 'react';
import { Award, Target, Heart, TrendingUp } from 'lucide-react';
import logo from '/src/assets/logo.png'; 
import kitImage from '/src/assets/kit.jpg'; // Путь к изображению формы

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
          <h1 style={styles.heroTitle}>Klub haqqında</h1>
          <p style={styles.heroText}>«ABŞERONİK» idman klubunun tarixi və dəyərləri</p>
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

      {/* Club Kit Section */}
      <section style={styles.sectionWhite}>
        <div style={styles.container}>
          <h2 style={{ ...styles.title, textAlign: 'center', marginBottom: '32px' }}>Klubumuzun forması</h2>
          <div>
            <img src={kitImage} alt="Klubumuzun forması" style={styles.kitLogo} />
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