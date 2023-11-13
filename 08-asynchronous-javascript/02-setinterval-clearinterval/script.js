// const intervalId = setInterval(myCallaback, 1000)

// function myCallaback() {
//   console.log(new Date())
// }
let intervalId
function startChange() {
  if (!intervalId) {
    intervalId = setInterval(changeColor, 1000)
  }
}

function stopChange() {
  clearInterval(intervalId)
  document.body.style.backgroundColor = 'white'
  console.log('setInterval cancelled')
}

function changeColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16)
  document.body.style.backgroundColor = `#${randomColor}`
}

document.getElementById('start').addEventListener('click', startChange)
document.getElementById('stop').addEventListener('click', stopChange)