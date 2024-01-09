async function getUser() {
    const response = await fetch('https://api.github.com/users/kheush98');
    const data = await response.json();

    console.log(data);
}

getUser();