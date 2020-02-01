let number = '';

function initKeys() {
  const keys = document.querySelectorAll( ".key" );
  keys.forEach( element => {
    element.addEventListener( "click", () => {
      const display = document.querySelector( ".display" );
      number += element.innerHTML;
      display.innerHTML = number;
    });
  });
}

initKeys();