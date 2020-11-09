/**
 * Object Destructuring
 */

// const person = {
//   name: "Marcos",
//   age: 19,
//   location: {
//     city: "Cuiabá",
//     temp: 45
//   }
// };

// const { name = "Usuário", age } = person;
// const { city, temp: temperature } = person.location;

// console.log(`${name} tem ${age} anos.`);
// console.log(`Está fazendo ${temperature}°C em ${city}`)

// const book = {
//   title: "Ego is the Enemy.",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;
// console.log(publisherName);


/**
 * Array Destructuring
 */

const address = ["Av. Senador Filinto Muller, 1094", "Cuiabá", "Mato Grosso", "78043-400"];
const [, yourCity, yourState = "Estado"] = address;       // lista ordenada

console.log(`Você está em ${yourCity}, ${yourState}`);


const item = ["Coffe (hot)", "$2.00", "$2.50", "$2.75"];
const [itemName, , mediumPrice] = item;

console.log(`O ${itemName} médio custa ${mediumPrice}`);