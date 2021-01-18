// add function
function add(num1, num2) {
    return num1 + num2;
}
// subtract function
function subtract(num1, num2) {
    return num1 - num2;
}

// multiply function
function multiply(num1, num2) {
    return num1 * num2;
}

// divide function, needs a div/0 error throw
function divide(num1, num2) {
    if (num2 === 0) {
        return 'Nice try! If you divide by 0 the world would end!'
    } else {
        return num1 / num2;
    }
}

// operate function
// takes two numbers and an operator and then calls one of the funcitons above
function operate(num1, num2, operator) {
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case 'x':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return 'An error occured'
    }
}

// user can put in several digits and operators but should still reveal
// the answer. 12 + 7 - 5 * 3 = 42. Functions should still only evaluate
// 2 digits and one operand at a time. Does not follow normal math rules
// should be done in the order its recieved, so when - is pressed after
// 12 + 7, the next function should be 19 - 5. Round long decimals

let numberOne = null;
let numberTwo = null;
let operator = null;

// function that displays the button presses
const container = document.querySelector('.grid-container');
container.addEventListener('click', function(e) {
    switch (e.target.textContent) {
        case '+':
        case '-':
        case 'x':
        case '/':
            if (disp.textContent && !numberOne) {
                numberOne = parseInt(disp.textContent);
                operator = e.target.textContent;
                disp.textContent = '';
            } else if (disp.textContent && !operator) {
                operator = e.target.textContent;
                disp.textContent = '';
            } else if (disp.textContent && numberOne && operator) {
                numberTwo = parseInt(disp.textContent);
                numberOne = operate(numberOne, numberTwo, operator);
                numberTwo = null;
                operator = null;
                disp.textContent = numberOne;
            }
            break;
        case '=':
            if (numberOne && operator) {
                if (disp.textContent === '0' || disp.textContent) {
                    numberTwo = parseInt(disp.textContent);
                    numberOne = operate(numberOne, numberTwo, operator);
                    numberTwo = null;
                    operator = null;
                    disp.textContent = numberOne;
                }
            }
            break;
        case 'Clear':
            clear();
            break;
        default:
            console.log(parseInt(disp.textContent), numberOne, operator, parseInt(disp.textContent) === numberOne);
            if (parseInt(disp.textContent) === numberOne && operator) {
                disp.textContent = '';
            }
            display(e.target.textContent);
            break;
    }
});

const display_container = document.getElementById('display');
const disp = display_container.querySelector("span");

function display(str) {
    if (disp.textContent.length < 10) {
        disp.textContent += str;
    }
}

function clear() {
    operator = null;
    numberOne = null;
    numberTwo = null;
    disp.textContent = '';
}
// link = button to operate function, need to account for pressing = before
// all args are input

// EXTRA CREDIT: add . button and make it so only one can be input
// EXTRA CREDIT: add a backspace button to undo numbers
// EXTRA CREDIT: add keyboard support
// EXTRA CREDIT: make it look nice

