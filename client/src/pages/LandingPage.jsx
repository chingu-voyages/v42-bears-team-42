import React from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

function LandingPage() {
  return (
    <div className="flex flex-wrap h-screen w-screen justify-center bg-white">
      {/* Landing Page Banner */}
      <div className=" w-0 sm:w-1/4 md:w-1/2 xl:w-3/4 h-full text-right rounded-r-md">
        <img
          className="h-full w-full"
          src="https://images.unsplash.com/photo-1558025137-0b406e9cc169?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
          alt="Calendar"
        />
      </div>
      <div className="h-full w-1/4 min-w-[260px]">
        <SignIn />
      </div>
    </div>
  );
}

export default LandingPage;
