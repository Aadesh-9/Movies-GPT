const SignInValidation = (email, password) => {
  const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid)
    return "Password is not valid , Password should have at least 7 characters starting with an uppercase letter and at least one 1 digit ";
  return null;
};

export default SignInValidation;
