import React from "react";
import SignIn from "../components/SignIn";

function LandingPage() {
  return (
    <div className="flex flex-wrap h-screen w-screen justify-center bg-gray-200">
      {/* Landing Page Banner */}
      <div className="w-1/2 md:w-1/3 h-full text-right rounded-r-md">
        <img className="h-full w-full float-right"
          src="https://images.unsplash.com/photo-1558025137-0b406e9cc169?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="Calendar"
        />
      </div>
      <SignIn />
    </div>
  );
}

export default LandingPage;
