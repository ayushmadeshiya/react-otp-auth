import React from 'react';
import { useForm } from 'react-hook-form';

export default function RegisterForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log('Register Data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Full Name" className="block mb-2 p-2 border" />
      <input {...register('email')} placeholder="Email" className="block mb-2 p-2 border" />
      <input {...register('mobile')} placeholder="Mobile" className="block mb-2 p-2 border" />
      <input type="file" {...register('profile_image')} className="block mb-2" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Register</button>
    </form>
  );
}
