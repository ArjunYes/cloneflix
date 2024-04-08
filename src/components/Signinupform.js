import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { validateSignIn } from "../utils/validateSignIn";
import { auth } from "../utils/firebase";

const Signinupform = () => {
  const [signIn, setSignIn] = useState(true);
  const [errorMsg, seterrorMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleSignin = () => {
    console.log(email.current.value, password.current.value);

    const errorMsgVal = validateSignIn(
      email.current.value,
      password.current.value
    );
    errorMsgVal ? seterrorMsg(errorMsgVal) : seterrorMsg(null);

    const authentication = auth;

    if (!errorMsgVal) {
      if (!signIn) {
        createUserWithEmailAndPassword(
          authentication,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log("USER", user);
            // ...
          })
          .catch((error) => {
            debugger;
            const errorMessage = error.message;
            seterrorMsg(errorMessage);
            // ..
          });
      } else {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorMessage = error.message;
            seterrorMsg(errorMessage);
          });
      }
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="bg-black px-14 pt-14 pb-20 rounded-lg flex flex-col items-start ">
        <h1 className="text-left mb-12 text-white text-3xl font-bold ">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        <form
          action=""
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col items-center"
        >
          <input
            ref={email}
            className="bg-gray-200 rounded py-3 px-4 mb-2 w-80"
            placeholder="Email or phone number"
            type="text"
          />
          {
            <input
              ref={password}
              className="bg-gray-200 rounded py-3 px-4 mb-2 w-80"
              placeholder="Password"
              type="password"
            />
          }
          {!signIn && (
            <input
              className="bg-gray-200 rounded py-3 px-4 mb-2 w-80"
              placeholder="Re-enter Password"
              type="password"
            />
          )}
          {signIn && (
            <button
              onClick={handleSignin}
              className="bg-red-600 text-white  py-2 px-4 mb-2 w-80"
            >
              Sign In
            </button>
          )}
          {!signIn && (
            <button className="bg-red-600 text-white  py-2 px-4 mb-2 w-80">
              Sign Up
            </button>
          )}
          {errorMsg && <p className="text-red-600 py-2">{errorMsg}</p>}
          <div className="mb-28">
            {signIn && <p className="text-white">Forgot password ?</p>}
          </div>

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
            This page is protected by Google reCAPTCHA to <br></br> ensure
            you're not a bot.{" "}
            <span className="text-blue-700 cursor-pointer"> Learn more.</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signinupform;
