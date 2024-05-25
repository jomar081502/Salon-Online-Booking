import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth"; // Import necessary functions

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  useEffect(() => {
    setErrorEmail(email.length > 0 && !email.endsWith('@gmail.com') ? 'Invalid email format' : '');
    setErrorPassword(password.length > 0 && (password.length < 8 || password.length > 15) ? 'Password must be 8 to 15 characters' : '');

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

  const handleRegister = async () => {
    const auth = getAuth();
    if (validForm) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        setRegistrationSuccess(true);
        setRegistrationError('');
        setEmail('');
        setPassword('');
      } catch (error) {
        const errorMessage = error.message;
        setRegistrationError(errorMessage);
        console.error('Registration failed:', errorMessage);
      }
    }
  };
  
  return (
    <div className="w-full min-h-screen flex items-start">
      <div className='w-1/2 h-full bg-gradient-to-r from-[#AAE3E2] to-[#FFCEFE] flex flex-col p-28 ml-96 mt-20 rounded-lg shadow-xl' style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 4rem))' }}>
        <div className='w-full flex flex-col' >
        <div className='w-full flex flex-col mb-10'>
          <h3 className='text-6xl font-extrabold mb-2 text-center text-blue-600'>
            <span className="bg-gradient-to-r from-teal-400 to-teal-600 text-transparent bg-clip-text">Sign Up</span>
          </h3>
        </div>

          <div className='w-full flex flex-col relative'>
          <input 
          type='email'
          placeholder='Email'
          value={email}
          onChange={handleEmailChange}
          className='w-full text-black py-3 px-4 mb-4 border border-gray-300 rounded-md outline-none focus:border-indigo-500'/>
        <p className="text-red-500">{errorEmail}</p>
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
            <p className="text-red-500">{errorPassword}</p>
            <p className="text-red-500">{registrationError}</p>
            {registrationSuccess && <p className="text-green-500">Registration successful! Please go back to the login page to access your account.</p>}
          </div>
        </div>
        
        <div className='w-full flex items-center justify-between'>
        </div>
        <div className='w-full flex flex-col my-4'>
          <button 
            disabled={!validForm}
            onClick={handleRegister}
            className={`w-full text-white my-2 font-semibold bg-teal-800 rounded-md p-3 text-center flex items-center justify-center ${validForm ? '' : 'opacity-50 cursor-not-allowed'}`}>
            Create account
          </button>
        </div>
        <div className='w-full flex items-center justify-center'>
          <p className='text-sm font-normal text-black mt-8'>
            Already have an account? <Link to="/" className='font-semibold underline underline-offset-2 cursor-pointer'>Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
