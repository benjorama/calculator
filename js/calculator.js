import evaluateExpression from './evaluateExpression';

const OPERATORS = ['+', '-', '*', '/'];
const KEYS = document.querySelectorAll('.key');
const DISPLAY_TEXT = document.querySelector('.displayText');
let expression = '';
let previousKey = '';
let previousCalculation = '';
KEYS.forEach((key) => {
  key.addEventListener('click', () => {
    if (!Number.isNaN(Number(key.innerHTML)) || key.innerHTML === '.') {
      expression += key.innerHTML;
    }
    if (key.innerHTML === '(') {
      expression += `${key.innerHTML} `;
    }
    if (key.innerHTML === ')') {
      expression += ` ${key.innerHTML}`;
    }
    if (OPERATORS.includes(key.innerHTML)) {
      if (key.innerHTML === '-') {
        if (previousKey === '' || OPERATORS.includes(previousKey) || previousKey === '(') {
          expression += key.innerHTML;
        } else {
          expression += ` ${key.innerHTML} `;
        }
      } else {
        expression += ` ${key.innerHTML} `;
      }
    }
    if (key.innerHTML === '=') {
      expression = evaluateExpression(expression);
      previousCalculation = expression;
    }
    if (key.innerHTML === 'AC') {
      expression = '';
    }
    if (key.innerHTML === 'CE') {
      expression = previousCalculation;
    }
    previousKey = key.innerHTML;
    DISPLAY_TEXT.innerHTML = expression;
  });
});
