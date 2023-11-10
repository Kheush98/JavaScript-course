const img = document.querySelector('img');

const onClick = () => console.log('one click');
const onDoubleClick = () => {
  if (document.body.style.backgroundColor !== 'gray') {
    document.body.style.backgroundColor = 'gray'
    document.body.style.color = 'white'
  } else {
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
  }
};

const onRightClick = () => console.log('Event Right click');

const onMouseDown = () => console.log('mouse down event');
const onMouseUp = () => console.log('mouse up event');
const onMouseWheel = () => console.log('mouse wheel event');
const onMouseOver = () => console.log('mouse over event');
const onMouseOut = () => console.log('mouse out event');
const onDragStart = () => console.log('drag start event');
const onDrag = () => console.log('drag event');
const onDragEnd = () => console.log('drag end event');
// Event listeners
img.addEventListener('click', onClick);
img.addEventListener('dblclick', onDoubleClick);
img.addEventListener('contextmenu', onRightClick);
img.addEventListener('mousedown', onMouseDown);
img.addEventListener('mouseup', onMouseUp);
img.addEventListener('wheel', onMouseWheel);
img.addEventListener('mouseover', onMouseOver);
img.addEventListener('mouseout', onMouseOut);
img.addEventListener('dragstart', onDragStart);
img.addEventListener('drag', onDrag);
img.addEventListener('dragend', onDragEnd);