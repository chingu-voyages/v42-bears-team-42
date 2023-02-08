import React, { useState } from "react";
import LinkButton from "./LinkButton";

export default function ForgotPassword({ setContent }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const displayError = (message) => {
    setTimeout(() => {
      setError('');
    }, 5000);
    return setError(message);
  }

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    if(!email) return displayError('No email address entered');

    return await fetch(`${process.env.REACT_APP_BE_URL}/api/auth/forgotpassword`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email})
    })
      .then(data => data.json())
      .then(data => {
        if(data.success) {
          console.log('Status:', data.status, data.message);
          window.location.reload(false);
        } else {
          throw new Error(data.message);
        }
      })
      .catch((error) => {
        displayError(error.message);
      });
  }

  return (
    <div className="h-full w-full min-w-[260px]">
      <div className="flex flex-wrap w-full h-full content-center justify-center bg-white px-2">
        <div className="w-full">
          <h1 className="text-3xl font-semibold text-center">
            Trouble signing in?
          </h1>
          <div className="w-full content-center">
            <div className="text-gray-400 text-center">
              {error && <span className="text-red-900">{error}</span>}
              {!error && <span>We'll send you a password reset link.</span>}
            </div>
          </div>
          <form action="" className="mt-4">
            <div className="mb-3">
              <label htmlFor="" className="mb-2 block text-xs font-semibold">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                onChange={e => setEmail(e.target.value)}
                className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
              />
            </div>

            <div className="mb-3">
              <button onClick={ forgotPasswordHandler } className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">
                Send Email
              </button>
            </div>
          </form>
          <div className="flex flex-row-1 justify-between">
            <div className="text-left">
              <LinkButton setContent={ setContent } linkText='Sign In' linkGo='signin' />
            </div>
            <div className="flex flex-row-1">
              <span className="text-xs font-semibold text-gray-700">No account?</span>
              <LinkButton setContent={ setContent } linkText='Sign Up' linkGo='signup' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
