import React, { useState, useEffect } from "react";

import SignUp from "./components/Auth/Modals/SignUp";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/home")
      .then(res =>  {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <div>{data.name}</div>
      <button
        className="rounded-full border-2 border-gray-600 p-2"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Sign Up
      </button>
      {showModal ? (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="flex items-center justify-center min-h-screen bg-gray-500">
            <div className="relative w-full max-w-xs">
              <div className="bg-white rounded-lg px-6 pt-16 pb-20 mb-4">
                <div className="flex items-center justify-between">
                  <button className="p-2" onClick={() => setShowModal(false)}>
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
                <SignUp />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
