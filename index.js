console.log("Hello there!");
let input = document.querySelector(".input-area");   //Input-Area Single Element
let number = document.querySelectorAll(".number");   //number-buttons  Array
let operators = document.querySelectorAll(".operator");   //operator-buttons  Array
let result = document.querySelector(".equal");             //Equal-button Single Element 
let clear = document.querySelector(".clear-entry");      // Clear-Entry CE single element
let resultDisplayed = false;

for (let i = 0; i < number.length; i++) {                // Event Listener to Numbers
    number[i].addEventListener("click", function () {

        let currentString = input.textContent;
        let lastChar = currentString[currentString.length - 1];

        if (resultDisplayed === false) {
            input.textContent = input.textContent + this.textContent;
        }
        else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷" || lastChar === ".") {
            resultDisplayed = false;
            input.textContent = input.textContent + this.textContent;
        }
        else {
            resultDisplayed = false;
            input.textContent = "";
            input.textContent = input.textContent + this.textContent;
        }
    })
}

document.querySelector(".point").addEventListener("click", function () {       // Event Listener to Decimal
    let currentString = input.textContent;
    let lastChar = currentString[currentString.length - 1];

    if (resultDisplayed === false) {
        input.textContent = input.textContent + this.textContent;
    }
    else{
        resultDisplayed = false;
        input.textContent = "";
        input.textContent = input.textContent + this.textContent;
    }
})

for (let i = 0; i < operators.length; i++) {                 // Event Listener to Operators
    operators[i].addEventListener("click", function () {

        let currentString = input.textContent;
        let lastChar = currentString[currentString.length - 1];

        if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
            let newString = currentString.substring(0, currentString.length - 1);
            input.textContent = newString + this.textContent;
        }
        else if(resultDisplayed === true) {
            input.textContent = input.textContent + this.textContent;
        }
        else if (currentString.length == 0) {
            console.log("Enter a number first");
        }
        else {
            input.textContent = input.textContent + this.textContent;
        }


    })
}

document.querySelector(".equal").addEventListener("click", function () {        // Event Listener to Calculate
    let currentString = input.textContent;
    let numbersArray = currentString.split(/[÷×+-]/);
    for (var i = 0; i < numbersArray.length; i++) {
        numbersArray[i] = parseFloat(numbersArray[i]);
    }
    console.log(numbersArray);
    if (currentString.includes("×")) {
        let temp1 = numbersArray[0];
        let temp2 = numbersArray[1];
        let temp3 = temp1 * temp2;
        input.textContent = temp3;
        resultDisplayed = true;
    }
    if (currentString.includes("÷")) {
        let temp1 = numbersArray[0];
        let temp2 = numbersArray[1];
        let temp3 = temp1 / temp2;
        input.textContent = temp3;
        resultDisplayed = true;
    }
    if (currentString.includes("+")) {
        let temp1 = numbersArray[0];
        let temp2 = numbersArray[1];
        let temp3 = temp1 + temp2;
        input.textContent = temp3;
        resultDisplayed = true;
    }
    if (currentString.includes("-")) {
        let temp1 = numbersArray[0];
        let temp2 = numbersArray[1];
        let temp3 = temp1 - temp2;
        input.textContent = temp3;
        resultDisplayed = true;
    }
})


document.querySelector(".clear-entry").addEventListener("click", function () {       // Clear Entry 
    document.querySelector(".input-area").innerHTML = "";
})

document.querySelector(".backspace").addEventListener("click", function () {        // Backspace
    let currentString = input.textContent;
    let newString = currentString.substring(0, currentString.length - 1);
    input.textContent = newString;
})