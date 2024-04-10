import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Browse = () => {

  const navigate = useNavigate();
  const user = useSelector(store=>store.user)
  console.log(user);

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/")
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return <div onClick={logout}>Browse</div>;
};

export default Browse;
