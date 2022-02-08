import { cleanConsole, createAll } from "./data";

const companies = createAll();
const business = createAll();

const url = "";

cleanConsole(6, companies);

const newObject = {};

export function changeInCompanies() {
  business.forEach((companies) => {
    companies.users.forEach((user) => {
      const concatenados = `${user.firstName}${user.lastName}${user.age}`;
      const car = user.car;
      Object.defineProperty(newObject, JSON.stringify(concatenados), {
        value: car,
        writable: true,
      });
    });
  });
}
changeInCompanies();
console.log("---- SOLUTION EXAMPLE 4 --- ", newObject);

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un nuevo objeto cuyos atributos son la concatenación del apelido, nombre y
// edad de cada "user". Cada atributo debe tener el valor de boolean "car".
// Ver ejemplo a continuación.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a new object whose attributes are the concatenation of the name, first name and
// the age of each user. Each attribute must have the value of boolean "car".
// See example below

// const example = {
//   johnDoe32: true,
//   BernardoMinet45: false,
//   alinaChef23: true,
// };

// console.log(example);

//fetch(newObject, {
//     method: "PUT",
//     body: JSON.stringify({concatenados:"hola"})
//   })
//     .then((response) =>
//       response.status === 304 ? response : response.json()
//     )
//     .catch((err) => {
//       return { error: true, err };
//     });
