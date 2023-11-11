const form = document.querySelector('#item-form')

// Method 1
function onSubmit (e) {
  e.preventDefault();

  const item = document.querySelector('#item-input').value
  const priority = document.querySelector('#priority-input').value

  if (item.trim() === '' || priority === '0') {
    alert('Please fill in all fields')
    return
  }
  console.log(item, priority)
}

// Method 2
function onSubmit2 (e) {
  e.preventDefault()
  const formData = new FormData(form)

  const item = formData.get('item')
  const priority = formData.get('priority')

  console.log(item, priority)

  // Other way to do
  /*const entries = formData.entries()

  for (const entry of entries) {
    console.log(entry[1])
  } */
}

form.addEventListener('submit', onSubmit2)