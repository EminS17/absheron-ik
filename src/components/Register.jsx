import React, { useState } from 'react';
import { User, Phone, School, Award, Ruler, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

// Твои рабочие ключи Supabase
const SUPABASE_URL = 'https://xhsbsvzwiwdrythatmev.supabase.co'; 
const SUPABASE_ANON_KEY = 'sb_publishable_Z30oZ_ytCvKKxBQiMiNRwzA_iGDC0wg0b93qWRE5Aps';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default function Register() {
  const [formData, setFormData] = useState({
    student_name: '',
    student_surname: '',
    father_name: '',
    mother_name: '',
    student_height: '',
    student_weight: '',
    school: '',
    grade: '',
    mother_phone: '',
    father_phone: '',
    father_height: '',
    mother_height: '',
    student_phone: '' // это поле необязательное
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const { error } = await supabase
        .from('students')
        .insert([formData]);

      if (error) throw error;

      setStatus({
        loading: false,
        success: 'Qeydiyyat uğurla tamamlandı! Şagirdin məlumatları bazaya əlavə olundu.',
        error: null
      });

      // Очистка формы после успеха
      setFormData({
        student_name: '',
        student_surname: '',
        father_name: '',
        mother_name: '',
        student_height: '',
        student_weight: '',
        school: '',
        grade: '',
        mother_phone: '',
        father_phone: '',
        father_height: '',
        mother_height: '',
        student_phone: ''
      });

    } catch (err) {
      console.error('Database Error:', err);
      setStatus({
        loading: false,
        success: null,
        error: 'Xəta baş verdi. Yenidən cəhd edin.'
      });
    }
  };

  const styles = {
    page: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0f4f8, #d9e2ec)',
      padding: '24px 12px', // Уменьшенные отступы для мобильных устройств
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      boxSizing: 'border-box'
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
      width: '100%',
      maxWidth: '650px',
      padding: '24px 16px', // Адаптивные внутренние поля (на мобилках будет компактно)
      boxSizing: 'border-box'
    },
    title: {
      fontSize: '1.5rem', // Слегка уменьшили для узких экранов
      fontWeight: 'bold',
      color: '#102a43',
      textAlign: 'center',
      marginBottom: '8px'
    },
    subtitle: {
      fontSize: '0.9rem',
      color: '#627d98',
      textAlign: 'center',
      marginBottom: '24px',
      lineHeight: '1.4'
    },
    sectionTitle: {
      fontSize: '0.95rem',
      fontWeight: '600',
      color: '#3E6DB5',
      marginBottom: '16px',
      borderBottom: '2px solid #e4e7eb',
      paddingBottom: '6px',
      marginTop: '24px'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    },
    label: {
      fontSize: '0.85rem',
      fontWeight: '500',
      color: '#334e68'
    },
    inputWrapper: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    },
    icon: {
      position: 'absolute',
      left: '12px',
      color: '#9fb3c8'
    },
    input: {
      width: '100%',
      padding: '12px 12px 12px 40px',
      border: '1px solid #bcccdc',
      borderRadius: '8px',
      fontSize: '0.95rem',
      color: '#102a43',
      boxSizing: 'border-box',
      outline: 'none',
      transition: 'border-color 0.2s',
      WebkitAppearance: 'none' // Убирает дефолтные тени полей в iOS Safari
    },
    button: {
      width: '100%',
      backgroundColor: '#3E6DB5',
      color: '#ffffff',
      padding: '14px',
      borderRadius: '8px',
      fontWeight: '600',
      fontSize: '1rem',
      border: 'none',
      cursor: status.loading ? 'not-allowed' : 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      marginTop: '24px',
      opacity: status.loading ? 0.7 : 1,
      boxSizing: 'border-box'
    },
    statusBox: {
      padding: '12px 16px',
      borderRadius: '8px',
      marginBottom: '24px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '0.9rem',
      fontWeight: '500'
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Şagird Qeydiyyatı</h2>
        <p style={styles.subtitle}>Klubumuza üzv olmaq üçün aşağıdakı xanaları doldurun</p>

        {status.success && (
          <div style={{ ...styles.statusBox, backgroundColor: '#d1e7dd', color: '#0f5132' }}>
            <CheckCircle2 size={20} style={{ flexShrink: 0 }} /> {status.success}
          </div>
        )}
        {status.error && (
          <div style={{ ...styles.statusBox, backgroundColor: '#f8d7da', color: '#842029' }}>
            <AlertCircle size={20} style={{ flexShrink: 0 }} /> {status.error}
          </div>
        )}

        <form onSubmit={handleRegister}>
          
          {/* Блок 1: Данные ученика */}
          <div style={{ ...styles.sectionTitle, marginTop: 0 }}>Şagirdin məlumatları</div>
          
          <div className="form-grid">
            <div style={styles.formGroup}>
              <label style={styles.label}>Adı</label>
              <div style={styles.inputWrapper}>
                <User size={18} style={styles.icon} />
                <input type="text" name="student_name" value={formData.student_name} onChange={handleChange} style={styles.input} placeholder="Şagirdin adı" required />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Soyadı</label>
              <div style={styles.inputWrapper}>
                <User size={18} style={styles.icon} />
                <input type="text" name="student_surname" value={formData.student_surname} onChange={handleChange} style={styles.input} placeholder="Şagirdin soyadı" required />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Boyu (sm)</label>
              <div style={styles.inputWrapper}>
                <Ruler size={18} style={styles.icon} />
                <input type="number" name="student_height" value={formData.student_height} onChange={handleChange} style={styles.input} placeholder="Məs: 165" required />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Çəkisi (kq)</label>
              <div style={styles.inputWrapper}>
                <Award size={18} style={styles.icon} />
                <input type="number" name="student_weight" value={formData.student_weight} onChange={handleChange} style={styles.input} placeholder="Məs: 55" required />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Təhsil aldığı məktəb</label>
              <div style={styles.inputWrapper}>
                <School size={18} style={styles.icon} />
                <input type="text" name="school" value={formData.school} onChange={handleChange} style={styles.input} placeholder="Məs: 5 nömrəli məktəb" required />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Sinfi</label>
              <div style={styles.inputWrapper}>
                <School size={18} style={styles.icon} />
                <input type="text" name="grade" value={formData.grade} onChange={handleChange} style={styles.input} placeholder="Məs: 7B" required />
              </div>
            </div>
            <div style={{ ...styles.formGroup, gridColumn: '1 / -1' }} className="full-width">
              <label style={styles.label}>Şagirdin öz telefonu <span style={{color: '#9fb3c8', fontWeight: 'normal'}}>(vacib deyil)</span></label>
              <div style={styles.inputWrapper}>
                <Phone size={18} style={styles.icon} />
                <input type="tel" name="student_phone" value={formData.student_phone} onChange={handleChange} style={styles.input} placeholder="+994 XX XXX XX XX" />
              </div>
            </div>
          </div>

          {/* Блок 2: Данные родителей */}
          <div style={styles.sectionTitle}>Valideynlərin məlumatları</div>
          
          <div className="form-grid">
            <div style={styles.formGroup}>
              <label style={styles.label}>Atasının adı</label>
              <div style={styles.inputWrapper}>
                <User size={18} style={styles.icon} />
                <input type="text" name="father_name" value={formData.father_name} onChange={handleChange} style={styles.input} placeholder="Atasının adı" required />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Anasının adı</label>
              <div style={styles.inputWrapper}>
                <User size={18} style={styles.icon} />
                <input type="text" name="mother_name" value={formData.mother_name} onChange={handleChange} style={styles.input} placeholder="Anasının adı" required />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Atasının telefonu</label>
              <div style={styles.inputWrapper}>
                <Phone size={18} style={styles.icon} />
                <input type="tel" name="father_phone" value={formData.father_phone} onChange={handleChange} style={styles.input} placeholder="+994 XX XXX XX XX" required />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Anasının telefonu</label>
              <div style={styles.inputWrapper}>
                <Phone size={18} style={styles.icon} />
                <input type="tel" name="mother_phone" value={formData.mother_phone} onChange={handleChange} style={styles.input} placeholder="+994 XX XXX XX XX" required />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Atasının boyu (sm)</label>
              <div style={styles.inputWrapper}>
                <Ruler size={18} style={styles.icon} />
                <input type="number" name="father_height" value={formData.father_height} onChange={handleChange} style={styles.input} placeholder="Məs: 180" required />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Anasının boyu (sm)</label>
              <div style={styles.inputWrapper}>
                <Ruler size={18} style={styles.icon} />
                <input type="number" name="mother_height" value={formData.mother_height} onChange={handleChange} style={styles.input} placeholder="Məs: 168" required />
              </div>
            </div>
          </div>

          <button type="submit" style={styles.button} disabled={status.loading}>
            {status.loading ? 'Göndərilir...' : 'Qeydiyyatdan keçmək'}
            <ArrowRight size={18} />
          </button>
        </form>
      </div>

      {/* Умные адаптивные стили для разных экранов */}
      <style>{`
        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        @media (max-width: 580px) {
          .form-grid {
            grid-template-columns: 1fr; /* Поля встают друг под друга */
            gap: 12px;
          }
          .full-width {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </div>
  );
}