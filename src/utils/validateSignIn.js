export const validateSignIn = (emailId, password) => {
  const Emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{":;'?/>.<,])(?=.*[^\s]).{8,}$/;
  

    if( !Emailregex.test(emailId)) return "Email not valid";
    if( !passwordRegex.test(password)) return "Pssword not valid";

    return null;
};
