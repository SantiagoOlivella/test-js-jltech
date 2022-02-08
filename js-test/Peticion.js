import companies from "./example-7";

fetch(companies, {
  method: "PATCH",
})
  .then((element) => {
    console.log(element);
  })
  .catch((err) => {
    console.error(err);
  });
