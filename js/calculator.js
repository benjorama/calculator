import evaluateExpression from "./evaluateExpression.js";

let expression = "";
let previousKey = "";
const operators = /\+|\-|\*|\//;
const keys = document.querySelectorAll( ".key" );
const text = document.querySelector( ".displayText" );
keys.forEach( key => {
  key.addEventListener( "click", () => {
    if ( key.innerHTML != "=" && !operators.test( key.innerHTML ) ) 
      expression += key.innerHTML;
    if ( operators.test( key.innerHTML ) && !operators.test( previousKey ) )
      expression += " " + key.innerHTML + " ";
    if ( key.innerHTML === "=" ) 
      expression = evaluateExpression( expression );
    if ( key.innerHTML === "C" ) 
      expression = "";
    previousKey = key.innerHTML;
    text.innerHTML = expression;
  });
});
