import React, { useState } from 'react';
import { User, Phone, School, Award, Ruler, CheckCircle2, AlertCircle, ArrowRight, MapPin, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Register() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    student_name: '',
    student_surname: '',
    father_name: '',
    mother_name: '',
    student_height: '',
    student_weight: '',
    school: '',
    grade: '',
    address: '',
    mother_phone: '',
    father_phone: '',
    father_height: '',
    mother_height: '',
    student_phone: ''
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

    const payload = {
      firstName: formData.student_name,
      lastName: formData.student_surname,
      height: formData.student_height ? parseFloat(formData.student_height) : null,
      weight: formData.student_weight ? parseFloat(formData.student_weight) : null,
      school: formData.school,
      grade: formData.grade,
      address: formData.address,
      studentPhone: formData.student_phone,
      fatherName: formData.father_name,
      motherName: formData.mother_name,
      fatherPhone: formData.father_phone,
      motherPhone: formData.mother_phone,
      fatherHeight: formData.father_height ? parseFloat(formData.father_height) : null,
      motherHeight: formData.mother_height ? parseFloat(formData.mother_height) : null
    };

    try {
      const response = await fetch('https://absheron-ik-back.onrender.com/api/students/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.status === 429) {
        setStatus({
          loading: false,
          success: null,
          error: t('reg_rate_limit')
        });
        return;
      }

      if (!response.ok) {
        throw new Error('Server error');
      }

      setStatus({
        loading: false,
        success: t('reg_success'),
        error: null
      });

      setFormData({
        student_name: '',
        student_surname: '',
        father_name: '',
        mother_name: '',
        student_height: '',
        student_weight: '',
        school: '',
        grade: '',
        address: '',
        mother_phone: '',
        father_phone: '',
        father_height: '',
        mother_height: '',
        student_phone: ''
      });

    } catch (err) {
      console.error('Backend Error:', err);
      setStatus({
        loading: false,
        success: null,
        error: t('msg_error')
      });
    }
  };

  const styles = {
    page: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0f4f8, #d9e2ec)',
      padding: '24px 12px',
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
      padding: '24px 16px',
      boxSizing: 'border-box'
    },
    title: {
      fontSize: '1.5rem',
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
      WebkitAppearance: 'none'
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
    },
    loadingNotice: {
      marginTop: '12px',
      fontSize: '0.85rem',
      color: '#627d98',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px',
      fontWeight: '500'
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>{t('reg_title')}</h2>
        <p style={styles.subtitle}>{t('reg_subtitle')}</p>

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
          
          {/* Блок 1: Данные студента */}
          <div style={{ ...styles.sectionTitle, marginTop: 0 }}>{t('reg_student_section')}</div>
          
          <div className="form-grid">
            <div style={styles.formGroup}>
              <label style={styles.label}>{t('reg_name')}</label>
              <div style={styles.inputWrapper}>
                <User size={18} style={styles.icon} />
                <input type="text" name="student_name" value={formData.student_name} onChange={handleChange} style={styles.input} placeholder={t('reg_name')} required />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>{t('reg_surname')}</label>
              <div style={styles.inputWrapper}>
                <User size={18} style={styles.icon} />
                <input type="text" name="student_surname" value={formData.student_surname} onChange={handleChange} style={styles.input} placeholder={t('reg_surname')} required />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>{t('reg_height')}</label>
              <div style={styles.inputWrapper}>
                <Ruler size={18} style={styles.icon} />
                <input type="number" name="student_height" value={formData.student_height} onChange={handleChange} style={styles.input} placeholder="165" required />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>{t('reg_weight')}</label>
              <div style={styles.inputWrapper}>
                <Award size={18} style={styles.icon} />
                <input type="number" name="student_weight" value={formData.student_weight} onChange={handleChange} style={styles.input} placeholder="55" required />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>{t('reg_school')}</label>
              <div style={styles.inputWrapper}>
                <School size={18} style={styles.icon} />
                <input type="text" name="school" value={formData.school} onChange={handleChange} style={styles.input} placeholder={t('reg_school')} required />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>{t('reg_grade')}</label>
              <div style={styles.inputWrapper}>
                <School size={18} style={styles.icon} />
                <input type="text" name="grade" value={formData.grade} onChange={handleChange} style={styles.input} placeholder="7B" required />
              </div>
            </div>

            {/* Адрес */}
            <div style={{ ...styles.formGroup, gridColumn: '1 / -1' }} className="full-width">
              <label style={styles.label}>{t('reg_address')}</label>
              <div style={styles.inputWrapper}>
                <MapPin size={18} style={styles.icon} />
                <input type="text" name="address" value={formData.address} onChange={handleChange} style={styles.input} placeholder={t('reg_address')} required />
              </div>
            </div>

            <div style={{ ...styles.formGroup, gridColumn: '1 / -1' }} className="full-width">
              <label style={styles.label}>{t('reg_student_phone')} <span style={{color: '#9fb3c8', fontWeight: 'normal'}}>{t('reg_optional')}</span></label>
              <div style={styles.inputWrapper}>
                <Phone size={18} style={styles.icon} />
                <input type="tel" name="student_phone" value={formData.student_phone} onChange={handleChange} style={styles.input} placeholder="+994 XX XXX XX XX" />
              </div>
            </div>
          </div>

          {/* Блок 2: Данные родителей */}
          <div style={styles.sectionTitle}>{t('reg_parents_section')}</div>
          
          <div className="form-grid">
            <div style={styles.formGroup}>
              <label style={styles.label}>{t('reg_father_name')}</label>
              <div style={styles.inputWrapper}>
                <User size={18} style={styles.icon} />
                <input type="text" name="father_name" value={formData.father_name} onChange={handleChange} style={styles.input} placeholder={t('reg_father_name')} required />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>{t('reg_mother_name')}</label>
              <div style={styles.inputWrapper}>
                <User size={18} style={styles.icon} />
                <input type="text" name="mother_name" value={formData.mother_name} onChange={handleChange} style={styles.input} placeholder={t('reg_mother_name')} required />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>{t('reg_father_height')}</label>
              <div style={styles.inputWrapper}>
                <Ruler size={18} style={styles.icon} />
                <input type="number" name="father_height" value={formData.father_height} onChange={handleChange} style={styles.input} placeholder="180" required />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>{t('reg_mother_height')}</label>
              <div style={styles.inputWrapper}>
                <Ruler size={18} style={styles.icon} />
                <input type="number" name="mother_height" value={formData.mother_height} onChange={handleChange} style={styles.input} placeholder="168" required />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>{t('reg_father_phone')}</label>
              <div style={styles.inputWrapper}>
                <Phone size={18} style={styles.icon} />
                <input type="tel" name="father_phone" value={formData.father_phone} onChange={handleChange} style={styles.input} placeholder="+994 XX XXX XX XX" required />
              </div>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>{t('reg_mother_phone')}</label>
              <div style={styles.inputWrapper}>
                <Phone size={18} style={styles.icon} />
                <input type="tel" name="mother_phone" value={formData.mother_phone} onChange={handleChange} style={styles.input} placeholder="+994 XX XXX XX XX" required />
              </div>
            </div>
          </div>

          <button type="submit" style={styles.button} disabled={status.loading}>
            {status.loading ? t('reg_btn_submitting') : t('reg_btn_submit')}
            <ArrowRight size={18} />
          </button>

          {status.loading && (
            <div style={styles.loadingNotice}>
              <Loader2 size={16} className="spin-icon" />
              <span>{t('reg_loading_notice')}</span>
            </div>
          )}
        </form>
      </div>

      <style>{`
        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .spin-icon {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 580px) {
          .form-grid {
            grid-template-columns: 1fr;
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