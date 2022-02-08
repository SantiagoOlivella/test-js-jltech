import { cleanConsole, createAll } from "./data";
import { changeInUser, changeInCompanies } from "./example-1";
const companies = createAll();
const business = createAll();

cleanConsole(3, companies);

console.log("---- SOLUTION EXAMPLE 3 --- ", business);

business.forEach((companies) => {
  companies.users.forEach((user) => {
    changeInUser(user);
    const word = user.firstName;
    const validationCapitalWord =
      word.charAt(0) === word.charAt(0).toUpperCase();
    const result = () => {
      if (validationCapitalWord === true) {
        return true;
      }
      return false;
    };

    console.log(
      "¿Todos los nombres y apellidos de los users están ok?",
      result()
    );
  });
});

business.forEach((dataCompanies) => {
  changeInCompanies(dataCompanies);
  const word = dataCompanies.name;
  const validationCapitalWord = word.charAt(0) === word.charAt(0).toUpperCase();
  const result = () => {
    if (validationCapitalWord === true) {
      return true;
    }
    return false;
  };

  console.log("¿Todos los nombres de las companies están ok?", result());
});

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un booleano que valida que todos los nombres de las empresas y los atributos
// "firstName" y "lastName" de "users" están en mayúsculas.
// Debes probar la operación de esta función importando la función creada
// en el "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a boolean validating that all the names of the companies and the attributes "firstName"
// and "lastName" of "users" are capitalized. You must test the operation
// of this function by importing the function created for "example-1.js"
