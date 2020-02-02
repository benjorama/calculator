let number = '';

function initKeys() {
  const keys = document.querySelectorAll( ".key" );
  keys.forEach( element => {
    element.addEventListener( "click", () => {
      const text = document.querySelector( ".displayText" );
      number += element.innerHTML;
      text.innerHTML = number;
    });
  });
}

initKeys();