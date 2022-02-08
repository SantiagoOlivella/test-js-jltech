import { cleanConsole, createAll } from "./data";
const companies = createAll();
const business = createAll();

cleanConsole(5, companies);

const contadorSize = [];
let size = 0;
const contadorAverage = [];
let SumaAverage = 0;
let average = 0;
const contadorCar = [];
const contadorAverageWithCar=[]
let SumaContadorAverageWithCar = 0;
let averageWithCar=0

export function changeInCompanies() {
  business.forEach((companies) => {
    contadorSize.push(companies.usersLength);
    companies.users.forEach((user) => {
      if (user.car) {
        contadorCar.push(user);
        contadorAverageWithCar.push(user.age)
      }
      contadorAverage.push(user.age);
    });
  });
}
changeInCompanies();

for (let i = 0; i < contadorSize.length; i++) {
  size = size + contadorSize[i];
}

for (let i = 0; i < contadorSize.length; i++) {
  SumaAverage = SumaAverage + contadorSize[i];
}
average = SumaAverage / contadorSize.length;

const hasCar = contadorCar.length;

for (let i = 0; i < contadorAverageWithCar.length; i++) {
    SumaContadorAverageWithCar = SumaContadorAverageWithCar + contadorAverageWithCar[i];
  }
  averageWithCar = SumaContadorAverageWithCar / contadorAverageWithCar.length;


const newObjet = {
  size,
  average,
  hasCar,
  averageWithCar,
};
console.log("---- SOLUTION EXAMPLE 4 --- ", newObjet);

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Use la función creada en el ejemplo 4 para crear una nueva función tomando
// como parámetro la variable "companies" y devuelve un nuevo objeto con los
// siguientes atributos:
//     'size' => total de "users"
//     'average' => edad promedio de "users"
//     'hasCar' => total de "users" propietarios de un carro
//     'averageWithCar' => edad promedio de los "users" con un carro

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Use the function created in example 4 to create a
// new function taking as parameter the "companies" variable and returning
// a new object with the following attributes:
//     'size' => number of "users"
//     'average' => average age of "users"
//     'hasCar' => number of "users" owning a car
//     'averageWithCar' => average age of users with a car.
