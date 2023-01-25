import React, { useState } from "react";
import Banner from "../components/Banner";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import ForgotPassword from "../components/ForgotPassword";

function LandingPage() {
  let rightPanel = useState(<SignIn />);

  if (window.location.pathname.match("/signup")) {
    rightPanel = <SignUp />;
  } else if (window.location.pathname.match("/forgotpassword")) {
    rightPanel = <ForgotPassword />;
  }

  return (
    <div className="flex flex-wrap h-screen w-screen justify-center bg-white">
      {/* Banner Panel*/}
      <Banner />
      {/* Sign In / Sign Up / Forgot Password Panel */}
      {rightPanel}
    </div>
  );
}

export default LandingPage;
