import evaluateExpression from "./evaluateExpression.js";

let expression = "";
let previousKey = "";
const operators = ["+", "-", "*", "/"];
const keys = document.querySelectorAll( ".key" );
const text = document.querySelector( ".displayText" );
keys.forEach( key => {
  key.addEventListener( "click", () => {
    if ( key.innerHTML != "=" && !operators.includes( key.innerHTML ) ) {
      if ( key.innerHTML === "(" )
        expression += key.innerHTML + " ";
      else if ( key.innerHTML === ")" )
        expression += " " + key.innerHTML;
      else
        expression += key.innerHTML;
    } 
    if ( operators.includes( key.innerHTML ) ) {
      if ( key.innerHTML === "-" ) {
        if ( previousKey === "" || operators.includes( previousKey ) || previousKey === "(" )
          expression += key.innerHTML;
        else
          expression += " " + key.innerHTML + " ";
      }
      else
        expression += " " + key.innerHTML + " ";
    }
    if ( key.innerHTML === "=" ) 
      expression = evaluateExpression( expression );
    if ( key.innerHTML === "C" ) 
      expression = "";
    previousKey = key.innerHTML;
    text.innerHTML = expression;
  });
});
