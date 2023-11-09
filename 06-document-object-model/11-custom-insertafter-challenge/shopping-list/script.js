function insertAfter(newEl, existingEl) {
  existingEl.insertAdjacentElement('afterEnd', newEl)

}

const li = document.createElement('li');
li.textContent = 'Good job';

const firstItem = document.querySelector('li:nth-child(1)');

insertAfter(li, firstItem);