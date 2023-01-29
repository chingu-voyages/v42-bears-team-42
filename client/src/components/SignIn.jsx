import React from "react";
import LinkButton from "./LinkButton";

export default function SignIn({ setContent }) {
  return (
    <div className="h-full w-1/4 min-w-[260px]">
      <div className="flex flex-wrap w-full h-full content-center justify-center rounded-l-md bg-white shadow-md px-2">
        <div className="w-full">
          <h1 className="text-3xl font-semibold text-center">WELCOME</h1>
          <div className="w-full content-center">
            <div className="text-gray-400 text-center">
              Sign In to put SAM to work!
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
          <div className="flex flex-row-1 justify-between">
            <div className="text-left w-1/2">
              <LinkButton setContent={ setContent } linkText='Forgot Password?' linkGo='forgot' />
            </div>
            <div className="flex flex-row-1">
              <span className="text-xs font-semibold text-gray-700">No account?</span>
              <LinkButton setContent={ setContent } linkText='Sign Up' linkGo='signup' />
            </div>
          </div>
          <div id="demos" className="py-10">
            <h6 className="text-center py-1">Demo Users:</h6>
            <div id="demoBtns" className="flex flex-row-1 justify-between">
              <button className="mb-1.5 block w-1/3 text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">
                Manager
              </button>
              <button className="mb-1.5 block w-1/3 text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">
                Employee
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
