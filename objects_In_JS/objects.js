// Objects: Exercise and details

let person = {
  firstname: "krishna",
  lastname: "sharma",
  age: "27",
  phone: "micromax n1",
};
//const variable is used so that value of an object cannt be change.
console.log(person);
console.log(person.firstname);

const persons = {}; //empty object (MOST COMMON)
//properties
persons.firstname = "krishna";
persons.lastname = "sharma";
persons.age = "27";
persons.phone = "micromax n1";
console.log(persons);
console.log(persons.age);

const perso = new Object(); //empty object with new keyword
//properties
perso.firstname = "krishna";
perso.lastname = "sharma";
perso.age = "27";
perso.phone = "micromax n1";
console.log(perso);
console.log("krishna has " + perso.phone + " .");
console.log("krishna also has " + perso["phone"] + " []");
//Change in property cause change the value of object property also
const x = perso;
x.age = 10;
console.log(perso.age);

//this will change the value of age in person also as person and age are same.
let txt = "";
for (var y in perso) {
  txt += perso[y] + " ";
  console.log(y);
}
perso.nationality = "INDIAN"; //add new property
console.log("NEW PROPERTY ADDED");
console.log(perso);
delete perso.phone; //delete any property
// delete person["age"]; another way.
console.log("PROPERTY DELETED");
console.log(perso);
//object in object Aray in object
myObj = {
  name: "krishna",
  age: "27",
  car: {
    car1: "Ferari",
    car2: "Lamborghini",
    car3: "BMW",
  },
};
//multiple way to get properties of an object.
console.log(myObj.car.car1);
console.log(myObj.car["car2"]);
console.log(myObj['car']["car3"]);
//Nested array and object
const myObj1 = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }
  console.log(myObj1.cars[2]);
  