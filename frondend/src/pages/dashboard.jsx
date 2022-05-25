import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout, reset } from "../helpers/authSliceHelper";

export default function Dashboard() {
  const { user, isError, message } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  useEffect(() => {
    if (isError) {
     console.log(message);
    }
    
    if (!user) {
      navigate("/login");
    }

    return () => {
      dispatch(reset());
    }
  }, [user, isError, message, navigate, dispatch]);
  
  return (
    <>
      {user ? (
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <h1 className="text-3xl leading-9 font-extrabold text-gray-900">
                Welcome {user.username}
              </h1>
              <p className="mt-2 text-sm leading-5 text-gray-500">
                You are logged in!
              </p>
              <button
                className="mt-3 w-full rounded-md shadow-sm text-red-500"
                type="button"
                onClick={onLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <h1 className="text-3xl leading-9 font-extrabold text-gray-900">
                Welcome
              </h1>
              <p className="mt-2 text-sm leading-5 text-gray-500">
                You are not logged in!
              </p>
              <button
                className="mt-3 w-full rounded-md shadow-sm"
                type="button"
                
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
