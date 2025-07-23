import React, { useState } from "react";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
      <div
        className={`flex flex-col bg-black/85 px-14 py-10 rounded-md w-[30rem] space-y-6 ${
          isSignUp ? "h-[32rem]" : "h-[25rem]"
        }`}
      >
        <h2 className="text-white text-4xl font-bold text-left">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>

        {isSignUp && (
          <input
            type="name"
            className="px-4 py-3 w-full border border-gray-400 bg-transparent text-white rounded-md placeholder-gray-300"
            placeholder="Username"
          />
        )}

        <input
          type="email"
          className="px-4 py-3 w-full border border-gray-400 bg-transparent text-white rounded-md placeholder-gray-300"
          placeholder="Email"
        />

        <input
          type="password"
          className="px-4 py-3 w-full border border-gray-400 bg-transparent text-white rounded-md placeholder-gray-300"
          placeholder="Password"
        />

        <button className="py-3 bg-red-500 text-white w-full rounded-lg font-bold text-md hover:bg-red-600 transition">
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        {isSignUp ? (
          <h3 className="text-white">
            Already a member?
            <span
              className="cursor-pointer"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              Sign in now.
            </span>
          </h3>
        ) : (
          <h3 className="text-white">
            New to Netflix?
            <span
              className="cursor-pointer"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              Sign up now.
            </span>
          </h3>
        )}
      </div>
    </div>
  );
};

export default Login;
