import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [validForm, setValidForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    setEmailError(email.length > 0 && !email.endsWith('@gmail.com') ? 'Invalid email format' : '');
    setPasswordError(password.length > 0 && (password.length < 8 || password.length > 15) ? 'Password must be 8 to 15 characters' : '');
    setValidForm(email.endsWith('@gmail.com') && password.length >= 8 && password.length <= 15);
  }, [email, password]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    if (validForm) {
      const auth = getAuth();
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/Homepage");
      } catch (error) {
        setLoginError('Failed to login. Please check your email and password.');
        console.error('Login error', error);
      }
    }
  };

  return (
    <div className="w-full min-h-screen flex items-start">
      <div className='w-1/2 h-full bg-gradient-to-r ml-96 from-[#AAE3E2] to-[#FFCEFE] flex flex-col p-28 mt-20 rounded-lg shadow-xl' style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 4rem))' }}>
        <div className='w-full flex flex-col' >
          <div className='w-full flex flex-col mb-10'>
            <h3 className='text-6xl font-extrabold mb-2 text-center text-blue-600'>
              <span className="bg-gradient-to-r from-teal-400 to-teal-600 text-transparent bg-clip-text">Login</span>
            </h3>
          </div>

          <div className='w-full flex flex-col relative'>
            <input 
              type='email'
              placeholder='Email'
              value={email}
              onChange={handleEmailChange}
              className='w-full text-black py-3 px-4 mb-4 border border-gray-300 rounded-md outline-none focus:border-indigo-500'/>
            <p className="text-red-500">{emailError}</p>
            <div className="relative">
              <input 
                type={showPassword ? 'text' : 'password'} // Toggle password visibility
                placeholder='Password'
                value={password}
                onChange={handlePasswordChange}
                className='w-full text-black py-3 px-4 mb-4 border border-gray-300 rounded-md outline-none focus:border-indigo-500'/>
              <span className="absolute top-3 right-4 cursor-pointer" onClick={handleTogglePasswordVisibility}>
              </span>
            </div>
            <p className="text-red-500">{passwordError}</p>
            <p className="text-red-500">{loginError}</p>
          </div>
            <Link to="/forgot-password" className="text-sm text-gray-600 underline">Forgot Password?</Link>
        </div>
        
        <div className='w-full flex items-center justify-between'>
        </div>
        <div className='w-full flex flex-col my-4'>
          <button 
            disabled={!validForm}
            onClick={handleLogin}
            className={`w-full text-white my-2 font-semibold bg-teal-800 rounded-md p-3 text-center flex items-center justify-center ${validForm ? '' : 'opacity-50 cursor-not-allowed'}`}>
            Log in
          </button>
        </div>
        <div className='w-full flex items-center justify-center'>
          <p className='text-sm font-normal text-black mt-8'>
            Don't have an account? <Link to="/register" className='font-semibold underline underline-offset-2 cursor-pointer'>Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
