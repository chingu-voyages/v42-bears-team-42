import React from "react";

export default function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-purple-700 p-6">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">SAM</span>
      </div>
      <div className="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
          <svg
            class="h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <span>Welcome, </span>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
          >
            name
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
          >
            Change email
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
          >
            Change password
          </a>
        </div>
        <div>
          <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 lg:mt-0"
          >
            Sign out
          </a>
        </div>
      </div>
    </nav>
  );
}
