const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'John',
      age: 25
    });
  }, 1000);
});

// promise.then(data => console.log(data));

async function getPromise() {
  const response = await promise;
  console.log(response);
}

async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  console.log(data);
}

const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  console.log(data);
}

// getPromise();
// getUsers();
getPosts();