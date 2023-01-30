import React, { useState } from "react";
import Banner from "../components/Banner";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import ForgotPassword from "../components/ForgotPassword";

function Content() {
  const [content, setContent] = useState('signin');

  if(content === 'signin') return <SignIn setContent={setContent} />;
  if(content === 'signup') return <SignUp setContent={setContent} />;
  if(content === 'forgot') return <ForgotPassword setContent={setContent} />;
}

function LandingPage() {
  return (
    <div className="flex flex-wrap h-screen w-screen justify-center bg-white">
      {/* Banner Panel*/}
      <Banner />
      {/* Sign In / Sign Up / Forgot Password Panel */}
      <Content />
    </div>
  );
}

export default LandingPage;
