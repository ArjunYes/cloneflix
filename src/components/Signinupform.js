import React, { useState } from "react";

const Signinupform = () => {
  const [signIn, setSignIn] = useState(true);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="bg-black px-14 pt-14 pb-20 rounded-lg flex flex-col items-start ">
        <h1 className="text-left mb-12 text-white text-3xl font-bold ">
           { signIn ?  'Sign In' : 'Sign Up'  }
        </h1>
        <form action="" className="flex flex-col items-center">
          <input
            className="bg-gray-200 rounded py-3 px-4 mb-2 w-80"
            placeholder="Email or phone number"
            type="text"
          />
          {
            <input
              className="bg-gray-200 rounded py-3 px-4 mb-2 w-80"
              placeholder="Password"
              type="text"
            />
          }
          {!signIn && (
            <input
              className="bg-gray-200 rounded py-3 px-4 mb-2 w-80"
              placeholder="Re-enter Password"
              type="text"
            />
          )}
          {signIn && (
            <button className="bg-red-600 text-white  py-2 px-4 mb-2 w-80">
              Sign In
            </button>
          )}
          {!signIn && (
            <button className="bg-red-600 text-white  py-2 px-4 mb-2 w-80">
              Sign Up
            </button>
          )}
          <div className="mb-28">
           { signIn && <p className="text-white">Forgot password ?</p>}
          </div>
        </form>
        <div className="flex items-center text-white">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
            className="mr-2 mb-4"
          />
          <label className="mb-4" htmlFor="vehicle1">
            Remember me
          </label>
        </div>
        {signIn && (
          <p className="text-gray-500">
            New to Netflix?{" "}
            <span
              onClick={() => setSignIn(false)}
              className="text-white cursor-pointer hover:underline"
            >
              {" "}
              Sign up now.
            </span>{" "}
          </p>
        )}
        {!signIn && (
          <p className="text-gray-500">
            Already have an account ?{" "}
            <span
              onClick={() => setSignIn(true)}
              className="text-white cursor-pointer hover:underline"
            >
              {" "}
              Sign In now.
            </span>{" "}
          </p>
        )}
        <p className="text-gray-400 text-left text-xs">
          This page is protected by Google reCAPTCHA to <br></br> ensure you're
          not a bot. <span className="text-blue-700 cursor-pointer"> Learn more.</span>
        </p>
      </div>
    </div>
  );
};

export default Signinupform;
