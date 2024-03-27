import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Signinupform from "./Signinupform";

function Login() {
  return (
    <div className="">
      <Header />
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/3838227f-4f02-4fbf-9fcc-ca852c0313f6/GB-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <Signinupform />
      <Footer />
    </div>
  );
}

export default Login;
