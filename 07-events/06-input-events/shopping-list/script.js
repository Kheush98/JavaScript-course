const heading = document.querySelector('h1')
const itemInput = document.querySelector('#item-input')
const priorityInput = document.querySelector('#priority-input')
const checkbox = document.querySelector('#checkbox')

function onInput (e) {
    heading.textContent = e.target.value;
    if (e.target.value.length >= 5) {
        itemInput.style.outlineColor = 'green';
        itemInput.style.outlineWidth = '2px';
        itemInput.style.outlineStyle = 'solid';
    } else {
        itemInput.style.outlineColor = 'red';
        itemInput.style.outlineWidth = '2px';
        itemInput.style.outlineStyle = 'solid';
    }
}

function onChecked (e) {
    heading.textContent = e.target.checked ? 'Checked' : 'Not checked'
}

function onFocus (e) {
    console.log('Input focused')
}

function onBlur (e) {
    itemInput.style.outlineStyle = 'none'
}

itemInput.addEventListener('input', onInput)
priorityInput.addEventListener('change', onInput)
checkbox.addEventListener('input', onChecked)
itemInput.addEventListener('focus', onFocus)
itemInput.addEventListener('blur', onBlur)
