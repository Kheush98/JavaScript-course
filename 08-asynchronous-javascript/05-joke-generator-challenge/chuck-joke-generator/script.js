const xhr = new XMLHttpRequest()
const getBtn = document.getElementById('joke-btn')
const div = document.getElementById('joke')

function getRandomJoke() {
  div.innerHTML = 'Loading...'
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random')

  xhr.onreadystatechange = function() {
    if (this.readyState === 4) {
      if(this.status === 200) {
        const joke = JSON.parse(this.responseText)

        div.innerHTML = joke.value

      } else {
        div.innerHTML = 'Something went wrong !!'
      }
    } 
  }

  xhr.send()
}

getBtn.addEventListener('click', getRandomJoke)
document.addEventListener('DOMContentLoaded', getRandomJoke)