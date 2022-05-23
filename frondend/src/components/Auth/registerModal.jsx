import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


import { register, reset } from "../../helpers/authSliceHelper";


export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    confirmPassword: "",
  });

  const { username, password, email } = formData;
  
  const nagivate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      nagivate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, nagivate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault();

    // if (password !== confirmPassword) {
    //   toast.error("Passwords do not match");
    // } else {
    //   const useData = {
    //     username,
    //     email,
    //     password,
    //   }
    //   dispatch(register(useData));
    // }
     const userData = {
        username,
        email,
        password,
      }

    dispatch(register(userData));
  }
  
  if (isLoading) {
    return <h1>Loading...</h1>
  }

    return (
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register</h2>
          </div>
          <form className="mt-8 space-y-6 flex flex-col" onSubmit={onSubmit}>
            <input
              onChange={onChange}
              id="username"
              placeholder="Username"
              type="text"
              value={username}
              name="username"
              className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            />
            <input
              onChange={onChange}
              placeholder="Email"
              id="email"
              value={email}
              type="email"
              name="email"
              className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            />
            <input
              onChange={onChange}
              id="password"
              placeholder="Password"
              value={password}
              type={password ? "text" : "password"}
              name="password"
              className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            />

            {/* <input
              name="ConfirmPassword"
              onChange={onChange}
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              type={password ? "text" : "password"}
            /> */}
            <button
              type="submit"
              className="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white bg-blue-500 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex w-full justify-center items-center font-medium focus:outline-none"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    );
}

