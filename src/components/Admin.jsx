import React, { useEffect, useState } from 'react';
import { Trash2, RefreshCw, User, Phone, MapPin, Building, Ruler, Weight, Lock, Users, Eye } from 'lucide-react';

const ADMIN_PASSWORD = "absheron2026"; 

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const savedAuth = localStorage.getItem('admin_authenticated');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
      fetchStudents();
    }
    fetchVisits();
  }, []);

  // 🚀 Получение реального количества просмотров из CounterAPI.dev
  const fetchVisits = async () => {
    try {
      const response = await fetch('https://counterapi.dev/api/absheron-ik-site/v1/visits');
      const data = await response.json();
      setVisitCount(data.count || 0);
    } catch (error) {
      console.error('Счетчик недоступен:', error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('admin_authenticated', 'true');
      fetchStudents();
    } else {
      alert('Şifrə səhvdir! (Неверный пароль)');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_authenticated');
    setIsAuthenticated(false);
  };

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://absheron-ik-back.onrender.com/api/students');
      if (!response.ok) throw new Error('Məlumatları almaq mümkün olmadı');
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error('Xəta baş verdi:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, name) => {
    const confirmDelete = window.confirm(`${name} adlı şagirdi silməyə əminsiniz?`);
    if (!confirmDelete) return;

    try {
      const response = await fetch(`https://absheron-ik-back.onrender.com/api/students/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Şagird uğurla silindi!');
        setStudents(prev => prev.filter(student => student.id !== id));
      } else {
        alert(`Silinmə xətası (Status: ${response.status})`);
      }
    } catch (error) {
      console.error('Xəta:', error);
      alert('Serverlə əlaqə kəsildi.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '80vh', 
        padding: '20px', 
        fontFamily: 'system-ui, -apple-system, sans-serif' 
      }}>
        <form onSubmit={handleLogin} style={{ 
          backgroundColor: '#ffffff', 
          padding: '30px', 
          borderRadius: '16px', 
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)', 
          width: '100%', 
          maxWidth: '360px', 
          textAlign: 'center',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ 
            backgroundColor: '#e0f2fe', 
            width: '50px', 
            height: '50px', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            margin: '0 auto 16px auto' 
          }}>
            <Lock size={24} color="#0284c7" />
          </div>
          
          <h3 style={{ margin: '0 0 8px 0', color: '#0f172a' }}>Məşqçi Girişi</h3>
          <p style={{ margin: '0 0 20px 0', fontSize: '0.85rem', color: '#64748b' }}>
            Davam etmək üçün parolu daxil edin
          </p>

          <input 
            type="password" 
            placeholder="Parol" 
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '12px', 
              borderRadius: '8px', 
              border: '1px solid #cbd5e1', 
              marginBottom: '16px', 
              fontSize: '1rem',
              boxSizing: 'border-box'
            }} 
            required
          />

          <button 
            type="submit" 
            style={{ 
              width: '100%', 
              padding: '12px', 
              borderRadius: '8px', 
              border: 'none', 
              backgroundColor: '#0284c7', 
              color: 'white', 
              fontWeight: '600', 
              fontSize: '1rem', 
              cursor: 'pointer' 
            }}>
            Daxil ol
          </button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ padding: '16px', maxWidth: '900px', margin: '0 auto', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Шапка */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexWrap: 'wrap',
        gap: '12px',
        marginBottom: '20px' 
      }}>
        <h2 style={{ color: '#102a43', margin: 0, fontSize: '1.4rem' }}>
          Məşqçi Paneli ({students.length})
        </h2>
        
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {/* Виджет счетчика просмотров */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: '#f1f5f9',
            padding: '8px 12px',
            borderRadius: '8px',
            border: '1px solid #cbd5e1',
            fontSize: '0.85rem',
            fontWeight: '600',
            color: '#0f172a'
          }}>
            <Eye size={16} color="#0284c7" />
            <span>Baxışlar: {visitCount}</span>
          </div>

          <button 
            onClick={() => { fetchStudents(); fetchVisits(); }} 
            style={{
              padding: '8px 14px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: '#0284c7',
              color: 'white',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.85rem'
            }}>
            <RefreshCw size={15} /> Yenilə
          </button>

          <button 
            onClick={handleLogout} 
            style={{
              padding: '8px 14px',
              borderRadius: '8px',
              border: '1px solid #cbd5e1',
              backgroundColor: '#f8fafc',
              color: '#475569',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '0.85rem'
            }}>
            Çıxış
          </button>
        </div>
      </div>

      {loading ? (
        <p style={{ textAlign: 'center', color: '#64748b' }}>Siyahı yüklənir...</p>
      ) : students.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#64748b' }}>Hələ ki, heç bir şagird qeydiyyatdan keçməyib.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {students.map((s) => {
            const sClass = s.studentClass || s.class || s.sinif;
            const sHeight = s.height || s.boy;
            const sWeight = s.weight || s.ceki;
            const sSchool = s.school || s.mektəb || s.mekteb;
            const sAddress = s.address || s.unvan;
            const sPhone = s.phone || s.studentPhone || s.telefon;

            const fName = s.fatherName || s.fatherFirstName;
            const fPhone = s.fatherPhone;
            const fHeight = s.fatherHeight;

            const mName = s.motherName || s.motherFirstName;
            const mPhone = s.motherPhone;
            const mHeight = s.motherHeight;

            return (
              <div 
                key={s.id} 
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  padding: '16px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
                }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start', 
                  gap: '10px',
                  marginBottom: '12px', 
                  borderBottom: '1px solid #f1f5f9', 
                  paddingBottom: '10px' 
                }}>
                  <h3 style={{ margin: 0, color: '#0f172a', fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <User size={20} color="#0284c7" />
                    <span>{s.firstName || s.name} {s.lastName || s.surname}</span>
                    {sClass && (
                      <span style={{ backgroundColor: '#e0f2fe', color: '#0369a1', padding: '2px 8px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: '600' }}>
                        {sClass} sinif
                      </span>
                    )}
                  </h3>
                  
                  <button 
                    onClick={() => handleDelete(s.id, `${s.firstName || ''} ${s.lastName || ''}`)}
                    style={{
                      backgroundColor: '#ef4444',
                      color: 'white',
                      border: 'none',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      flexShrink: 0
                    }}>
                    <Trash2 size={15} /> Sil
                  </button>
                </div>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                  gap: '10px', 
                  marginBottom: '14px', 
                  fontSize: '0.9rem', 
                  color: '#334155' 
                }}>
                  {sHeight && <div><Ruler size={15} style={{ verticalAlign: 'middle', marginRight: '6px', color: '#0284c7' }} /><b>Boy:</b> {sHeight} sm</div>}
                  {sWeight && <div><Weight size={15} style={{ verticalAlign: 'middle', marginRight: '6px', color: '#0284c7' }} /><b>Çəki:</b> {sWeight} kq</div>}
                  {sSchool && <div><Building size={15} style={{ verticalAlign: 'middle', marginRight: '6px', color: '#0284c7' }} /><b>Məktəb:</b> {sSchool}</div>}
                  {sAddress && <div><MapPin size={15} style={{ verticalAlign: 'middle', marginRight: '6px', color: '#0284c7' }} /><b>Ünvan:</b> {sAddress}</div>}
                  {sPhone && <div><Phone size={15} style={{ verticalAlign: 'middle', marginRight: '6px', color: '#0284c7' }} /><b>Tel:</b> {sPhone}</div>}
                </div>

                <div style={{ 
                  backgroundColor: '#f8fafc', 
                  padding: '12px', 
                  borderRadius: '8px', 
                  border: '1px solid #e2e8f0', 
                  fontSize: '0.85rem', 
                  color: '#475569' 
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#1e293b', fontWeight: 'bold', marginBottom: '8px' }}>
                    <Users size={16} color="#0284c7" /> Valideynlərin Məlumatları:
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px' }}>
                    <div style={{ backgroundColor: '#ffffff', padding: '8px 10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
                      <b style={{ color: '#0f172a' }}>Ata:</b> {fName || '—'}
                      <div style={{ marginTop: '4px' }}><b>Tel:</b> {fPhone || '—'}</div>
                      {fHeight && <div style={{ marginTop: '2px' }}><b>Boy:</b> {fHeight} sm</div>}
                    </div>

                    <div style={{ backgroundColor: '#ffffff', padding: '8px 10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
                      <b style={{ color: '#0f172a' }}>Ana:</b> {mName || '—'}
                      <div style={{ marginTop: '4px' }}><b>Tel:</b> {mPhone || '—'}</div>
                      {mHeight && <div style={{ marginTop: '2px' }}><b>Boy:</b> {mHeight} sm</div>}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}