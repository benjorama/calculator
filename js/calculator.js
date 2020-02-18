import evaluateExpression from './evaluateExpression';

const OPERATORS = ['+', '-', '*', '/'];
const KEYS = document.querySelectorAll('.key');
const DISPLAY_TEXT = document.querySelector('.displayText');

// Character codes for HTML entities.
const DIVIDE = 247;
const MULTIPLY = 215;
const SUBTRACT = 8722;

let expression = '';
let previousKey = '';
let previousCalculation = '';

function registerKey(key) {
  if (!Number.isNaN(Number(key)) || key === '.') {
    expression += key;
  }
  if (key === '(') {
    expression += `${key} `;
  }
  if (key === ')') {
    expression += ` ${key}`;
  }
  if (OPERATORS.includes(key)) {
    if (key === '-') {
      if (previousKey === '' || OPERATORS.includes(previousKey) || previousKey === '(') {
        expression += key;
      } else {
        expression += ` ${key} `;
      }
    } else {
      expression += ` ${key} `;
    }
  }
  if (key === '=') {
    expression = evaluateExpression(expression);
    previousCalculation = expression;
  }
  if (key === 'AC') {
    expression = '';
    previousKey = '';
    previousCalculation = '';
  }
  if (key === 'CE') {
    expression = previousCalculation;
  }
  previousKey = key;
  DISPLAY_TEXT.innerHTML = expression;
}

KEYS.forEach((key) => {
  key.addEventListener('click', () => {
    if (key.innerHTML.charCodeAt(0) === DIVIDE) {
      registerKey(OPERATORS[3]);
    } else if (key.innerHTML.charCodeAt(0) === MULTIPLY) {
      registerKey(OPERATORS[2]);
    } else if (key.innerHTML.charCodeAt(0) === SUBTRACT) {
      registerKey(OPERATORS[1]);
    } else {
      registerKey(key.innerHTML);
    }
  });
});

document.addEventListener('keydown', (event) => {
  registerKey(event.key);
});
