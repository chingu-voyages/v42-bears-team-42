import React, { useState } from "react";
import Banner from "../components/Banner";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import ForgotPassword from "../components/ForgotPassword";
import logo from '../logo-black.png';

function Content() {
  const [content, setContent] = useState("signin");

  if (content === "signin") return <SignIn setContent={setContent} />;
  if (content === "signup") return <SignUp setContent={setContent} />;
  if (content === "forgot") return <ForgotPassword setContent={setContent} />;
}

function LandingPage() {
  return (
    <div className="flex flex-wrap h-screen w-screen justify-center bg-white">
      {/* Banner Panel*/}
      <Banner />
      {/* Sign In / Sign Up / Forgot Password Panel */}
      <div className="flex flex-col w-1/4 content-center min-w-[260px]">
        <img className="mx-auto h-24 mb-16 mt-8" src={logo} alt="app name and logo" />
        <div className="w-full content-center justify-center border-0">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
