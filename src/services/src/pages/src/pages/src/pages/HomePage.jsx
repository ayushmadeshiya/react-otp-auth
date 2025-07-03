import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Profile from '../components/Profile';

export default function HomePage() {
  const { user } = useAuth();
  return (
    <div className="p-4">
      <Profile user={user} />
    </div>
  );
}
