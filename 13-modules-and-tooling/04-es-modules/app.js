import { capitalizeWords, makeMoney } from "./modules/utils.js";
import Person from "./modules/Person.js";

console.log(capitalizeWords("hello world"));
console.log(makeMoney(100));

const p = new Person('Cheikh', 25);

p.greet();