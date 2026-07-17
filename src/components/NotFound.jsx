import React from 'react';
import { Link } from 'react-router';
import { Home } from 'lucide-react';

export default function NotFound() {
  // JavaScript встроенные стили
  const styles = {
    wrapper: {
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f9fafb',
      padding: '0 16px',
      boxSizing: 'border-box'
    },
    container: {
      textAlign: 'center',
      maxWidth: '448px',
      margin: '0 auto'
    },
    code: {
      fontSize: '6rem',
      fontWeight: 'bold',
      color: '#3E6DB5',
      margin: '0 0 16px 0',
      lineHeight: '1'
    },
    title: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: '0 0 16px 0'
    },
    text: {
      color: '#4b5563',
      fontSize: '1rem',
      lineHeight: '1.5',
      marginBottom: '32px',
      marginHeight: 'auto'
    },
    button: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      backgroundColor: '#3E6DB5',
      color: '#ffffff',
      padding: '12px 32px',
      borderRadius: '8px',
      fontWeight: '500',
      textDecoration: 'none',
      transition: 'background-color 0.2s ease',
      border: 'none',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.code}>404</h1>
        <h2 style={styles.title}>Səhifə tapılmadı</h2>
        <p style={styles.text}>
          Təəssüf ki, axtardığınız səhifə mövcud deyil və ya köçürülüb.
        </p>
        <Link 
          to="/" 
          style={styles.button}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2C5294'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3E6DB5'}
        >
          <Home size={20} />
          Ana səhifəyə qayıt
        </Link>
      </div>
    </div>
  );
}