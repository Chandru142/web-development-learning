function calculateAge() {
  let birthYear = prompt("Enter your birth year:");
  let currentYear = new Date().getFullYear();

  let age = currentYear - birthYear;

  document.getElementById("result").innerText = "Your age is: " + age;
}
