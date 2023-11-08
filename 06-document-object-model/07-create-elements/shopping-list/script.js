const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');

// div.innerText = 'Hello World';

const text = document.createTextNode('Hello World');
div.appendChild(text);

// document.body.appendChild(div);

// document.querySelector('ul').appendChild(div);

const li = document.createElement('li');

const item = document.createTextNode('Banana');
li.appendChild(item);

document.querySelector('ul').appendChild(li);

console.log(li);