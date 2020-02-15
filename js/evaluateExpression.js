import operate from './operate';

/**
 * Array of supported operators.
 */
const OPERATORS = ['+', '-', '*', '/'];

/**
* Return the precedence of an operator.
* @param {string} operator
*/
function getPrecedence(operator) {
  if (operator === '*' || operator === '/') {
    return 2;
  }
  if (operator === '+' || operator === '-') {
    return 1;
  }
  return 0;
}

function comparePrecedence(operatorA, operatorB) {
  return getPrecedence(operatorA) - getPrecedence(operatorB);
}

function hasNextOperator(operatorStack, token) {
  const TOP_OF_STACK = operatorStack[operatorStack.length - 1];
  if (operatorStack.length > 0) {
    if (TOP_OF_STACK !== '(' && comparePrecedence(token, TOP_OF_STACK) <= 0) {
      return true;
    }
  }
  return false;
}

/**
 * Return an array of tokens in postfix order.
 * @param {string} infixExpression
 */
function convertToPostfix(infixExpression) {
  const TOKENS = infixExpression.split(' ');
  const POSTFIX_ARRAY = [];
  const OPERATOR_STACK = [];
  TOKENS.forEach((token) => {
    if (!OPERATORS.includes(token) && token !== '(' && token !== ')') {
      POSTFIX_ARRAY.push(token);
    }
    if (OPERATORS.includes(token)) {
      if (OPERATOR_STACK.length === 0 || OPERATOR_STACK[OPERATOR_STACK.length - 1] === '(') {
        OPERATOR_STACK.push(token);
      } else {
        while (hasNextOperator(OPERATOR_STACK, token)) {
          POSTFIX_ARRAY.push(OPERATOR_STACK.pop());
        }
        OPERATOR_STACK.push(token);
      }
    }
    if (token === '(') {
      OPERATOR_STACK.push(token);
    }
    if (token === ')') {
      while (OPERATOR_STACK.length > 0 && OPERATOR_STACK[OPERATOR_STACK.length - 1] !== '(') {
        POSTFIX_ARRAY.push(OPERATOR_STACK.pop());
      }
      OPERATOR_STACK.pop();
    }
  });
  for (let i = 0; i <= OPERATOR_STACK.length; i += 1) {
    POSTFIX_ARRAY.push(OPERATOR_STACK.pop());
  }
  return POSTFIX_ARRAY;
}

/**
 * Return the calculation of a postfix expression.
 * @param {Array} POSTFIX_ARRAY
 */
function evaluatePostfix(POSTFIX_ARRAY) {
  const CALCULATION_STACK = [];
  POSTFIX_ARRAY.forEach((token) => {
    if (!OPERATORS.includes(token)) {
      CALCULATION_STACK.push(token);
    }
    if (OPERATORS.includes(token)) {
      const A = CALCULATION_STACK.pop();
      const B = CALCULATION_STACK.pop();
      const RESULT = operate(token, Number(B), Number(A));
      CALCULATION_STACK.push(RESULT);
    }
  });
  return CALCULATION_STACK.pop();
}

/**
 * Return the value of an infix expression.
 * @param {string} expression
 */
export default function evaluateExpression(expression) {
  return evaluatePostfix(convertToPostfix(expression));
}
