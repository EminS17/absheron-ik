import React, { useEffect, useState } from 'react';
import { Trash2, RefreshCw, UserCheck } from 'lucide-react';

export default function Admin() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Загрузка списка учеников с бэкенда
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

  // Удаление ученика по ID
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
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Məşqçi Paneli (Şagirdlərin Siyahısı)</h2>
        <button 
          onClick={fetchStudents} 
          style={{ padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <RefreshCw size={16} /> Yenilə
        </button>
      </div>

      {loading ? (
        <p>Siyahı yüklənir...</p>
      ) : students.length === 0 ? (
        <p>Hələ ki, heç bir şagird qeydiyyatdan keçməyib.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {students.map((student) => (
            <div 
              key={student.id} 
              style={{
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '16px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '10px', 
                border: '1px solid #e9ecef'
              }}>
              <div>
                <h4 style={{ margin: '0 0 6px 0', color: '#102a43' }}>
                  <UserCheck size={16} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                  {student.firstName} {student.lastName} ({student.studentClass})
                </h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#627d98' }}>
                  <b>Məktəb:</b> {student.school} | <b>Ata tel:</b> {student.fatherPhone} | <b>Ana tel:</b> {student.motherPhone}
                </p>
              </div>

              <button 
                onClick={() => handleDelete(student.id, `${student.firstName} ${student.lastName}`)}
                style={{
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                <Trash2 size={16} /> Sil
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}