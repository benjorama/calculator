let a = "";
let b = "";
let operator = "";
let firstOperand = true;

function initKeys() {
  const keys = document.querySelectorAll( ".key" );
  const text = document.querySelector( ".displayText" );
  const operators = /\+|\*|\/|\-|\=/;
  keys.forEach( element => {
    element.addEventListener( "click", () => {
      if ( !operators.test( element.innerHTML ) && firstOperand )
        a += element.innerHTML;
      else if ( !operators.test( element.innerHTML ) && !firstOperand )
        b += element.innerHTML;
      else {
        if ( element.innerHTML != "=") {
          operator += element.innerHTML;
          firstOperand = false;
        } else
          console.log( b );
      }
      text.innerHTML = a + operator + b;
    });
  });
}

initKeys();