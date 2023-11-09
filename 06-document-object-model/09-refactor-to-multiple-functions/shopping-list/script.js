function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createButton('remove-item btn-link text-red');

  li.appendChild(button);

  document.querySelector('.items').appendChild(li);
}

function createButton(classe) {
  const button = document.createElement('button');
  button.className = classe;
  button.appendChild(createIcon('fa-solid fa-xmark'));
  return button;
}

function createIcon(classe) {
  const icon = document.createElement('i');
  icon.className = classe;
  return icon;
}
createNewItem('Cheese');
createNewItem('Sauce');
createNewItem('Pinneapple');
