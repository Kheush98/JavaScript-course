function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Error: Something went wrong');
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

// getData('./movies.json')
//   .then((movies) => {
//     console.log(movies);
//     return getData('./actors.json');
//   })
//   .then((actors) => {
//     console.log(actors);
//     return getData('./directors.json');
//   })
//   .then((directors) => {
//     console.log(directors);
//   })
//   .catch((error) => console.log(error));

async function getAllData() {
  const movies = await getData('./movies.json');
  const actors = await getData('./actors.json');
  const directors = await getData('./directors.json');
  console.log(movies, actors, directors);
}

async function getAllDataWithFetch() {
  const moviesRest = await fetch('./movies.json');
  const movies = await moviesRest.json();

  const actorsRest = await fetch('./actors.json');
  const actors = await actorsRest.json();

  const directorsRest = await fetch('./directors.json');
  const directors = await directorsRest.json();

  console.log(movies, actors, directors);
}

async function getAllDataPromiseAll() {
  const [moviesRest, actorsRest, directorsRest] = await Promise.all([
    fetch('./movies.json'),
    fetch('./actors.json'),
    fetch('./directors.json')
  ]);

  const movies = await moviesRest.json();
  const actors = await actorsRest.json();
  const directors = await directorsRest.json();

  console.log(movies, actors, directors);
}

// getAllData();
// getAllDataWithFetch();
getAllDataPromiseAll();
