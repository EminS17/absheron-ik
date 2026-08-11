import React, { useState } from 'react';
import { UserCheck, ShieldCheck } from 'lucide-react';

export default function Team() {
  const players = [
    {
      number: '1',
      name: 'Kamram Axundov',
      position: 'Oyunqurucu',
      height: '185 sm',
    },
    {
      number: '27',
      name: 'Rüzgar Cəfərli',
      position: 'Hücum Müdafiəçisi',
      height: '162 sm',
    },
    {
      number: '4',
      name: 'Ülvi Əsgərov',
      position: 'Yüngül Hücumçu',
      height: '175 sm',
    },
    {
      number: '01',
      name: 'Həsənzadə Cavad',
      position: 'Hücumçu',
      height: '170 sm',
    },
    {
      number: '17',
      name: 'Emin Sadiqli',
      position: 'Mərkəz',
      height: '170 sm',
    },
    {
      number: '8',
      name: 'Aysun Səmədova',
      position: 'Oyunqurucu',
      height: '163 sm',
    },
    {
      number: '23',
      name: 'Ənəs Tahir',
      position: 'Müdafiəçi',
      height: '170 sm',
    },
    {
      number: '34',
      name: 'Rustəmov Ibrahim',
      position: 'Hücumçu',
      height: '196 sm',
    },
  ];

  const staff = [
    { name: 'Nihad Mahmudzade', position: 'Klubun Təsisçisi', isOwner: true },
    { name: 'MirHuseyin Heydərli', position: 'Baş məşqçi' },
    { name: 'Mələk Quliyeva', position: 'Məşqçi köməkçisi' },
    { name: 'Ibrahim Qələndərli', position: 'Məşqçi köməkçisi' },
    { name: 'Amil Əlizadə', position: 'Məşqçi köməkçisi' },
  ];

  const [hoveredPlayer, setHoveredPlayer] = useState(null);
  const [hoveredStaff, setHoveredStaff] = useState(null);

  const styles = {
    hero: {
      background: 'linear-gradient(135deg, #3E6DB5 0%, #2C5294 100%)',
      color: '#ffffff',
      padding: '80px 16px',
      textAlign: 'center'
    },
    heroTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      margin: '0 0 24px 0'
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      color: '#f3f4f6',
      margin: 0
    },
    section: {
      padding: '80px 16px',
      boxSizing: 'border-box'
    },
    bgWhite: {
      backgroundColor: '#ffffff'
    },
    bgGray: {
      backgroundColor: '#f9fafb'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '48px',
      color: '#1f2937'
    },
    playersGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '24px'
    },
    playerCard: (isHovered) => ({
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: isHovered 
        ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
        : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
      transition: 'all 0.3s ease'
    }),
    playerHeader: {
      background: 'linear-gradient(135deg, #3E6DB5 0%, #2C5294 100%)',
      height: '192px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    },
    playerBgNumber: {
      color: '#ffffff',
      fontSize: '4.5rem',
      fontWeight: 'bold',
      opacity: '0.3'
    },
    playerBody: {
      padding: '24px'
    },
    playerNumTag: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#3E6DB5',
      marginBottom: '4px'
    },
    playerName: {
      fontSize: '1.125rem',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: '0 0 8px 0'
    },
    playerPos: {
      fontSize: '0.875rem',
      color: '#4b5563',
      margin: '0 0 4px 0'
    },
    playerHeight: {
      fontSize: '0.875rem',
      color: '#6b7280',
      margin: 0
    },
    staffGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '24px',
      maxWidth: '1100px',
      margin: '0 auto'
    },
    staffCard: (isHovered, isOwner) => ({
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      padding: '28px 24px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      border: isOwner ? '1px solid #3E6DB5' : '1px solid #e2e8f0',
      boxShadow: isHovered 
        ? '0 12px 24px -6px rgba(62, 109, 181, 0.18)' 
        : '0 4px 12px rgba(0, 0, 0, 0.03)',
      transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }),
    staffAccentLine: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '5px',
      background: 'linear-gradient(90deg, #3E6DB5, #2C5294)'
    },
    staffAvatarWrapper: (isOwner) => ({
      width: '56px',
      height: '56px',
      borderRadius: '50%',
      backgroundColor: isOwner ? '#3E6DB5' : '#f0f4f8',
      color: isOwner ? '#ffffff' : '#3E6DB5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 16px auto',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)'
    }),
    staffName: {
      fontSize: '1.2rem',
      fontWeight: '700',
      color: '#102a43',
      margin: '0 0 6px 0'
    },
    staffPosBadge: (isOwner) => ({
      display: 'inline-block',
      padding: '6px 14px',
      borderRadius: '20px',
      fontSize: '0.85rem',
      fontWeight: '600',
      backgroundColor: isOwner ? 'rgba(62, 109, 181, 0.1)' : '#f1f5f9',
      color: isOwner ? '#3E6DB5' : '#486581',
      marginTop: '4px'
    }),
    joinSection: {
      backgroundColor: '#3E6DB5',
      color: '#ffffff',
      padding: '80px 16px',
      textAlign: 'center'
    },
    joinTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      margin: '0 0 24px 0'
    },
    joinText: {
      fontSize: '1.25rem',
      color: '#f3f4f6',
      maxWidth: '672px',
      margin: '0 auto',
      lineHeight: '1.6'
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.heroTitle}>Heyətimiz</h1>
          <p style={styles.heroSubtitle}>
            ABŞERONİK-in oyunçuları və heyəti ilə tanış olun
          </p>
        </div>
      </section>

      {/* Players Section */}
      <section style={{ ...styles.section, ...styles.bgGray }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Oyunçular</h2>
          <div style={styles.playersGrid}>
            {players.map((player, index) => (
              <div
                key={index}
                style={styles.playerCard(hoveredPlayer === index)}
                onMouseEnter={() => setHoveredPlayer(index)}
                onMouseLeave={() => setHoveredPlayer(null)}
              >
                <div style={styles.playerHeader}>
                  <div style={styles.playerBgNumber}>{player.number}</div>
                </div>
                <div style={styles.playerBody}>
                  <div style={styles.playerNumTag}>#{player.number}</div>
                  <h3 style={styles.playerName}>{player.name}</h3>
                  <p style={styles.playerPos}>{player.position}</p>
                  <p style={styles.playerHeight}>{player.height}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section style={{ ...styles.section, ...styles.bgWhite }}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Personal</h2>
          <div style={styles.staffGrid}>
            {staff.map((member, index) => (
              <div
                key={index}
                style={styles.staffCard(hoveredStaff === index, member.isOwner)}
                onMouseEnter={() => setHoveredStaff(index)}
                onMouseLeave={() => setHoveredStaff(null)}
              >
                <div style={styles.staffAccentLine} />
                <div style={styles.staffAvatarWrapper(member.isOwner)}>
                  {member.isOwner ? <ShieldCheck size={28} /> : <UserCheck size={28} />}
                </div>
                <h3 style={styles.staffName}>{member.name}</h3>
                <span style={styles.staffPosBadge(member.isOwner)}>{member.position}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section style={styles.joinSection}>
        <div style={styles.container}>
          <h2 style={styles.joinTitle}>Bizim missiamız</h2>
          <p style={styles.joinText}>
            Biz həmişə istedadlı oyunçular və mütəxəssislər axtarırıq.
            Əlavə məlumat üçün bizimlə əlaqə saxlayın.
          </p>
        </div>
      </section>
    </div>
  );
}