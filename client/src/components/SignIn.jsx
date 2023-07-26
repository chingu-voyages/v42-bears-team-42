import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LinkButton from "./LinkButton";

export default function SignIn({ setContent }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  let navigate = useNavigate();

  const displayError = (message) => {
    setTimeout(() => {
      setError("");
    }, 5000);
    return setError(message);
  };

  const demoEmployeeClick = () => {
    console.log(process.env.DEMO_EMPLOYEE_EMAIL, process.env.DEMO_EMPLOYEE_PASSWORD,process.env.REACT_APP_BE_URL);
    setEmail(process.env.DEMO_EMPLOYEE_EMAIL || "t@gmail.com");
    setPassword(process.env.DEMO_EMPLOYEE_PASSWORD || "pass");
  }

  const demoManagerClick = () => {
    console.log(process.env.DEMO_MANAGER_EMAIL, process.env.DEMO_MANAGER_PASSWORD,process.env.REACT_APP_BE_URL);
    setEmail(process.env.DEMO_MANAGER_EMAIL || "t@gmail.com");
    setPassword(process.env.DEMO_MANAGER_PASSWORD || "pass");
  }

  const signInHandler = async (e) => {
    e.preventDefault();

    if (!email || !password)
      return displayError("Please enter email and password");

    return await fetch(`${process.env.REACT_APP_BE_URL}/api/auth/signin`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.success) {
          sessionStorage.setItem("authToken", data.token);
          sessionStorage.setItem("employee", JSON.stringify(data.employee));
          navigate("/dashboard");
        } else {
          console.log("success false", data.error);
          throw new Error(data.error);
        }
      })
      .catch((error) => {
        displayError(error.message);
      });
  };

  return (
    <div className="h-full w-full min-w-[260px]">
      <div className="flex flex-wrap w-full h-full content-center justify-center bg-white px-2">
        <div className="w-full">
          <h1 className="text-3xl font-semibold text-center">WELCOME</h1>
          <div className="w-full content-center">
            <div className="text-gray-400 text-center">
              {error && <span className="text-red-900">{error}</span>}
              {!error && <span>Sign In to put SAM to work!</span>}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
              />
            </div>

            <div className="mb-3">
              <button
                onClick={signInHandler}
                className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="flex flex-row-1 justify-between">
            <div className="text-left w-1/2">
              <LinkButton
                setContent={setContent}
                linkText="Forgot Password?"
                linkGo="forgot"
              />
            </div>
            <div className="flex flex-row-1">
              <span className="text-xs font-semibold text-gray-700">
                No account?
              </span>
              <LinkButton
                setContent={setContent}
                linkText="Sign Up"
                linkGo="signup"
              />
            </div>
          </div>
          <div id="demos" className="py-10">
            <h6 className="text-center py-1">Demo Users:</h6>
            <div id="demoBtns" className="flex flex-row-1 justify-between">
              <button
                onClick={demoManagerClick}
                className="mb-1.5 block w-1/3 text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">
                Manager
              </button>
              <button
                onClick={demoEmployeeClick}
                className="mb-1.5 block w-1/3 text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">
                Employee
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
