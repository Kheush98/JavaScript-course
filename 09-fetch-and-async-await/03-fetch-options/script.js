function createPost(post) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: post.title,
      body: post.body,
      userId: post.id
    }),
    headers: {
      'Content-Type': 'application/json', 
      token: 'abcd123'
    }
  }).then(response => response.json())
    .then(data => console.log(data));
}

createPost({
  title: 'My last Post',
  body: 'This is my post from JSONPlaceholder',
  id: 45
})