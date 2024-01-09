const axios = require('axios');

async function getUser() {
  const res = await axios.get('https://api.github.com/users/kheush98');
  console.log(res.data);
}

getUser();