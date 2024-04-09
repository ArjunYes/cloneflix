export const validateSignIn = (
  isSignIn,
  emailId,
  password,
  name,
  repassword
) => {
  const Emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{":;'?/>.<,])(?=.*[^\s]).{8,}$/;
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

  if (isSignIn) {
    if (!Emailregex.test(emailId)) return "Email not valid";
    if (!passwordRegex.test(password)) return "Pssword not valid";
  } else {
    if (!Emailregex.test(emailId)) return "Email not valid";
    if (!passwordRegex.test(password)) return "Password not valid";
    if (!nameRegex.test(name)) return "Name not valid";
    if (password !== repassword) return "Password not match";
  }

  return null;
};
