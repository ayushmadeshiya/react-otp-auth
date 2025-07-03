import React from 'react';

export default function Profile({ user }) {
  return (
    <div>
      <h2 className="text-lg font-bold">Welcome, {user?.name}</h2>
      <p>Email: {user?.email}</p>
      <p>Mobile: {user?.mobile}</p>
    </div>
  );
}
