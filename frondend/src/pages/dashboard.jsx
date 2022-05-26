import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout, reset } from "../helpers/authSliceHelper";

import UserMenu from "../components/userMenu";

export default function Dashboard() {
  const { user, isError, message } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

    useEffect(() => {
      if (isError) {
        console.log(message);
      }

      if (!user) {
        navigate("/login");
      }

      return () => {
        dispatch(reset());
      };
    }, [user, isError, message, navigate, dispatch]);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };



  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h1 className="text-3xl leading-9 font-extrabold text-gray-900">
              Welcome {user && user.username}
            </h1>
            <p className="mt-2 text-sm leading-5 text-gray-500">
              You are logged in!
            </p>
            <UserMenu />
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
    </>
  );
}
