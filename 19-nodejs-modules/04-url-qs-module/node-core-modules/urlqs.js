const url = require('url'); 
const queryString = require('querystring');

// url.parse()
const myUrl = url.parse('https://example.com:80/listing?id=1000&preminium=true');
console.log(myUrl);

// url.format()
const myUrl2 = url.format({
  protocol: 'https',
  hostname: 'www.example.com',
  pathname: '/listing',
  query: {
    id: 1000,
    preminium: true
  }
});

console.log(myUrl2);

// queryString.parse()
const myQs = 'year=2024&month=january&day=20';
const q = queryString.parse(myQs);

console.log(q);
console.log(q.month);

// queryString.stringify()
const myQs2 = queryString.stringify({
  year: 2024, 
  month: 'january',
  day: '20'
});

console.log(myQs2);