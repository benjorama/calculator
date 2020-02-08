/**
 * Return the result of an operation on two numbers.
 * @param {String} operation 
 * @param {number} a 
 * @param {number} b
 */
export default function operate( operation, a, b ) {
  let value = null;
  if ( operation === "+" )
    value =  add( a, b );
  if ( operation === "-")
    value = subtract( a, b );
  if ( operation === "*" )
    value = multiply( a, b );
  if ( operation === "/" ) 
    value = divide( a, b );
  return value;
}

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
