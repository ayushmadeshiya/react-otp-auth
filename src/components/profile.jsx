import React from 'react';

export default function Profile({ user }) {
  return (
    <div>
      <h2>Welcome, {user?.name || 'User'}</h2>
      <p>Email: {user?.email}</p>
      <p>Mobile: {user?.mobile}</p>
    </div>
  );
}
