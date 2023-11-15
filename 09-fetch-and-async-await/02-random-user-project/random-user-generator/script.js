const userBtn = document.getElementById('generate');
const userInfo = document.getElementById('user');

function generateUser() {
  showSpinner();
  fetch('https://randomuser.me/api')
    .then(response => response.json())
    .then(data => {
      hideSpinner()
      getData(data)})
}

function getData(user) {
  userInfo.innerHTML = '';
  if (user.results[0].gender === 'female') {
    document.body.style.backgroundColor = 'rebeccapurple'
  } else {
    document.body.style.backgroundColor = 'steelblue'
  }

  const info = document.createElement('div');
  const picture = document.createElement('div');

  info.innerHTML = `<p><strong>Name : </strong>${user.results[0].name.first} ${user.results[0].name.last}</p>
                    <p><strong>Email : </strong>${user.results[0].email}</p>
                    <p><strong>Phone : </strong>${user.results[0].phone}</p>
                    <p><strong>Location : </strong>${user.results[0].location.city} ${user.results[0].location.country}</p>
                    <p><strong>Age : </strong>${user.results[0].dob.age}</p>`;

  const img = document.createElement('img');
  img.setAttribute('src', user.results[0].picture.large);
  img.classList.add('rounded-full')
  img.classList.add('w-48')
  img.classList.add('h-48')
  picture.appendChild(img);

  userInfo.appendChild(picture);
  userInfo.appendChild(info);
  userInfo.style.display = 'flex';
  userInfo.style.justifyContent = 'space-around';
}

function showSpinner() {
  document.querySelector('.spinner').style.display = 'block'
}

function hideSpinner() {
  document.querySelector('.spinner').style.display = 'none'
}

userBtn.addEventListener('click', generateUser);
document.addEventListener('DOMContentLoaded', generateUser);