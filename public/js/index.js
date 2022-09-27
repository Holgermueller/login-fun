let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let submit = document.getElementById("submit");

let strength = 0;

let validations = [];

const testLength = (val) => {
  const length = 8;

  return length.test(val);
};

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

const testSpecial = (val) => {
  const re = /[$&+,:;=?@#]/;

  return re.test(val);
};

const testEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(email);
};

const validateUsernameInput = () => {
  username.addEventListener("input", () => {
    const usernameInput = username.value;

    if (testSpecial(usernameInput) === true) {
      email.style.cssText = `display: inline-block;
      transition: linear;
      `;
    } else {
      email.style.display = "none";
    }

    // validations = [
    //   testLength(usernameInput.length),
    //   usernameInput.search(/[a-z]/) > -1,
    //   usernameInput.serach(/[A-Z]/) > -1,
    //   usernameInput.search(/[0-9]/) > -1,
    //   usernameInput.search(/[$&+,:;=?@#]/) > -1,
    // ];

    // strength = validations.reduce((acc, cur) => acc + cur, 0);

    // if (strength == 5) {
    //   email.style.display = "inline-block";
    // } else {
    //   email.style.display = "none";
    // }
  });
};

const validateEmail = () => {
  email.addEventListener("input", () => {
    const emailToTest = email.value;

    if (testEmail(emailToTest) === true) {
      password.style.display = "inline-block";
    } else {
      password.style.display = "none";
    }
  });
};

const validatePassword = () => {};

const confirmPasswords = () => {};

const validateAll = () => {
  validateUsernameInput();
  validateEmail();
};

const hideElements = () => {
  email.style.display = "none";
  password.style.display = "none";
  confirmPassword.style.display = "none";
  submit.style.display = "none";
};

validateAll();
hideElements();
