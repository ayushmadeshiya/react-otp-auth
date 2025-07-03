import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendOTP, login } from '../services/api';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [otpSent, setOtpSent] = useState(false);
  const [serverOtp, setServerOtp] = useState('');
  const { register, handleSubmit } = useForm();
  const { setToken, setUser } = useAuth();
  const navigate = useNavigate();
  const [mobile, setMobile] = useState('');

  const onSendOtp = async (data) => {
    try {
      const res = await sendOTP(data.mobile);
      if (res?.data?.otp) {
        setServerOtp(res.data.otp);
        setOtpSent(true);
        setMobile(data.mobile);
      } else {
        alert('Failed to send OTP.');
      }
    } catch (err) {
      alert('Error sending OTP');
    }
  };

  const onVerifyOtp = async (data) => {
    if (data.otp === serverOtp) {
      try {
        const res = await login(mobile);
        if (res?.data?.token) {
          setToken(res.data.token);
          setUser(res.data.user);
          navigate('/');
        } else {
          navigate('/register');
        }
      } catch (err) {
        alert('Login failed');
      }
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <form onSubmit={handleSubmit(otpSent ? onVerifyOtp : onSendOtp)}>
      {!otpSent ? (
        <>
          <input
            {...register('mobile', { required: true })}
            placeholder="Enter mobile number"
            className="border p-2 block mb-2"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2">
            Send OTP
          </button>
        </>
      ) : (
        <>
          <input
            {...register('otp', { required: true })}
            placeholder="Enter OTP"
            className="border p-2 block mb-2"
          />
          <button type="submit" className="bg-green-500 text-white px-4 py-2">
            Verify OTP
          </button>
        </>
      )}
    </form>
  );
}
