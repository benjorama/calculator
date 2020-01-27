function initKeypad() {
  let keypad = document.querySelector( ".keypad" );
  let numberKeys = initNumberKeys();
  keypad.appendChild( numberKeys );
}

function initNumberKeys() {
  const SIZE = 3;
  const TOP_LEFT = 7;
  const numberKeys = document.createElement( "div" );
  numberKeys.setAttribute( "class", "numberKeys" );
  for ( let i = 0; i < SIZE; i++ ) {
    for ( let j = 0; j < SIZE; j++ ) {
      let key = createKey( TOP_LEFT - ( SIZE * i ) + j );
      numberKeys.appendChild( key );
    }
  }
  return numberKeys;
}

function createKey( string ) {
  const key = document.createElement( "div" );
  key.textContent = string;
  key.classList.add( string );
  return key;
}

initKeypad();