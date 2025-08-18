import React, { useState } from "react";
import { validateCredentials } from "../Utilities";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { addUserDetails } from "../store/userSlice";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const handleAuth = () => {
    const error = validateCredentials(credentials);
    console.log(error, "error");
    if (!error.keys) {
      setErrors({});
      //handle auth
      if (isSignUp) {
        createUserWithEmailAndPassword(
          auth,
          credentials.email,
          credentials.password
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
              displayName: credentials.username,
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, "errorCode", errorMessage, "errorMessage");
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          credentials.email,
          credentials.password
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            const { accessToken, displayName, email, uid } = user;
            let payload = {
              accessToken,
              displayName,
              email,
              uid,
            };
            //show toaster message
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, "errorCode", errorMessage, "errorMessage");
          });
      }
    } else {
      setErrors((prevErrors) => {
        if (error.email) {
          return { ...prevErrors, email: error.email };
        }
        if (error.password) {
          return { ...prevErrors, password: error.password };
        }
        return prevErrors;
      });
    }
  };

  return (
    <div className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
      <div
        className={`flex flex-col bg-black/85 px-14 py-10 rounded-md w-[30rem] space-y-6 ${
          isSignUp ? "h-[32rem]" : "h-[30rem]"
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
            onChange={(e) =>
              setCredentials((prev) => ({ ...prev, username: e.target.value }))
            }
          />
        )}

        <input
          type="email"
          className="px-4 py-3 w-full border border-gray-400 bg-transparent text-white rounded-md placeholder-gray-300"
          placeholder="Email"
          onChange={(e) => {
            setCredentials((prev) => ({ ...prev, email: e.target.value }));
            setErrors((prev) => ({ ...prev, email: "" }));
          }}
        />
        {errors.email && (
          <p className="text-red-500 font-normal text-sm">{errors.email}</p>
        )}

        <input
          type="password"
          className="px-4 py-3 w-full border border-gray-400 bg-transparent text-white rounded-md placeholder-gray-300"
          placeholder="Password"
          onChange={(e) => {
            setCredentials((prev) => ({ ...prev, password: e.target.value }));
            setErrors((prev) => ({ ...prev, password: "" }));
          }}
        />
        {errors.password && (
          <p className="text-red-500 font-normal text-sm">{errors.password}</p>
        )}

        <button
          className="py-3 bg-red-500 text-white w-full rounded-lg font-bold text-md hover:bg-red-600 transition cursor-pointer"
          onClick={handleAuth}
        >
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
