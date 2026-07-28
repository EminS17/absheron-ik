import React, { useEffect, useState } from 'react';
import { Trash2, RefreshCw, User, Phone, MapPin, Building, Ruler, Weight } from 'lucide-react';

export default function Admin() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://absheron-ik-back.onrender.com/api/students');
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error('Xəta baş verdi:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

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
        alert('Silinmə zamanı xəta baş verdi.');
      }
    } catch (error) {
      console.error('Xəta:', error);
      alert('Serverlə əlaqə kəsildi.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h2 style={{ color: '#102a43', margin: 0 }}>Məşqçi Paneli (Şagirdlərin Siyahısı)</h2>
        <button 
          onClick={fetchStudents} 
          style={{
            padding: '10px 18px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#0284c7',
            color: 'white',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
          <RefreshCw size={18} /> Yenilə
        </button>
      </div>

      {loading ? (
        <p>Siyahı yüklənir...</p>
      ) : students.length === 0 ? (
        <p>Hələ ki, heç bir şagird qeydiyyatdan keçməyib.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {students.map((s) => (
            <div 
              key={s.id} 
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                padding: '20px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
              }}>
              {/* Шапка карточки: Имя и кнопка Удалить */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', borderBottom: '1px solid #f1f5f9', paddingBottom: '10px' }}>
                <h3 style={{ margin: 0, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <User size={20} color="#0284c7" />
                  {s.firstName} {s.lastName} {s.studentClass && `(${s.studentClass})`}
                </h3>
                <button 
                  onClick={() => handleDelete(s.id, `${s.firstName} ${s.lastName}`)}
                  style={{
                    backgroundColor: '#ef4444',
                    color: 'white',
                    border: 'none',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                  <Trash2 size={16} /> Sil
                </button>
              </div>

              {/* Данные ученика */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px', marginBottom: '14px', fontSize: '0.9rem', color: '#334155' }}>
                {s.height && <div><Ruler size={15} style={{ verticalAlign: 'middle', marginRight: '6px' }} /><b>Boy:</b> {s.height} sm</div>}
                {s.weight && <div><Weight size={15} style={{ verticalAlign: 'middle', marginRight: '6px' }} /><b>Çəki:</b> {s.weight} kq</div>}
                {s.school && <div><Building size={15} style={{ verticalAlign: 'middle', marginRight: '6px' }} /><b>Məktəb:</b> {s.school}</div>}
                {s.address && <div><MapPin size={15} style={{ verticalAlign: 'middle', marginRight: '6px' }} /><b>Ünvan:</b> {s.address}</div>}
                {s.phone && <div><Phone size={15} style={{ verticalAlign: 'middle', marginRight: '6px' }} /><b>Öz tel:</b> {s.phone}</div>}
              </div>

              {/* Данные родителей */}
              {(s.fatherName || s.fatherPhone || s.fatherHeight || s.motherName || s.motherPhone || s.motherHeight) && (
                <div style={{ backgroundColor: '#f8fafc', padding: '12px', borderRadius: '8px', border: '1px dashed #cbd5e1', fontSize: '0.85rem', color: '#475569' }}>
                  <b style={{ color: '#1e293b', display: 'block', marginBottom: '6px' }}>Valideyn məlumatları:</b>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '8px' }}>
                    <div>
                      <b>Ata:</b> {s.fatherName || '—'} | <b>Tel:</b> {s.fatherPhone || '—'} {s.fatherHeight && `| Boy: ${s.fatherHeight} sm`}
                    </div>
                    <div>
                      <b>Ana:</b> {s.motherName || '—'} | <b>Tel:</b> {s.motherPhone || '—'} {s.motherHeight && `| Boy: ${s.motherHeight} sm`}
                    </div>
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