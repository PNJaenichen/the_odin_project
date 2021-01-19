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

// TODO Round long decimals
function operate(num1, num2, operator) {
    switch(operator) {
        case '+':
            return truncate(add(num1, num2));
        case '-':
            return truncate(subtract(num1, num2));
        case 'x':
            return truncate(multiply(num1, num2));
        case '/':
            return truncate(divide(num1, num2));
        default:
            return 'An error occured'
    }
}

function truncate(num) {
    if (num.toString().length > 10) {
        let newString = num.toString().slice(0,10);
        return floatCheck(newString);
    }
    return floatCheck(num);
}

function floatCheck(str) {
    if (typeof(str) !== 'number') {
        if (str.indexOf('.') !== -1) {
            return parseFloat(str);
        } else {
            return parseInt(str);
        }
    } else {
        return str;
    }
}

let numberOne = null;
let numberTwo = null;
let operator = null;

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
                numberOne = floatCheck(disp.textContent);
                operator = e.target.textContent;
                disp.textContent = '';
            } else if (disp.textContent && !operator) {
                operator = e.target.textContent;
                disp.textContent = '';
            } else if (disp.textContent && numberOne && operator) {
                numberTwo = floatCheck(disp.textContent);
                numberOne = operate(numberOne, numberTwo, operator);
                numberTwo = null;
                operator = e.target.textContent;
                disp.textContent = numberOne;
            }
            break;
        case '=':
            if ((numberOne === 0 || numberOne) && operator) {
                if (disp.textContent === '0' || disp.textContent) {
                    numberTwo = floatCheck(disp.textContent);
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
        case '.':
            if (disp.textContent.indexOf('.') === -1) {
                disp.textContent += e.target.textContent;
            }
            break;
        case 'Back':
            disp.textContent = disp.textContent.slice(0,disp.textContent.length - 1);
            break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            if (parseInt(disp.textContent) === numberOne && operator) {
                disp.textContent = '';
            }
            display(e.target.textContent);
            break;
        default:
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

// EXTRA CREDIT: add keyboard support


