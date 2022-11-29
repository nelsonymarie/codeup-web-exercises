"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(colorName) {
    if (colorName === "red") {
        return "Apples red";
    } else if (colorName === "orange") {
        return "Orange is nice!";
    } else if (colorName === "yellow") {
        return "Great Color!";
    } else if (colorName === "green") {
        return "I like green too.";
    } else if (colorName === "blue") {
        return " The sky is blue";
    } else if (colorName === "cyan") {
        return "Is cyan ink?";
    } else if (colorName === "purple") {
        return "Great color in flowers!";
    } else {
        return "Hmm. I do not know that color...";
    }
}

console.log("cyan");


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

/*analyzeColor(randomColor);
console.log(randomColor);*/




/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */


function analyzeColor(color){
    switch (colorName) {
        case "red":
            return "I like blue better but all colors are awesome!";
        case "orange":
            return "orange is not that popular!";
        case "yellow":
            return "yellow is not that popular!";
        case "green":
            return "green is  popular!";
        case "blue":
            return " blue is awesome!";
        case "cyan":
            return "cyan is not that popular!";
        case "purple":
            return "purple is not that popular!";
        default:
            return "That's a nice color!";
    }
}




/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

const colorName = prompt("Choose a color.");
alert(`You said ${analyzeColor(colorName)}`);





/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


function calculateTotal(totalNumber, amountTotal) {
    switch (number) {
        case 1:
            total *= (1 - 0.10);
            break;
        case 2:
            total *= (1 - 0.25);
            break;
        case 3:
            total *= (1 - 0.35);
            break;
        case 4:
            total *= (1 - 0.50);
            break;
        case 5:
            total *= (1 - 1.00);
            break;
        default:
            break;
    }
    return amountTotal;
}





/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
let luckyNumber = Math.floor(Math.random() * 6);
let totalBill = prompt ("What is my total?")

function calculateTotal(totalNumber, amountTotal) {
    return luckyNumber + totalAmount;
}




/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved*/


let enterNumber = confirm("Want to play? please enter a number");
if (enterNumber === true) {
    let number1 = parseInt(prompt("Type your number. "));

    let result = (number1 % 2 == 0) ? "even" : "odd";
    alert('Your number is ' + result + ".");

    alert('Your total is ' + (number1 + 100));
    alert("This number is a " + + " number.");

} else {
    alert("Would you like to play again?")
}

if (number1 > 0) {
    alert("Positive Number!");
}else{
    alert("Negative Number!");





















 */