function initKeypad() {
  let keypad = document.querySelector( ".keypad" );
  keypad.appendChild( initNumberKeys() );
  keypad.appendChild( initOperationKeys() );
}

function initNumberKeys() {
  const SIZE = 3;
  const TOP_LEFT = 7;
  const numberKeys = document.createElement( "div" );
  numberKeys.setAttribute( "class", "numberKeys" );
  for ( let i = 0; i < SIZE; i++ ) {
    for ( let j = 0; j < SIZE; j++ ) {
      numberKeys.appendChild( createKey( TOP_LEFT - ( SIZE * i ) + j ) );
    }
  }
  return numberKeys;
}

function initOperationKeys() {
  const operationKeys = document.createElement( "div" );
  operationKeys.setAttribute( "class", "operationKeys" );
  operationKeys.appendChild( createKey( "/" ) );
  operationKeys.appendChild( createKey( "*" ) );
  operationKeys.appendChild( createKey( "-" ) );
  operationKeys.appendChild( createKey( "+" ) );
  return operationKeys;
}

function createKey( string ) {
  const key = document.createElement( "div" );
  key.textContent = string;
  key.classList.add( string );
  return key;
}

initKeypad();