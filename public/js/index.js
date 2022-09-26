let username = document.getElementById("usernameInput");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let submit = document.getElementById("submit");

const testLowercase = (val) => {
  const re = /[a-z]/;
  return re.test(val);
};

const testUppercase = (val) => {
  const re = /[A-Z]/;
  return re.test(val);
};

const testNumbers = (val) => {
  const re = /[0-9]/;
  return re.test(val);
};

const validateUsernameInput = () => {
  username.addEventListener("input", () => {
    const usernameInput = username.value;

    usernameInput.length >= 8
      ? (email.style.display = "inline-block")
      : (email.style.display = "none");
  });
};

const validateEmail = () => {};

const validatePassword = () => {};

const confirmPasswords = () => {};

const hideElements = () => {
  email.style.display = "none";
  password.style.display = "none";
  confirmPassword.style.display = "none";
  submit.style.display = "none";
};

validateUsernameInput();
hideElements();
