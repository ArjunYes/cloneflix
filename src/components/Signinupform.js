import React from "react";

const Signinupform = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="bg-black px-14 pt-14 pb-20 rounded-lg flex flex-col items-start ">
        <h1 className="text-left mb-12 text-white text-3xl font-bold ">Sign In</h1>
        <form action="" className="flex flex-col items-center">
          <input
            className="bg-gray-200 rounded py-3 px-4 mb-2 w-80"
            placeholder="Email or phone number"
            type="text"
          />
          <input
            className="bg-gray-200 rounded py-3 px-4 mb-2 w-80"
            placeholder="Password"
            type="text"
          />
          <button className="bg-red-600 text-white  py-2 px-4 mb-2 w-80">
            Sign In
          </button>
        <p className="text-white mb-24">Forgot password ?</p>
        </form>
        <div className="flex items-center text-white">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
            className="mr-2 mb-4"
          />
          <label className="mb-4" htmlFor="vehicle1">Remember me</label>
        </div>
        <p className="text-gray-500">New to Netflix? <span className="text-white"> Sign up now.</span> </p>
        <p className="text-gray-400 text-left text-xs">
          This page is protected by Google reCAPTCHA to <br></br> ensure you're not a
          bot. <span className="text-blue-700" > Learn more.</span>
        </p>
      </div>
    </div>
  );
};

export default Signinupform;
