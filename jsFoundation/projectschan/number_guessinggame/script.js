function checkGuess() {
    let guess = document.getElementById("number").value;

    let secretnumber = 7;

    if (guess == secretnumber) {
     document.getElementById("result").innerText = "Correct!";
    }

    else if (guess < secretnumber) {
        document.getElementById("result").innerText = "Too low";
        
    }

    else{
        document.getElementById("result").innerText = "Too high";
    }
}