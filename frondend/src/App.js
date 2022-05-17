import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import SignIn from "./components/Auth/Modals/SignIn";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="rounded-full border-2 border-gray-600 p-2"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Sign In
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
                <SignIn />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
