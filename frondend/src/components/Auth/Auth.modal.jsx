import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "@reach/router";

import { signup, signin } from "../../actions/Auth.action";


const initialState = {
  username: "",
  password: "",
  confirmPassword: "",
  email: "",
};

export default function SignUp() {
  const [form, setFrom] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setFrom(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
  };

  const handleChange = (e) => {
    setFrom({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isSignup ? "Sign up" : "Sign in"}
          </h2>
        </div>
        <form className="mt-8 space-y-6 flex flex-col" onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <input
                handleChange={handleChange}
                type="text"
                name="username"
                label="Username"
                className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
              />
            </>
          )}
          <input
            handleChange={handleChange}
            type="email"
            name="email"
            label="Email"
            className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          />
          <input
            handleChange={handleChange}
            type={showPassword ? "text" : "password"}
            handleShowPassword={handleShowPassword}
            name="password"
            label="Password"
            className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
          />
          {isSignup && (
            <input
              name="ConfirmPassword"
              label="Repeat Password"
              handleChange={handleChange}
              type="Password"
            />
          )}
          <button
            type="submit"
            className="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none"
          >
            { isSignup ? "Sign up" : "Sign in" }
          </button>
          <div className="flex flex-col items-center mt-5">
              <button 
                onClick={switchMode}
                className="mb-">
                  {isSignup
                    ? "Already have an account? Sign in"
                    : "Don't have an account? Sign Up"
                  }
              </button>
          </div>
        </form>
      </div>
    </div>
  );
}
