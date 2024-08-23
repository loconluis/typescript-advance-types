/**
 * Las tuplas o tuples nos permiten crear un array fuertemente tipado especificando el tipo de dato de cada elemento, así como una cantidad definida de elementos que podrá almacenar.
   Las tuplas no vienen en el conjunto de tipos de datos por defecto de JavaScript
 */

const prices: (number | string)[] = [1, 2, 3, 4, 'da'];

prices.push(1);
prices.push('1');

let user: [string, number, boolean];

user = ['Luis', 28, true];

const [username, age] = user;
console.log('username', username);
console.log('age', age);
