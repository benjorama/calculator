import evaluateExpression from './evaluateExpression';

const OPERATORS = ['+', '-', '*', '/'];
const KEYS = document.querySelectorAll('.key');
const DISPLAY_TEXT = document.querySelector('.displayText');
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
  }
  if (key === 'CE') {
    expression = previousCalculation;
  }
  previousKey = key;
  DISPLAY_TEXT.innerHTML = expression;
}

KEYS.forEach((key) => {
  key.addEventListener('click', () => {
    registerKey(key.innerHTML);
  });
});

document.addEventListener('keydown', (event) => {
  registerKey(event.key);
});
