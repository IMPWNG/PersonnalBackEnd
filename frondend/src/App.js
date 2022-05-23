import React, { useState } from "react";

import SignUp from "./components/Auth/authModal";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="grid place-items-center h-screen bg-black">
        <button
          className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-gradient-to-r from-green-400 to-blue-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
            Login
          </span>
        </button>
      </div>
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
