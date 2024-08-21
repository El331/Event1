import React from "react";
import img1 from "../image/img1.png";

export default function Forgot() {
  return (
    <div className="flex justify-center items-center h-screen relative">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${img1})`, filter: "blur(8px)" }}
      ></div>
      <div className="bg-gray-200 shadow-md rounded-md w-[500px] p-8 relative z-10">
        <h2 className="text-2xl font-bold mb-6 text-start">Forgot Password</h2>
        <h2 className="mb-6">
          You can request a password reset token for ASTU E-Learning. It will be
          sent to an e-mail address registered with your account.
        </h2>
        <div>
          <h2 className="text-2xl font-normal mb-6 text-start">Email</h2>
        </div>
        <form className="flex justify-center">
          <div className="mb-4 flex gap-4">
            <div className="w-full">
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md py-2 px-32 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex justify-center"></div>
        </form>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-1/3 bg-gray-800 text-white font-thin py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
          >
            Request
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <h2 className="font-bold">Return to Login</h2>
        </div>
      </div>
    </div>
  );
}
