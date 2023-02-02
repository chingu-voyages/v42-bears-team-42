import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState();

  const navigate = useNavigate();

  const displayError = (message) => {
    setTimeout(() => {
      setError('');
    }, 5000);
    return setError(message);
  }

  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    if( !newPassword ) return displayError('Please enter a new passwords');

    return await fetch('http://localhost:3000/api/auth/signin', {
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
    <div>
      <div>{error && <span className="text-red-900">{error}</span>}</div>
      <div onChange={e => setNewPassword(e.target.value)}></div>
      <div onClick={ resetPasswordHandler }></div>
    </div>
  );
}

export default ResetPassword;