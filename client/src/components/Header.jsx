import React, { useState } from "react";
import logo from "../logo-no-background.png";
import HeaderModal from "./modals/HeaderModal";

export default function Header({ employee }) {
  const [click, setClick] = useState(false);
  const [showChangeEmail, setChangeEmail] = useState(false);
  const [showChangePassword, setChangePassword] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-slate-900 p-3">
      <div className="w-full block grow lg:flex lg:items-center lg:w-auto">
        {/* Profile */}
        <div className="flex-grow">
          <button
            onClick={() => {
              setClick(!click);
            }}
            className="text-white bg-none border hover:bg-purple-700 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center"
          >
            Welcome, {employee.firstName}
            <svg
              className="w-4 h-4 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div
            className={
              click
                ? "fixed z-10 bg-white divide-y divide-gray-100 rounded-lg shadow"
                : "hidden fixed z-10 bg-white divide-y divide-gray-100 rounded-lg shadow"
            }
          >
            <div className="px-4 py-3 text-sm text-gray-900">
              <div>
                {employee.firstName} {employee.lastName}
              </div>
              <div className="font-medium truncate">{employee.email}</div>
            </div>
            <ul
              className="py-2 text-sm text-gray-700"
              aria-labelledby="dropdownInformationButton"
            >
              <li
                className="hover:bg-purple-700 hover:text-white cursor-pointer"
                onClick={() => {
                  setChangeEmail(true);
                  setClick(!click);
                }}
              >
                <button className="block px-4 py-2  hover:text-white">
                  Change email
                </button>
              </li>
              <li
                className="hover:bg-purple-700 hover:text-white cursor-pointer"
                onClick={() => {
                  setChangePassword(true);
                  setClick(!click);
                }}
              >
                <button className="block px-4 py-2 hover:text-white">
                  Change password
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* App Name and Logo */}
        <div className="flex-grow flex-no-shrink text-white mr-6">
          <img
            className="mx-auto h-16"
            src={logo}
            alt="app name and logo"
          ></img>
        </div>

        {/* Sign Out Button */}
        <div className="flex-grow right-auto">
          <a
            href="#sign-out"
            className="float-right inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-purple-700 mt-4 lg:mt-0"
          >
            Sign out
          </a>
        </div>
      </div>
      {/* Change Email Modal */}
      <HeaderModal
        isVisible={showChangeEmail}
        onClose={() => {
          setChangeEmail(false);
        }}
      >
        <div className="py-6 px-6 lg:px-8 text-left">
          <h3 className="mb-4 text-xl font-medium text-gray-900">
            Change Email
          </h3>

          <form className="space-y-6" action="#">
            <div>
              <label
                htmlFor="new-email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Enter New Email
              </label>
              <input
                type="email"
                name="new-email"
                id="new-email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-800 focus:border-purple-800 block w-full p-2.5"
                placeholder="name@company.com"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full text-white bg-purple-700 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </HeaderModal>
      {/* Change Password Modal */}
      <HeaderModal
        isVisible={showChangePassword}
        onClose={() => {
          setChangePassword(false);
        }}
      >
        <div className="py-6 px-6 lg:px-8 text-left">
          <h3 className="mb-4 text-xl font-medium text-gray-900">
            Change Password
          </h3>

          <form className="space-y-6" action="#">
            <div>
              <label
                htmlFor="new-password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Enter New Password
              </label>
              <input
                type="password"
                name="new-password"
                id="new-password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-800 focus:border-purple-800 block w-full p-2.5"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirm-new-password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                name="confirm-new-password"
                id="confirm-new-password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-300 focus:border-purple-800 block w-full p-2.5"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-purple-700 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </HeaderModal>
    </nav>
  );
}
