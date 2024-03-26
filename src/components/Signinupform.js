import React from 'react'

const Signinupform = () => {
  return (
    <div className="absolute form bg-black">
    <h1>Sign In</h1>
    <form action=""></form>
    <input placeholder="Email id" type="text" />
    <input placeholder="password" type="text" />
    <button>LOGIN</button>
    <p>Forgot password ?</p>

    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
    <label for="vehicle1"> I have a bike</label>
    <p>New to Netflix? Sign up now.</p>
    <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
  </div>
  )
}

export default Signinupform