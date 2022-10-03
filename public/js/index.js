let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let submit = document.getElementById("submit");

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
  const re = /[$&+.-_:;=?@#]/;
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

    if (
      usernameInput.length >= 8 &&
      testLowercase(usernameInput) === true &&
      testUppercase(usernameInput) === true &&
      testNumbers(usernameInput) === true &&
      testSpecial(usernameInput) === true
    ) {
      email.style.display = "inline-block";
    } else {
      email.style.display = "none";
    }
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

const validatePassword = () => {
  password.addEventListener("input", () => {
    const passwordToTest = password.value;

    if (
      passwordToTest.length >= 8 &&
      testLowercase(passwordToTest) === true &&
      testUppercase(passwordToTest) === true &&
      testNumbers(passwordToTest) === true &&
      testSpecial(passwordToTest) === true
    ) {
      confirmPassword.style.display = "inline-block";
    } else {
      confirmPassword.style.display = "none";
    }
  });
};

const confirmPasswords = () => {
  confirmPassword.addEventListener("input", () => {
    const passwordToTest = password.value;
    const passwordToConfirm = confirmPassword.value;

    if (passwordToTest === passwordToConfirm) {
      submit.style.display = "inline-block";
    } else {
      submit.style.display = "none";
    }
  });
};

const submitForm = (event) => {
  event.preventDefault();

  const message = document.getElementById("message");
  message.style.display = "inline-block";

  const page = document.getElementById("loginSection");
  page.classList.add("broken");
};

const validateAll = () => {
  validateUsernameInput();
  validateEmail();
  validatePassword();
  confirmPasswords();
};

const hideElements = () => {
  email.style.display = "none";
  password.style.display = "none";
  confirmPassword.style.display = "none";
  submit.style.display = "none";
};

//validateAll();
//hideElements();
