import { json } from "stream/consumers";

const arr = [
    {
        name: "Ashu",
        age: 21,
    },
    {
        name: "Shubham",
        age: 24,
    },
    {
        name: "Shivam",
        age: 22,
    },
    {
        name: "Yash",
        age: 25,
    },
];

// arr.map((elm,i)=>{
//     console.log(elm.name);
// })

// const filteredArr = arr.filter((elm)=> elm.age > 24 );
// console.log(filteredArr);

// const arrReducedValue = arr.reduce((acc, elm) => {
//     let { name, age } = elm;
//     if (!acc[name]) {
//         acc[name] = age
//     }
//     return acc;
// }, {});
// console.log(arrReducedValue);

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i].name,arr[i].age);
// }

// for(let i = arr.length-1;i >= 0;i--){
//     console.log(arr[i]);
// }

// for(let elm of arr){
//     console.log("for of loop val : ",elm);
// }

// const promiseFunc = async (val) => {

//     const promise = new Promise((res, rej) => {
//         switch (val) {
//             case 1: res("resolved"); break;
//             case 0: res("pending"); break;
//             case 2: rej("rejected"); break;
//             default: rej("defaulted");
//         }
//     })

//     try {
//         const data = await promise;
//         console.info(data);
//     } catch (err) {
//         console.error("err",err);
//     }
// }

// promiseFunc(1);

const fetcherFunc = async (method) => {
    try {
        let resp = null;
        let sendObj = {
            userId: 10,
            id: 100,
            title: "at nam consequatur ea labore ea harum",
            body:
                "cupiditate quo est a modi nesciunt soluta\n" +
                "ipsa voluptas error itaque dicta in\n" +
                "autem qui minus magnam et distinctio eum\n" +
                "accusamus ratione error aut",
        };
        if (method === "get") {
            resp = await fetch("https://jsonplaceholder.typicode.com/posts");
        } else {
            resp = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(sendObj),
            });
        }

        const finalResp = await resp.json();

        console.log(finalResp);
    } catch (err) {
        console.error(err.message);
    }
};
// fetcherFunc("");




class Animal{
    constructor(name,age){
      // console.log(name,age);
      this.name = name,
      this.age = age
    }
  
    dog(){
      console.log("func",this.name,this.age);
    }
  }
  
//   const obeJ = new Animal('ashu',21);
//   obeJ.dog();


  function printName(name,age){
console.log(`hi ${this.name}!, my name is ${name} and ${age} years old`);
  }
  let objTest = {
    name : "Ashu"
  }

// printName.call(obj,"alice",23);
// printName.apply(obj,["alice",24]);
// const bindFunc = printName.bind(objTest,"alice");
// bindFunc(25);

//recursive method
const recurse=(val)=>{
    if(val=1){
        console.log("recurse called");
        recurse(1);
    }
}
// recurse(1);

