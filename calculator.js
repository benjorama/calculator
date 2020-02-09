import evaluateExpression from "./evaluateExpression.js";

let expression = "";
const keys = document.querySelectorAll( ".key" );
const text = document.querySelector( ".displayText" );
keys.forEach( key => {
  key.addEventListener( "click", () => {
    if ( key.innerHTML != "=" ) {
      expression += key.innerHTML + " ";
      text.innerHTML = expression;
    }
    if ( key.innerHTML === "=" ) {
      expression = expression.trim();
      text.innerHTML = evaluateExpression( expression );
    }
    if ( key.innerHTML === "C" ) {
      expression = "";
      text.innerHTML = "";
    }
  });
});
