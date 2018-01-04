// Copy the code below into the JavaScript file
// In your HTML, create an text input and a button.
// The text input should only accept letters. No numbers.
// When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.
// The output of each of the functions should immediately appear as well.

let button = document.getElementById("runFunction");
let output = document.getElementById("output");

button.addEventListener("click", runItAll);


function runItAll () {
// Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.

let testString = document.getElementById("input").value;

function reversal() {
        let reversed = testString.split("").reverse().join(""); // seperates text, reverses it, then joins it back together.
        let div = document.createElement("div");
        let reversedText = document.createTextNode(reversed);
        console.log(reversedText);
        output.appendChild(div);
        div.appendChild(reversedText);
        
        
    };

    // Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.
    function alphabits() {
        // testString = document.getElementById("input").value;
        let alpha = testString.split("").sort().join("");
        let div = document.createElement("div");
        let alphaText = document.createTextNode(alpha);
        // console.log(alpha);
        output.appendChild(div);
        div.appendChild(alphaText);
    };

    // // Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
    // function palindrome() {
        
        pali = testString.split("").reverse().join("");
        let div = document.createElement("div");
        let paliText = document.createTextNode(pali);
        
        output.appendChild(div);
        div.appendChild(paliText);
        if (pali === testString) {
            output.innerHTML = "Your String is a Palindrome";
        }
        else {
            output.innerHTML = "Your String is not a Palindrome";
        }
    

    // var testString = "";
    reversal(testString);
    alphabits(testString);
    palindrome(testString);
    };
