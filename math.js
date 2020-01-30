/**
 * Return the sum of two numbers.
 * @param {number} a 
 * @param {number} b 
 */
function add( a, b ) {
  return a + b;
}

/**
 * Return the difference of two numbers. 
 * @param {number} a 
 * @param {number} b 
 */
function subtract( a, b ) {
  return a - b;
}

/**
 * Return the product of two numbers.
 * @param {number} a 
 * @param {number} b 
 */
function multiply( a, b ) {
  return a * b;
}

/**
 * Return the quotient of two numbers. 
 * @param {number} a 
 * @param {number} b 
 */
function divide( a, b ) {
  return a / b;
}

/**
 * Returns the result of an operation on two numbers.
 * @param {String} operation 
 * @param {number} a 
 * @param {number} b
 */
function operate( operation, a, b ) {
  if ( operation === "+" )
    return add( a, b );
  if ( operation === "-")
    return subtract( a, b );
  if ( operation === "*" )
    return multiply( a, b );
  if ( operation === "/" ) 
    return divide( a, b );
}