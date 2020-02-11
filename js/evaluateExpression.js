import operate from "./operate.js";

/**
 * Return the value of an infix expression.
 * @param {string} expression 
 */
export default function evaluateExpression( expression ) {
  return evaluatePostfix( convertToPostfix( expression ) );
}

/**
 * List of supported operators.
 */
const operators = ["+", "-", "*", "/"];

/**
 * Return an array of tokens in postfix order. 
 * @param {string} infixExpression 
 */
function convertToPostfix( infixExpression ) {
  let tokens = infixExpression.split( " " );
  let postfixArray = [];
  let stack = [];
  tokens.forEach( token => {
    if ( !operators.includes( token ) && token != "(" && token != ")" ) 
      postfixArray.push( token );
    if ( operators.includes( token ) ) {
      if ( stack.length === 0 || stack[stack.length - 1] === "(" )
        stack.push( token );
      else {
        while ( stack.length > 0 && stack[stack.length - 1] != "(" && 
            getPrecedence( token ) <= getPrecedence( stack[stack.length - 1])) {
          postfixArray.push( stack.pop() );
        }
        stack.push( token );
      }
    }
    if ( token === "(")
      stack.push( token );
    if ( token === ")") {
      while ( stack.length > 0 && stack[ stack.length - 1] != "(") {
        postfixArray.push( stack.pop() );
      }
      stack.pop();
    }
  });
  for ( let i = 0; i <= stack.length; i++ ) {
    postfixArray.push( stack.pop() );  
  }
  return postfixArray;
}


/**
 * Return the calculation of a postfix expression.
 * @param {Array} postfixArray 
 */
function evaluatePostfix( postfixArray ) {
  let stack = [];
  postfixArray.forEach( token => {
    if ( !operators.includes( token ) )
      stack.push( token );
    if ( operators.includes( token ) ) {
      let a = stack.pop();
      let b = stack.pop();
      let result = operate( token, Number( b ), Number( a ) );
      stack.push( result );
    }
  });
  return stack.pop();
}

/**
 * Return the precedence of an operator.
 * @param {string} operator 
 */
function getPrecedence( operator ) {
  if ( operator === "*" || operator === "/")
    return 2;
  if ( operator === "+" || operator === "-")
    return 1;
  return 0;
}
