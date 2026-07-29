import React, { useEffect, useState } from 'react';
import { Trash2, RefreshCw, User, Phone, MapPin, Building, Ruler, Weight, Lock } from 'lucide-react';

// 🔑 Введите здесь секретный пароль для вас и учителя:
const ADMIN_PASSWORD = "absheron2026"; 

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  // Проверяем, сохранялся ли пароль ранее в браузере
  useEffect(() => {
    const savedAuth = localStorage.getItem('admin_authenticated');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
      fetchStudents();
    }
  }, []);

  // Обработка ввода пароля
  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('admin_authenticated', 'true');
      fetchStudents();
    } else {
      alert('Шифр сехвдир! (Неверный пароль)');
    }
  };

  // Выход из панели
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

  // 🔒 ЕСЛИ ПАРОЛЬ НЕ ВВЕДЕН — ПОКАЗЫВАЕМ ЭКРАН ВХОДА
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

  // 🔓 ЕСЛИ ПАРОЛЬ ВВЕДЕН ВЕРНО — ПОКАЗЫВАЕМ ПАНЕЛЬ АДМИНИСТРАТОРА
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
        <h2 style={{ color: '#102a43', margin: 0, fontSize: '1.4rem' }}>Məşqçi Paneli</h2>
        
        <div style={{ display: 'flex', gap: '8px' }}>
          <button 
            onClick={fetchStudents} 
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {students.map((s) => (
            <div 
              key={s.id} 
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                padding: '16px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
              }}>
              {/* Заголовок карточки с именем и кнопкой */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start', 
                gap: '10px',
                marginBottom: '12px', 
                borderBottom: '1px solid #f1f5f9', 
                paddingBottom: '10px' 
              }}>
                <h3 style={{ margin: 0, color: '#0f172a', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                  <User size={18} color="#0284c7" />
                  <span>{s.firstName} {s.lastName}</span>
                  {s.studentClass && <span style={{ color: '#0284c7', fontWeight: 'normal', fontSize: '0.95rem' }}>({s.studentClass})</span>}
                </h3>
                
                <button 
                  onClick={() => handleDelete(s.id, `${s.firstName} ${s.lastName}`)}
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

              {/* Данные ученика */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
                gap: '8px', 
                marginBottom: '12px', 
                fontSize: '0.88rem', 
                color: '#334155' 
              }}>
                {s.height && <div><Ruler size={14} style={{ verticalAlign: 'middle', marginRight: '4px' }} /><b>Boy:</b> {s.height} sm</div>}
                {s.weight && <div><Weight size={14} style={{ verticalAlign: 'middle', marginRight: '4px' }} /><b>Çəki:</b> {s.weight} kq</div>}
                {s.school && <div><Building size={14} style={{ verticalAlign: 'middle', marginRight: '4px' }} /><b>Məktəb:</b> {s.school}</div>}
                {s.address && <div><MapPin size={14} style={{ verticalAlign: 'middle', marginRight: '4px' }} /><b>Ünvan:</b> {s.address}</div>}
                {s.phone && <div><Phone size={14} style={{ verticalAlign: 'middle', marginRight: '4px' }} /><b>Tel:</b> {s.phone}</div>}
              </div>

              {/* Данные родителей */}
              {(s.fatherName || s.fatherPhone || s.fatherHeight || s.motherName || s.motherPhone || s.motherHeight) && (
                <div style={{ 
                  backgroundColor: '#f8fafc', 
                  padding: '10px 12px', 
                  borderRadius: '8px', 
                  border: '1px dashed #cbd5e1', 
                  fontSize: '0.82rem', 
                  color: '#475569' 
                }}>
                  <b style={{ color: '#1e293b', display: 'block', marginBottom: '4px' }}>Valideynlər:</b>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '6px' }}>
                    <div><b>Ata:</b> {s.fatherName || '—'} | {s.fatherPhone || '—'} {s.fatherHeight && `(${s.fatherHeight} sm)`}</div>
                    <div><b>Ana:</b> {s.motherName || '—'} | {s.motherPhone || '—'} {s.motherHeight && `(${s.motherHeight} sm)`}</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}