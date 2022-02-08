import { createAll, cleanConsole } from "./data";
const companies = createAll();
const business = createAll();

cleanConsole(1, companies);

console.log("----SOLUTION EXAMPLE 1 --- ", business);

//Cambio en user del valor undefined y se agrega mayus en el nombre y el apellido

export function changeInUser(user) {
  if (user !== undefined) {
    {
      user.age === undefined ? (user.age = "") : "";
    }
    {
      user.car === undefined ? (user.car = "") : "";
    }
    {
      user.firstName === undefined
        ? (user.firstName = "")
        : (user.firstName =
            user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1));
    }
    {
      user.id === undefined ? (user.id = "") : "";
    }
    {
      user.lastName === undefined
        ? (user.lastName = "")
        : (user.lastName =
            user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1));
    }
  }
}

business.forEach((companies) => {
  companies.users.forEach((user) => {
    changeInUser(user);
  });
});

//Primera letra en mayus de cada company

export function changeInCompanies(dataCompanies) {
  if (dataCompanies !== undefined) {
    dataCompanies.name =
      dataCompanies.name.charAt(0).toUpperCase() + dataCompanies.name.slice(1);
  }
}

business.forEach((dataCompanies) => {
  changeInCompanies(dataCompanies);
});

//Orden de los users por el alfabeto

business.forEach((userOrden) => {
  userOrden.users.sort((a, b) => {
    if (a.firstName < b.firstName) {
      return -1;
    }

    if (a.firstName > b.firstName) {
      return 1;
    }
    return 0;
  });
});

business.sort((a, b) => {
  if (a.users.length < b.users.length) {
    return 1;
  }
  if (a.users.length > b.users.length) {
    return -1;
  }
  return 0;
});

const change = () => {
  changeInUser();
  changeInCompanies();
};

change();

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando la variable "companies" como parámetro y reemplazando
// todos los valores "undefined" en "usuarios" por un string vacío.
// El nombre de cada "company" debe tener una letra mayúscula al principio, así como
// el apellido y el nombre de cada "user".
// Las "companies" deben ordenarse por su total de "user" (orden decreciente)
// y los "users" de cada "company" deben aparecer en orden alfabético.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the variable "companies" as a parameter and replacing
// all values "undefined" in "users" by an empty string.
// The name of each "company" must have a capital letter at the beginning as well as
// the last name and first name of each "user".
// The "companies" must be sorted by their number of "user" (decreasing order)
// and the "users" of each "company" must be listed in alphabetical order
