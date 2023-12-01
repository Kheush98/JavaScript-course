const img = document.querySelector('img');

let start;
let done = false;

function step(timestamp) {
    if (start === undefined) {
        start = timestamp;
    }

    const elapsed = timestamp - start;

    img.style.transform = `translateX(${elapsed / 10}px) rotate(${elapsed / 5}deg)`;

    if (elapsed > 5000) {
        done = true;
    }

    if (done) {
        return;
    }

    requestAnimationFrame(step);
}

requestAnimationFrame(step);