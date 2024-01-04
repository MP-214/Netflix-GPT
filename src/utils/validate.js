export const checkSignInSignUpValidation = (email, password) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
  const emailvalidation = emailRegex.test(email);
  const passwordvalidation = passRegex.test(password);
  if (!emailvalidation) return "Email is not valid";
  if (!passwordvalidation) return "Password is not valid";
  return null;
};
