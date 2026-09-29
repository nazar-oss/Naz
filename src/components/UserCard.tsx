import React from 'react';

interface UserCardProps {
  name: string;
  role: string;
  avatarUrl?: string;
}

export const UserCard: React.FC<UserCardProps> = ({ name, role, avatarUrl }) => {
  return (
    <div style={{ padding: '16px', border: '1px solid #3182ce', backgroundColor: '#ebf8ff', borderRadius: '8px' }}>
      {avatarUrl && <img src={avatarUrl} alt={name} style={{ width: '48px', height: '48px', borderRadius: '50%', marginBottom: '8px' }} />}
      <h2 style={{ color: '#2b6cb0', margin: '0 0 8px 0' }}>Користувач: {name}</h2>
      <p style={{ margin: '0 0 12px 0' }}>Спеціалізація: {role}</p>
      <button style={{ backgroundColor: '#3182ce', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}>
        Переглянути профіль
      </button>
    </div>
  );
};