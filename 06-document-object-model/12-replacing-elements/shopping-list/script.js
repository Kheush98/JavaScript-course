// replaceWith() Method
// function replaceFirstItem() {
//   const firstItem = document.querySelector('li:first-child');

//   const li = document.createElement('li');
//   li.textContent = 'Replaced First';

//   firstItem.replaceWith(li);
// }

// // OuterHTML Property
// function replaceSecondItem() {
//   const secondItem = document.querySelector('li:nth-child(2)');

//   secondItem.outerHTML = '<li>Replaced Second</li>';
// }

// // Replace All Items
// function replaceAllItems() {
//   const lis = document.querySelectorAll('li');

//   // lis.forEach((item, index) => {
//   //   // item.outerHTML = '<li>Replace All</li>';
//   //   if (index === 1) {
//   //     item.innerHTML = 'Second Item';
//   //   } else {
//   //     item.innerHTML = 'Replace All';
//   //   }
//   // });

//   lis.forEach(
//     (item, index) =>
//       (item.outerHTML = index === 1 ? '<li>Second Item</li>' : '<li>Item</li>')
//   );
// }

// replaceChild() Method
function replaceChildHeading() {
  const header = document.querySelector('header');
  const h1 = document.querySelector('header h1');

  const h2 = document.createElement('h2');
  h2.id = 'app-title';
  h2.textContent = 'Shopping List';
  header.replaceChild(h2, h1);
}

function replaceFirstItem() {
  const fisrst = document.querySelector('li:first-child');

  const item = document.createElement('li');
  item.textContent = 'Test'

  const icon = document.createElement('i')
  icon.className = 'fa-solid fa-xmark'

  const button = document.createElement('button')
  button.className = 'remove-item btn-link text-red'

  button.appendChild(icon)

  item.appendChild(button)

  fisrst.replaceWith(item);
}

function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)')
  secondItem.outerHTML = '<li>Test 2</li>'
}

function replaceAllItems() {
  const items = document.querySelectorAll('li');

  items.forEach((item, index) => index === 1 ? item.innerrHTML = 'Orange' : item.innerHTML = 'item')
}
replaceFirstItem();
replaceSecondItem();
replaceAllItems();
// replaceChildHeading();
