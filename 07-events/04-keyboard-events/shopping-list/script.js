const itemInput = document.querySelector('#item-input');

const onKeyPress = e => {
  console.log('keyPress event')
};
const onKeyUp = e => {
  console.log('keyup event')
};
const onKeyDown = e => {
  // key
  if (e.key === 'Enter') {
    alert('You pressed enter')
  }

  // keyCode
  if (e.key === 13) {
    alert('You pressed enter')
  }

  if (e.code === 'Digit1') {
    console.log('You pressed 1')
  }

  if (e.repeat) {
    console.log('You are holding down ' + e.key)
  }

  console.log('Shift ' + e.shiftKey)
  console.log('Control ' + e.ctrlKey)
  console.log('Alt ' + e.altKey)
}; 

// itemInput.addEventListener('keypress', onKeyPress)
// itemInput.addEventListener('keyup', onKeyUp)
itemInput.addEventListener('keydown', onKeyDown)