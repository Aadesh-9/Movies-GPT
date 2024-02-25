const SignUpValidation = (name, email, password) => {
  const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  const isNameValid2 =
    /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
      name
    );
  const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isNameValid || !isNameValid2)
    return "Name is not valid , name should start with an uppercase letter";
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid)
    return "Password is not valid , Password should have at least 7 characters starting with an uppercase letter and at least one 1 digit ";
  return null;
};

export default SignUpValidation;
