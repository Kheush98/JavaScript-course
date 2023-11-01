'use strict';

//step 1
const libarary = [
    {
        title: 'Love without you',
        author: 'John Doe',
        status: {own: true, reading: false, read: false}
    },
    {
        title: 'Mister lonely',
        author: 'Samantha karma',
        status: {own: true, reading: false, read: false}
    },
    {
        title: 'Une si longue lettre',
        author: 'Mariama Ba',
        status: {own: true, reading: false, read: false}
    }
];

//Step 2
libarary[0].status.read = true;
libarary[1].status.read = true;
libarary[2].status.read = true;

//Step 3
let {title: firstBook} = libarary[0];

//Step 4
const libraryToJSON = JSON.stringify(libarary);

console.log(libraryToJSON)