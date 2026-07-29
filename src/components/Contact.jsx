import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Встроенная SVG-иконка Facebook
const FacebookIcon = ({ size = 28 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

// Встроенная SVG-иконка Instagram
const InstagramIcon = ({ size = 28 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Contact() {
  // Обновленная прямая ссылка на координаты из скриншота
  const googleMapsUrl = "https://www.google.com/maps?q=40.457520,49.720314";

  // Состояния для полей формы
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Состояние статуса отправки письма
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null
  });

  // Обработчик изменения текста в инпутах
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Функция отправки письма через EmailJS
  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    const SERVICE_ID = 'service_8pv0pla'; 
    const TEMPLATE_ID = 'template_fun69e5'; 
    const PUBLIC_KEY = 'Zy9yFKgBZ1l85qFKX';  

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setStatus({
          loading: false,
          success: 'Mesajınız uğurla göndərildi!',
          error: null
        });
        setFormData({ name: '', surname: '', email: '', phone: '', subject: '', message: '' });
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        setStatus({
          loading: false,
          success: null,
          error: 'Xəta baş verdi. Yenidən cəhd edin.'
        });
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'absheronik@gmail.com',
      link: 'mailto:absheronik@gmail.com',
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: '+994 12 XXX XX XX',
      link: 'tel:+99412XXXXXXX',
    },
    {
      icon: MapPin,
      title: 'Ünvan',
      content: 'Xırdalan şəhəri, AAAF Park yaxınlığı', // Обновленный текст адреса
      link: googleMapsUrl,
    },
    {
      icon: Clock,
      title: 'İş saatları',
      content: 'B.e.-C.: 08:00 – 17:00',
      link: null,
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
    container: { maxWidth: '1152px', margin: '0 auto' },
    grid4: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '24px'
    },
    card: {
      backgroundColor: '#f9fafb',
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
    cardTitle: { fontWeight: 'bold', marginBottom: '8px', color: '#1f2937' },
    cardLink: { fontSize: '0.875rem', color: '#4b5563', textDecoration: 'none' },
    formWrapper: { maxWidth: '768px', margin: '0 auto' },
    formTitle: { fontSize: '2rem', fontWeight: 'bold', marginBottom: '16px', textAlign: 'center', color: '#1f2937' },
    formSubtitle: { color: '#4b5563', marginBottom: '48px', textAlign: 'center' },
    form: { backgroundColor: '#ffffff', borderRadius: '12px', padding: '32px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' },
    grid2: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '24px' },
    label: { display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '8px' },
    input: { width: '100%', padding: '12px 16px', border: '1px solid #d1d5db', borderRadius: '8px', boxSizing: 'border-box' },
    formGroup: { marginBottom: '24px' },
    button: {
      width: '100%',
      backgroundColor: '#3E6DB5',
      color: '#ffffff',
      padding: '16px',
      borderRadius: '8px',
      fontWeight: '500',
      border: 'none',
      cursor: status.loading ? 'not-allowed' : 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      fontSize: '1rem',
      opacity: status.loading ? 0.7 : 1
    },
    socialContainer: { display: 'flex', justifyContent: 'center', gap: '24px' },
    socialCircle: {
      backgroundColor: '#3E6DB5',
      color: '#ffffff',
      width: '64px',
      height: '64px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none'
    },
    mapWrapper: {
      height: '450px',
      width: '100%',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      position: 'relative'
    },
    iframe: {
      border: 0,
      width: '100%',
      height: '100%'
    },
    statusMessage: {
      padding: '12px',
      borderRadius: '8px',
      marginBottom: '24px',
      textAlign: 'center',
      fontWeight: '500'
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.heroTitle}>Əlaqə</h1>
          <p style={styles.heroText}>Ətraflı məlumat almaq üçün bizimlə əlaqə saxlayın</p>
        </div>
      </section>

      {/* Contact Info */}
      <section style={styles.sectionWhite}>
        <div style={styles.container}>
          <div style={styles.grid4}>
            {contactInfo.map((item, index) => (
              <div key={index} style={styles.card}>
                <div style={styles.iconWrapper}>
                  <item.icon color="#ffffff" size={28} />
                </div>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                {item.link ? (
                  <a 
                    href={item.link} 
                    target={item.link.startsWith('http') ? "_blank" : undefined}
                    rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                    style={{ ...styles.cardLink, color: item.link.startsWith('http') ? '#3E6DB5' : '#4b5563', fontWeight: item.link.startsWith('http') ? '500' : 'normal' }}
                  >
                    {item.content}
                  </a>
                ) : (
                  <p style={{ ...styles.cardLink, margin: 0 }}>{item.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section style={styles.sectionGray}>
        <div style={styles.container}>
          <div style={styles.formWrapper}>
            <h2 style={styles.formTitle}>Bizə mesaj göndərin</h2>
            <p style={styles.formSubtitle}>Aşağıdakı formanı doldurun, biz tezliklə sizinlə əlaqə saxlayacağıq</p>
            
            <form style={styles.form} onSubmit={sendEmail}>
              
              {/* Вывод статусных сообщений */}
              {status.success && (
                <div style={{ ...styles.statusMessage, backgroundColor: '#d1e7dd', color: '#0f5132' }}>
                  {status.success}
                </div>
              )}
              {status.error && (
                <div style={{ ...styles.statusMessage, backgroundColor: '#f8d7da', color: '#842029' }}>
                  {status.error}
                </div>
              )}

              <div style={styles.grid2}>
                <div>
                  <label style={styles.label}>Ad</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={styles.input} 
                    placeholder="Adınız" 
                    required 
                  />
                </div>
                <div>
                  <label style={styles.label}>Soyad</label>
                  <input 
                    type="text" 
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    style={styles.input} 
                    placeholder="Soyadınız" 
                    required 
                  />
                </div>
              </div>
              
              <div style={styles.grid2}>
                <div>
                  <label style={styles.label}>Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input} 
                    placeholder="your@email.com" 
                    required 
                  />
                </div>
                <div>
                  <label style={styles.label}>Telefon</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={styles.input} 
                    placeholder="+994 XX XXX XX XX" 
                  />
                </div>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Mövzu</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={styles.input} 
                  placeholder="Mesajın mövzusu" 
                  required 
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Mesaj</label>
                <textarea 
                  rows={6} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={{ ...styles.input, resize: 'none' }} 
                  placeholder="Mesajınız..." 
                  required
                ></textarea>
              </div>
              
              <button type="submit" style={styles.button} disabled={status.loading}>
                <Send size={20} />
                {status.loading ? 'Göndərilir...' : 'Mesajı göndər'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section style={styles.sectionWhite}>
        <div style={{ ...styles.container, textAlign: 'center' }}>
          <h2 style={{ ...styles.formTitle, marginBottom: '24px' }}>Sosial şəbəkələrdə bizi izləyin</h2>
          <p style={{ ...styles.formSubtitle, marginBottom: '32px' }}>Klubun bütün xəbərləri, nəticələri və hadisələrindən xəbərdar olun</p>
          <div style={styles.socialContainer}>
            <a href="#" style={styles.socialCircle}><FacebookIcon size={28} /></a>
            
            <a 
              href="https://www.instagram.com/abseronik/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.socialCircle}
            >
              <InstagramIcon size={28} />
            </a>
            
            <a href="#" style={styles.socialCircle}><Send size={28} /></a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={styles.sectionGray}>
        <div style={styles.container}>
          <h2 style={{ ...styles.formTitle, marginBottom: '48px' }}>Bizi necə tapmaq olar</h2>
          <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none' }}>
              <div style={styles.mapWrapper}>
                {/* Обновленный iframe с нужными координатами */}
                <iframe
                  title="Xırdalan Location"
                  src="https://maps.google.com/maps?q=40.457520,49.720314&hl=az&z=16&output=embed"
                  style={{ ...styles.iframe, pointerEvents: 'none' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}