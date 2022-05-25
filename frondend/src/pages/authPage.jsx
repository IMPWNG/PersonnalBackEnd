import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Login from "./Modals/loginModal";
import Register from "./Modals/registerModal";

import { reset, logout } from "../helpers/authSliceHelper";	

export default function Auth() {
  const [loginShowModal, setLoginShowModal] = useState(false);
  const [registerShowModal, setRegisterShowModal] = useState(false);

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
    const navigate = useNavigate();
    const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

    const onLogout = () => {
      dispatch(logout());
      dispatch(reset());
      navigate("/");
    };

  return (
    <>
      <div className="flex flex-row min-h-screen justify-center items-center space-x-5 bg-black">
          {user ? (
            <>
              <button
                className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                type="button"
                onClick={onLogout}
                
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-gradient-to-r from-red-200 to-red-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  <span className="text-black">
                    <p>Logout</p>
                  </span>
                </span>
              </button>
            </>
          ) : (
          <>
            <button
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
              type="button"
              onClick={() => setLoginShowModal(true)}
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-gradient-to-r from-green-400 to-green-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                <span className="text-black">
                  <p>Login</p>
                </span>
              </span>
            </button>
          </>
          )}
        <button
          className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          type="button"
          onClick={() => setRegisterShowModal(true)}
        >
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-gradient-to-r from-green-400 to-green-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
            <span className="text-black">
              <p>Register</p>
            </span>
          </span>
        </button>
      </div>
      {loginShowModal ? (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="flex items-center justify-center min-h-screen bg-gray-500">
            <div className="relative w-full max-w-xs">
              <div className="bg-white rounded-lg px-6 pt-16 pb-20 mb-4">
                <div className="flex items-center justify-between">
                  <button
                    className="p-2"
                    onClick={() => setLoginShowModal(false)}
                  >
                    <svg
                      className="h-6 w-6 text-gray-600"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <Login />
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {registerShowModal ? (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="flex items-center justify-center min-h-screen bg-gray-500">
            <div className="relative w-full max-w-xs">
              <div className="bg-white rounded-lg px-6 pt-16 pb-20 mb-4">
                <div className="flex items-center justify-between">
                  <button
                    className="p-2"
                    onClick={() => setRegisterShowModal(false)}
                  >
                    <svg
                      className="h-6 w-6 text-gray-600"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <Register />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
