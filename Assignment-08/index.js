const loginForm = document.querySelector("#login");
const createAccountForm = document.querySelector("#createAccount");
const welcomeSection = document.querySelector("#welcome-section");
const nameData = document.getElementById("name");
const emailData1 = document.getElementById("email1");
const emailData2 = document.getElementById("email2");
const passwordData1 = document.getElementById("password1");
const passwordData2 = document.getElementById("password2");

document.querySelector("#linkCreateAccount").addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.add("form--hidden");
  createAccountForm.classList.remove("form--hidden");
});

document.querySelector("#linkLogin").addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.remove("form--hidden");
  createAccountForm.classList.add("form--hidden");
});

document.querySelector("#linkLogout").addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.remove("welcome-hidden");
  welcomeSection.classList.add("welcome-hidden");
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!emailData1.value && !passwordData1.value) {
    alert("Fill form and click logIn");
  } else if (passwordData1.value !== "sai@123") {
    alert("incorrect password (please enter the correct password sai@123");
  } else {
    loginForm.classList.add("welcome-hidden");
    welcomeSection.classList.remove("welcome-hidden");
  }
});

createAccountForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!nameData.value && !emailData2.value && !passwordData2.value) {
    alert("Fill form and click Signup");
  } else {
    window.alert("successfully created account and click login below to login");
  }
});
