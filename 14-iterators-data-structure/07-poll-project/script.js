const framework = new Map();

framework.set('React', 0);
framework.set('Vue', 0);
framework.set('Angular', 0);
framework.set('Svelte', 0);
framework.set('Other', 0);

// console.log( typeof framework);
function vote(event) {
    event.preventDefault();

    const choice = document.querySelector("input[name='poll-option']:checked");

    if (!choice) {
        alert('Veuillez faire un choix please');
        return;
    }

    const valeur = choice.value;
    framework.set(valeur, framework.get(valeur) + 1);

    displayVotes();

    document.getElementById('poll-form')
        .querySelectorAll('input, button')
        .forEach(element => element.setAttribute('disabled', true));
}

function displayVotes() {
    const results = document.getElementById('results');
    results.innerHTML = '';
    for (const [option, vote] of framework) {
        const div = document.createElement('div');
        div.classList.add(
            'border-bottom',
            'p-2',
            'd-flex',
            'justify-content-between'
        );
        div.innerHTML = `<strong>${option} :</strong>${vote} votes`
        results.appendChild(div);
    }
}

document.getElementById('poll-form').addEventListener('submit', vote);