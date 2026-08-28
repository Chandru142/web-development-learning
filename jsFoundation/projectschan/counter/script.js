let count = 0;
let decrease = document.getElementById("decrease");
let increase = document.getElementById("increase");
increase.addEventListener("click", function () {
  count++;
  countDisplay.innerText = count;
});
let countDisplay = document.getElementById("count");

decrease.addEventListener("click", function(){
    count--;
    countDisplay.innerText = count;
});
