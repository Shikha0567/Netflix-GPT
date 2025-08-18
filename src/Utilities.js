export const validateCredentials = ({ email, password }) => {
  const errors = {};

  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexPassword =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&\-+=()])(?=\S+$).{8,20}$/;

  if (!email || !regexEmail.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!password || !regexPassword.test(password)) {
    errors.password =
      "Password must be 8-20 characters long and include uppercase, lowercase, number, and special character.";
  }

  return errors;
};
