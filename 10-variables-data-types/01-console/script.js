console.log(100);
console.log("Hello world!");
console.log(100, "Hello world!", true);

const x = 100; 
console.log(x);

console.error("Alert!");
console.warn("Warning!");

console.table({name: "Cheikh", email: "cheikh@gmail"});

console.group('simple');
console.log(x);
console.error("Alert!");
console.warn("Warning!");
console.table({name: "Cheikh", email: "cheikh@gmail"});
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cHello world!', styles);