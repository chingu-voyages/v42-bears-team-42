import React from "react";

export default function ForgotPassword() {
  return (
    <div className="flex flex-wrap w-full h-full content-center justify-center rounded-l-md bg-white shadow-md px-2">
      <div className="w-full">
        <h1 className="text-3xl font-semibold text-center">
          Trouble signing in?
        </h1>
        <div className="w-full content-center">
          <div className="text-gray-400 text-center">
            Enter your email and we'll send you a link to get back into your
            account.
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
              className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
            />
          </div>

          <div className="mb-3">
            <button className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">
              Reset Password
            </button>
          </div>
        </form>
        <div className="flex flex-row-1">
          <div className="text-left w-1/2">
            <a href="/" className="text-xs font-semibold text-purple-700 px-1">
              Sign In
            </a>
          </div>
          <div className="text-right w-1/2">
            <span className="text-xs text-gray-400 font-semibold">
              No account?
            </span>
            <a href="/" className="text-xs font-semibold text-purple-700 px-1">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
