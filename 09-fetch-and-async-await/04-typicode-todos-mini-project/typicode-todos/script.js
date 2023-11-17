const button = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');

function onSubmit(e) {
  e.preventDefault();

  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false
  }

  fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-Type': 'application/json',
      token: 'abcd123'
    }
  }).then(response => response.json())
    .then(data => {displayTodos(data)
    });

    e.target.firstElementChild.value = '';
}

function getTodos() {
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(reponse => reponse.json())
    .then(data => {
      data.forEach(data => displayTodos(data))
    });
}

function displayTodos(todo) {
    const div = document.createElement('div');
    div.textContent = todo.title;
    div.setAttribute('data-id', todo.id);
    div.classList.add('todo');
    console.log(div.dataset)
    if (todo.completed === true) {
      div.classList.add('done');
    }
    todoList.appendChild(div);

}

function updateTodo(e) {
  if (e.target.classList.contains('todo')) {
    e.target.classList.toggle('done');
    const {id} = e.target.dataset;

    if (e.target.classList.contains('done')) {

      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          completed: true
        }),
        headers: {
          'Content-type': 'application/json'
        },
      }).then(response => response.json())
        .then(data => console.log(data));

    } else {

        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
            completed: false
          }),
          headers: {
            'Content-type': 'application/json'
          },
        }).then(response => response.json())
          .then(data => console.log(data));

    }
  }
}

function deleteTodo(e) {
  if (e.target.classList.contains('todo')) {
    const {id} = e.target.dataset;
    
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
    }).then(response => response.json())
      .then(() => e.target.remove());
  }
}

function init() {
  getTodos();
  button.addEventListener('submit', onSubmit);
  todoList.addEventListener('click', updateTodo);
  todoList.addEventListener('dblclick', deleteTodo);
}

init();