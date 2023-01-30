import React, { useState } from "react";
import LinkButton from "./LinkButton";

export default function SignUp({ setContent }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = ('');

  const signUpHandler = async (e) => {
    e.preventDefault();

    if(!firstName || !lastName || !email || !password ) {
      return;
    }

    return await fetch('http://localhost:3000/api/auth/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({firstName, lastName, email, password})
    })
      .then(data => {
        console.log('raw data.status', data.status);
        // Redirect to '/' on success, stay on SignUp otherwise
      })
      .catch(error => console.log('error: ', error));
      // Catch and display api returned errors
  }

  return (
    <div className="h-full w-1/4 min-w-[260px]">
      <div className="flex flex-wrap w-full h-full content-center justify-center rounded-l-md bg-white shadow-md px-2">
        <div className="w-full">
          <h1 className="text-3xl font-semibold text-center">WELCOME</h1>
          <div className="w-full content-center">
            <div className="text-gray-400 text-center">
              Sign up to get started!
            </div>
          </div>
          <form action="" className="mt-4">
            <div className="mb-3">
              <label htmlFor="" className="mb-2 block text-xs font-semibold">
                First name
              </label>
              <input
                type="text"
                placeholder="First name"
                onChange={e => setFirstName(e.target.value)}
                className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="mb-2 block text-xs font-semibold">
                Last name
              </label>
              <input
                type="text"
                placeholder="Last name"
                onChange={e => setLastName(e.target.value)}
                className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="mb-2 block text-xs font-semibold">
                Email
              </label>
              <input
                type="email"
                placeholder="Email address"
                onChange={e => setEmail(e.target.value)}
                className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="mb-2 block text-xs font-semibold">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
                className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="mb-2 block text-xs font-semibold">
                Confirm password
              </label>
              <input
                type="password"
                placeholder="Re-enter password"
                className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
              />
            </div>

            <div className="mb-3">
              <button onClick={ signUpHandler } className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">
                Sign Up
              </button>
            </div>
          </form>
          <div className="flex flex-row-1 justify-center">
            <span className="text-xs font-semibold text-gray-700">Already have an account?</span>
            <LinkButton setContent={ setContent } linkText='Sign In' linkGo='signin' />
          </div>
        </div>
      </div>
    </div>
  );
}
