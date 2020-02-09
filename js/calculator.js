import evaluateExpression from "./js/evaluateExpression.js/index.js";

let expression = "";
const operators = /\+|\-|\*|\//;
const keys = document.querySelectorAll( ".key" );
const text = document.querySelector( ".displayText" );
keys.forEach( key => {
  key.addEventListener( "click", () => {
    if ( key.innerHTML != "=" && !operators.test( key.innerHTML ) ) 
      expression += key.innerHTML;
    if ( operators.test( key.innerHTML ) )
      expression += " " + key.innerHTML + " ";
    if ( key.innerHTML === "=" ) 
      expression = evaluateExpression( expression );
    if ( key.innerHTML === "C" ) 
      expression = "";
    text.innerHTML = expression;
  });
});
