function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        alert('Nice try! If you divide by 0 the world would end!')
        return 0;
    } else {
        return num1 / num2;
    }
}

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

// Round long decimals

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
            if (!disp.textContent) {
                numberOne = 0;
                operator = e.target.textContent;
            } else if (disp.textContent && !numberOne) {
                numberOne = parseInt(disp.textContent);
                operator = e.target.textContent;
                disp.textContent = '';
            } else if (disp.textContent && !operator) {
                operator = e.target.textContent;
                disp.textContent = '';
            } else if (disp.textContent && numberOne && operator) {
                console.log(parseInt(disp.textContent), numberOne, operator, parseInt(disp.textContent) === numberOne);
                numberTwo = parseInt(disp.textContent);
                numberOne = operate(numberOne, numberTwo, operator);
                numberTwo = null;
                operator = e.target.textContent;
                console.log(parseInt(disp.textContent), numberOne, operator, parseInt(disp.textContent) === numberOne);
                disp.textContent = numberOne;
            }
            break;
        case '=':
            if ((numberOne === 0 || numberOne) && operator) {
                if (disp.textContent === '0' || disp.textContent) {
                    numberTwo = parseInt(disp.textContent);
                    numberOne = operate(numberOne, numberTwo, operator);
                    numberTwo = null;
                    operator = null;
                    disp.textContent = numberOne;
                } else if (!disp.textContent) {
                    numberTwo = 0;
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
            if (parseInt(disp.textContent) === numberOne && operator) {
                disp.textContent = '';
            }
            display(e.target.textContent);
            break;
    }
    console.log(numberOne, numberTwo, operator);
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

// EXTRA CREDIT: add . button and make it so only one can be input
// EXTRA CREDIT: add a backspace button to undo numbers
// EXTRA CREDIT: add keyboard support
// EXTRA CREDIT: make it look nice

