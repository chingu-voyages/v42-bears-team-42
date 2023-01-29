import React, { useState } from "react";

export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeDropdown = () => {
    setClick(false);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-purple-700 p-3">
      <div className="w-full block grow lg:flex lg:items-center lg:w-auto">
        {/* Profile */}
        <div className="flex-grow">
          <button
            onClick={() => {
              handleClick();
            }}
            className="text-white bg-none border hover:bg-purple-400 font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center"
          >
            Welcome, User{" "}
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
                ? "fixed z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                : "hidden fixed z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
            }
          >
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div>Aya Shiau</div>
              <div className="font-medium truncate">test@email.com</div>
            </div>
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownInformationButton"
            >
              <li>
                <a
                  href="/"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => {
                    closeDropdown();
                  }}
                >
                  Change email
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => {
                    closeDropdown();
                  }}
                >
                  Change password
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* App Name and Logo */}
        <div className="flex-grow flex-no-shrink text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">SAM</span>
        </div>

        {/* Sign Out Button */}
        <div className="flex-grow right-auto">
          <a
            href="#sign-out"
            className="float-right inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0"
          >
            Sign out
          </a>
        </div>
      </div>
    </nav>
  );
}
