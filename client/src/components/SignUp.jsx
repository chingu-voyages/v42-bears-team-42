import React from "react";

export default function SignUp() {
  return (
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
              className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
            />
          </div>

          <div className="mb-3">
            <button className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">
              Sign Up
            </button>
          </div>
        </form>
        <div className="flex flex-row-1 justify-center">
          <a href="/" className="text-xs text-gray-400 font-semibold">
            Already have an account?
            <span className="text-xs font-semibold text-purple-700 px-1">
              Sign In
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
