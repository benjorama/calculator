let a = "";
let operator = "";

function initKeys() {
  const keys = document.querySelectorAll( ".key" );
  const operators = /\+|\*|\/|\-/;
  keys.forEach( element => {
    element.addEventListener( "click", () => {
      const text = document.querySelector( ".displayText" );
      if ( !operators.test( element.innerHTML ) )
        a += element.innerHTML;
      else {
        operator += element.innerHTML;
      }
      text.innerHTML = a + operator;
    });
  });
}

initKeys();