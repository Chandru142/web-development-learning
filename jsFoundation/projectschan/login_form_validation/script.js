let form = document.getElementById("loginForm")
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let result = document.getElementById("result");

  if (username === "") {
    result.innerText = "User name is required";
  } else if (password === "") {
    result.innerText = "password is required";
  } else if (password.length < 6) {
    result.innerText = "Password must be at least 6 characters";
  } else {
    result.innerText = "Login successful!";
  }
});