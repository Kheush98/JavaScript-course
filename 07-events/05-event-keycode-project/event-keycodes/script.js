'use strict';
// Method 1
window.addEventListener('keydown', e => {
  const div = document.querySelector('#insert')
  console.log('in keycode:::')
  div.innerHTML = '';

  const key = document.createElement('div');
  key.className = 'key'
  key.textContent = e.key == ' ' ? 'Space' : e.key;
  const smallKey = document.createElement('small')
  smallKey.textContent = 'e.key';
  key.appendChild(smallKey)

  div.appendChild(key);

  const keyCode = document.createElement('div')
  keyCode.className = 'key'
  keyCode.textContent = e.keyCode;
  const smallKeyCode = document.createElement('small')
  smallKeyCode.textContent = 'e.keyCode';
  keyCode.appendChild(smallKeyCode)

  div.appendChild(keyCode);

  const code = document.createElement('div')
  code.className = 'key'
  code.textContent = e.code;
  const smallCode = document.createElement('small')
  smallCode.textContent = 'e.code';
  code.appendChild(smallCode)

  div.appendChild(code);

});

// Method 2
// function showKeyCodes(e) {
//   const insert = document.getElementById('insert');
//   insert.innerHTML = '';

//   const keyCodes = {
//     'e.key': e.key === ' ' ? 'Space' : e.key,
//     'e.keyCode': e.keyCode,
//     'e.code': e.code,
//   };

//   for (let key in keyCodes) {
//     const div = document.createElement('div');
//     div.className = 'key';
//     const small = document.createElement('small');

//     const keyText = document.createTextNode(key);
//     const valueText = document.createTextNode(keyCodes[key]);

//     small.appendChild(keyText);
//     div.appendChild(valueText);
//     div.appendChild(small);

//     insert.appendChild(div);
//   }
// }

// window.addEventListener('keydown', showKeyCodes);


