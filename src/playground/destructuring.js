

// const person = {
//     name: 'Andrew',
//     age: 26,
//     location : {
//         city : 'Philly',
//         temp:26
//     }
// };
// const {name,age} = person;

// console.log(`${name} is ${age}`)

// const book  = {
//     title : 'Ego is the Enemy',
//     author : 'Ryan Holiday',
//     publisher : {
//         name : 'Penguin'
//     }

// };

// var { name:publisherName = "Self Published" } = book.publisher;

// console.log(publisherName);

//ARRAY DESTRUCTURING

const [street,city,...rest] = ['1299 S Juniper street','Philadelphia', 'Pennysylvania','19147'];
console.log(`You are in ${street} ${city}. ${rest}`)

const [itemName,,largeCoffee]  = ['Coffee(hot)' , '$2.00','$3.00','$4.00']

console.log(`A medium ${itemName} costs ${largeCoffee}`)

