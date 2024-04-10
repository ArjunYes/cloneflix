import React, { useEffect } from "react";
import Error from "./Error";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "../components/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";


function Body() {

  const dispatch = useDispatch();


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <Error />,
      children: [
        // {
        //   path: "",
        //   element: <Body />,
        // },
      ],
    },
    {
      path: "/browse",
      element: <Browse />,
      errorElement: <Error />,
    },
  ]);

  useEffect(() => {
    const authentication = auth;
    onAuthStateChanged(authentication, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user;
        // console.log("User from ueffect",userx)
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, [auth]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
