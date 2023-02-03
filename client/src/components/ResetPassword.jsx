import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Banner from './Banner';
import logo from '../logo-black.png'

function ResetPassword({ match }) {
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { resetToken } = useParams();

  const displayError = (message) => {
    setTimeout(() => {
      setError('');
    }, 5000);
    return setError(message);
  }

  const resetPasswordHandler = async (e) => {
    e.preventDefault();
    if( !newPassword ) return displayError('Please enter a new password');
    
    console.log('resetToken', resetToken)
    if( !newPassword ) return displayError('Please enter a new passwords');

    //https://samapp-production.up.railway.app
    return await fetch('https://samapp-production.up.railway.app/api/auth/resetpassword/${resetToken}', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({newPassword})
    })
      .then(data => data.json())
      .then(data => {
        if(data.success) {
          navigate("/");
        } else {
          console.log('success false', data.error)
          throw new Error(data.error);
        }
      })
      .catch((error) => {
        displayError(error.message);
      });
  }

  return ( 
    <div className="flex flex-wrap h-screen w-screen justify-center bg-white">
      <Banner />
      <div className="flex flex-col w-1/4 content-center px-2">
        <img className="mx-auto h-24 mb-16 mt-8" src={logo} alt="app name and logo" />
        <div className="w-full content-center justify-center border-0">
          <h1 className="text-3xl font-semibold text-center">WELCOME</h1>
          <div className='text-gray-400 text-center'>
            {error && <span className="text-red-900">{error}</span>}
            {!error && <span className="">Please enter your new password</span>}
          </div>
          <div className="mt-4 mb-3">
            <label htmlFor="" className="mb-2 block text-xs font-semibold">New Password</label>
            <input
              type="password"
              placeholder="New Password"
              onChange={e => setNewPassword(e.target.value)}
              className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
            />
          </div>
          <div className="mb-3">
            <button onClick={ resetPasswordHandler } className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;