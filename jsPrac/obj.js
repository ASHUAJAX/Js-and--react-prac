// 1. Creating Objects

//using object literals
const obj = {
    name: "Ashu",
    age: 21,
};

// //Using new Object()
// const objViaNew = new Object({name:"Ashu",lastName:"jha"});
// objViaNew.age = "24";
// console.log(objViaNew);

// //using object factory functions
// function factoryFunc(name,age){
//  return {name,age};
// }
// let factoryObj=factoryFunc("aj","32");
// console.log(factoryObj);

// //Object Constructor Function
// function User(name,age){
//     this.name = name;
//     this.age = age;
// }
// const user = new User("jacky",43);
// console.log(user);


// 2. Adding and Updating Properties

// Directly
const objDirect = {};
objDirect.city = "delhi";
objDirect.place = "Taj Hotel"


// // Using Bracket Notation
objDirect['city'] = "UP";
objDirect['place'] = "Lucknow";


// 3. Deleting Properties
// objDirect['city'] = "UP";
// delete objDirect.city;


// 4. Accessing Properties

// //using dot notation
// console.log(objDirect.city);

// //Bracket Notation
// console.log(objDirect['place']);

// 5. Checking Property Existence

// Using in Operator
// console.log("place" in objDirect);

//Using hasOwnProperty
// console.log(objDirect.hasOwnProperty("place"));

// 6. Looping through Properties

// for...in Loop
// for(let key in obj){
//     console.log(obj[key]);
// }

// Using Object.keys
// Object.keys(obj).forEach(key => {
//     console.log(key, obj[key]);
//   });
  

// Using Object.entries
// Object.entries(obj).map(([key,value])=>{
//     console.log(key , value);
// });

// 7. Cloning Objects

// Using Spread Operator (shalow copy)
// const objCopy = {...obj};
// console.log(objCopy);

//Using Object.assign (shalow copy)
let objLatest = {place:"aj"}
const objAssignVal = Object.assign(objLatest,obj);
objLatest.place = "aj";
// console.log(objAssignVal);

//Deep Cloning with JSON (for non-circular objects):
const objDeep = JSON.parse(JSON.stringify(obj));
objDeep.name = "aj";
// console.log(objDeep.name);

// 8. Merging Objects

// Using Spread Operator:
// const newObj = { ...obj, ...anotherObj };

// Using Object.assign:
// const newObj = Object.assign({}, obj, anotherObj);

// 9. Object Freezing and Sealing 

// Freezing (Prevents Adding/Deleting/Modifying):
// Object.freeze(obj);
// obj.place="delhi";
// delete obj.age;
// obj.name="aj";
// console.log(obj);

//Sealing (Prevents Adding/Deleting, Allows Modifying):
// Object.seal(obj);
// obj.place="delhi";
// delete obj.age;
// obj.name="aj";
// console.log(obj);

// 10. Getting Object Properties and Values

// Keys: Returns an array of keys.
// const keys = Object.keys(obj);
// console.log(keys);

// Values: Returns an array of values.
// const values = Object.values(obj);
// console.log(values);

// Entries: Returns an array of [key, value] pairs
// const entries = Object.entries(obj);
// console.log(entries); 

//11. Destructuring
// Extracting properties into variables:
const { name, age } = obj;
// console.log( name, age);

// Object.defineProperty: Adds a property with specific descriptors
const customObj = {}
Object.defineProperty(customObj, "country", { value: "India", writable: true,enumerable: true  });
console.log(customObj);

// Object.values(obj).map(val=>console.log("value",val));




