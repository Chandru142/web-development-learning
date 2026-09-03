let quote = document.getElementById("quote");

let getQuote = document.getElementById("getQuote");

document.body.style.backgroundColor="lightblue";

getQuote.addEventListener("click", async function () {
  let response = await fetch("https://dummyjson.com/quotes/random");

  let data = await response.json();

  quote.innerText = data.quote;

});
