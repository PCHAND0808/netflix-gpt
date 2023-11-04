import { PasswordMsg, emailMessage } from "./constants";

export const validateSignIn = (email, passwd) => {
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passwd);

  if (!isValidEmail) return emailMessage;
  if (!isValidPassword) return PasswordMsg;

  if (isValidEmail && isValidPassword) return null;
};
