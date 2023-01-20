import React from "react";

function SignIn() {
  return (
    <>
      <div className="flex shadow-md">
        <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white">
          <div className="w-72">
            <h1 className="text-3xl font-semibold text-center">Hello!</h1>
            <small className="text-gray-400 text-center">
              Welcome, please sign in using your employee account.
            </small>
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
                  Sign In
                </button>
              </div>
            </form>
            <div className="text-center">
              <span className="text-xs text-gray-400 font-semibold">
                Having trouble signing in?
              </span>
            </div>
            <div className="text-center">
              <span className="text-xs text-gray-400 font-semibold">
                Don't have an account yet?
              </span>
              <a href="/" className="text-xs font-semibold text-purple-700">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
