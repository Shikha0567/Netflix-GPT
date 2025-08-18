import React from "react";
import Header from "./Header";
import Login from "./Login";

const AuthPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg"
      />

      <Header />
      <Login />
    </div>
  );
};

export default AuthPage;
