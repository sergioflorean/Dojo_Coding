const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
      {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
      },
      {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
      }
    ],
    createdAt: 1543945177623
  };
  
  const { firstName, lastName, email, ...attributes } = person;

  const personCopy = { ...person };
let hola = personCopy === person
console.log("🚀 ~ file: script.js:26 ~ hola:", hola)
// => false
let adios = personCopy.addresses === person.addresses
console.log("🚀 ~ file: script.js:29 ~ adios:", adios)
// => true



  //console.log("🚀 ~ file: script.js:21 ~ person:", person)
  //console.log("🚀 ~ file: script.js:24 ~ personCopy:", personCopy)




  