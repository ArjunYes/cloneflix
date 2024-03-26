import React from "react";
import Error from "./Error";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "../components/Login";

function Body() {
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

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
