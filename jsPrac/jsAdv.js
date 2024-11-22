const students = [
  { name: "Alice", subjects: { English: 85, Math: 90, Science: 88 } },
  { name: "Bob", subjects: { Math: 75, English: 80, Science: 70 } },
  { name: "Charlie", subjects: { Math: 85, English: 90, Science: 92 } },
];

const proceesStudentsMark = () => {
  let obj = {
    studentsAverage: {},
    highestGrade: {},
    toppers: { first: "", second: "", third: "" },
  };

  let totalMarksAllStudentsObj = [];
  students.forEach((elm) => {
    let { name, subjects } = elm;
    let avg;
    let totalMarks = 0;
    let noOfSubject = 0;
    if (!obj.studentsAverage[name]) {
      obj.studentsAverage[name] = 0;
    }

    for (let key in subjects) {
      totalMarks += subjects[key];
      noOfSubject++;
      if (!obj.highestGrade[key]) {
        obj.highestGrade[key] = 0;
      }
      if (obj.highestGrade[key] < subjects[key]) {
        obj.highestGrade[key] = subjects[key];
      }
    }

    totalMarksAllStudentsObj.push({ marks: totalMarks, name });

    obj.studentsAverage[name] = (totalMarks / noOfSubject).toFixed(2);
  });

  let sortedMarks = totalMarksAllStudentsObj.sort((a, b) => b.marks - a.marks);

  obj.toppers.first = sortedMarks[0].name;
  obj.toppers.second = sortedMarks[1].name;
  obj.toppers.third = sortedMarks[2].name;

  console.log(obj);
};
// proceesStudentsMark();
//output
// {
//   "studentsAverage": {
//     "Alice": 87.67,
//     "Bob": 75,
//     "Charlie": 89
//   },
//   "highestGrade": {
//     "Math": 90,
//     "English": 90,
//     "Science": 92
//   }
//   "toppers": {
//    first : "Charlie"
//    second : "Alice"
//     third : "Bob"

//   }
// }

// const obj={
//     name : "Ashu",
//     age:23,
//     props:{
//       name : "Ashu",
//     age:23,
//     }
//   }

//   let result = {};

//   const processObj=(objj,sentKey='')=>{

//     for(let key in objj){
//       let newKey = sentKey ? sentKey+"."+key : key;

//       if(typeof(objj[key]) === "object"){
//         processObj(objj[key],newKey);
//       }
//       else{
//         result[newKey] = objj[key]
//       }

//     }

//   }

//   processObj(obj);
//   console.log(result);

let array = [2, 2, 3, 5, 5, 7]; // Find out the missing and duplicate number.

const missingNumFunc = () => {
  let missingNumArr = [];
  let pushedArr = [];
  let dupliacteNUmArr = [];

  for (let i = 0; i < array.length; i++) {
    let finalNum = i + 1;
    console.log("val", array[i], finalNum);

    if (!pushedArr.includes(array[i])) {
      pushedArr.push(array[i]);
      if (array[i] !== finalNum) {
        missingNumArr.push(finalNum);
      }
    } else {
      dupliacteNUmArr.push(array[i]);
    }
  }
  console.log("missing numbers", missingNumArr); // missing number is 4
  console.log("duplicate numbers", dupliacteNUmArr); // dupliacte number is 5
};

// missingNumFunc();

const data = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Charlie", age: 25 },
  { name: "Alice", age: 30 },
];

// Expected Output:
// {
//   'Alice': 3,
//   'Bob': 1,
//   'Charlie': 1
// }

const desiredOutput = data.reduce((acc, elm) => {
  let { name } = elm;
  if (!acc[name]) {
    acc[name] = 1;
  } else {
    acc[name]++;
  }
  return acc;
}, {});

// console.log(desiredOutput);

const nestedObj = {
  user: {
    name: "Alice",
    address: {
      city: "Wonderland",
      zip: 12345,
    },
  },
  age: 25,
};

// Expected Output:
// {
//   'user.name': 'Alice',
//   'user.address.city': 'Wonderland',
//   'user.address.zip': 12345,
//   'age': 25
// }

let flatObj = {};

const flatObjFunc = (obj, sentkey = null) => {
  for (let key in obj) {
    let newKey = sentkey ? `${sentkey}.${key}` : key;

    if (typeof obj[key] === "object") {
      flatObjFunc(obj[key], key);
    } else {
      flatObj[newKey] = obj[key];
    }
  }
};
// flatObjFunc(nestedObj);
// console.log(flatObj);

//check the count of chars
const countChars = (str) => {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  console.log(obj);
};

// countChars("bobe");

// const obj = { a: 1, b: 2, c: 3 };
// const invertObject = () => {
//     return Object.entries(obj).reduce((acc, [key, value]) => {
//         if (!acc[value]) {
//             acc[value] = key;
//         }
//         return acc;
//     }, {})
// }
// console.log(invertObject(obj)); // Output: { 1: "a", 2: "b", 3: "c" }

//
const obj = { a: 1, b: 2, c: 3 };
const findKeyByValue = (obj, val) => {
  let result = null;
  Object.entries(obj).forEach(([key, value]) => {
    if (value === val) {
      result = key;
    }
  });
  return result;
};
// console.log(findKeyByValue(obj, 2)); // Output: "b"
// console.log(findKeyByValue(obj, 5)); // Output: null

//

// const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
// const countOccurrences = () => {
//     let obj = {};
//     words.forEach((elm) => {

//         if (!obj[elm]) {
//             obj[elm] = 1;
//         } else {
//             obj[elm]++;
//         }

//     })
//     return obj;
// }
// console.log(countOccurrences(words)); // Output: { apple: 3, banana: 2, orange: 1 }

// //
// const obj1 = { a: 10, b: 20, c: 30 };
// const obj2 = { a: 3, b: 6, d: 8 };

// const mergeWithSum1 = (obj1, obj2) => {
//     let obj = {};
//     let allkeyObj = { ...obj1, ...obj2 };

//     for (let key in allkeyObj) {
//         if (!obj[key]) {
//             if (obj2[key]) {
//                 if (obj1[key]) {
//                     obj[key] = obj1[key] + obj2[key];
//                 } else {
//                     obj[key] = obj2[key]
//                 }

//             } else {
//                 obj[key] = obj1[key]
//             }

//         }
//     }

//     return obj;
// }

// const mergeWithSum2 = (obj1, obj2) => {
//     let obj = {};
//     let allKeys = { ...obj1, ...obj2 };

//     for (let key in allKeys) {
//         // If the key exists in both objects, add their values
//         obj[key] = (obj1[key] ? obj1[key] : 0) + (obj2[key] ? obj2[key] : 0);
//     }

//     return obj;
// }

// console.log(mergeWithSum2(obj1, obj2)); // Output: { a: 13, b: 26, c: 30, d: 8 }

// const objwithFalsy = { a: 1, b: 0, c: null, d: "Hello", e: undefined };

// const removeFalsyValues = (objwithFalsy) => {

//     let removedFalsyProps = {

//     }

//     Object.entries(objwithFalsy).forEach(([key, val]) => {
//         if (!removedFalsyProps[key] && val) {
//             removedFalsyProps[key] = val
//         }
//     })

//     return removedFalsyProps;

// }

// console.log(removeFalsyValues(objwithFalsy)); // Output: { a: 1, d: "Hello" }

// const nestedobj2 = { a: { b: { c: 42 } } };
// const getNestedProperty = (nestedobj2, path) => {

//     let splitedPath = path.split(".");
//     let ix = 0;
//     let finalVal = null;
//     const getVal = (val) => {
//         if (typeof (val) === 'object') {
//             ix++;
//             getVal(val[splitedPath[ix]]);
//         } else {
//             finalVal = val;
//         }
//     }

//     getVal(nestedobj2[splitedPath[ix]]);

//     return finalVal;

// }

// const getNestedPropertyEnhanced = (nestedobj2, path) => {

//     let splitedPath = path.split(".");
//     let current = nestedobj2;

//     splitedPath.forEach((key) => {
//         if (current && typeof current === "object") {
//             current = current[key]
//         } else {
//             return undefined;
//         }
//     })

//     return current;

// }

// console.log(getNestedPropertyEnhanced(nestedobj2, "a.b.c")); // Output: 42
// console.log(getNestedPropertyEnhanced(nestedobj2, "a.b.d")); // Output: undefined

// const nestedObj3 = { a: { b: { c: 1 } }, d: 2 };

// const flattenObject = (nestedObj3) => {
//   let result = {};
//   const flattenObjectFunc = (obj, keyStr = "") => {
//     for (let key in obj) {
//       let newKey = keyStr ? `${keyStr}.${key}` : key;
//       if (typeof obj[key] === "object") {
//         flattenObjectFunc(obj[key], newKey);
//       } else {
//         result[newKey] = obj[key];
//       }
//     }
//   };
//   flattenObjectFunc(nestedObj3)
//   return result;
// };

// console.log(flattenObject(nestedObj3)); // Output: { "a.b.c": 1, d: 2 }

const data1 = [
  { category: "fruit", name: "apple" },
  { category: "fruit", name: "banana" },
  { category: "vegetable", name: "carrot" },
];
const groupByProperty = (data, property) => {
  let result = data.reduce((acc, elm) => {
    if (!acc[elm[property]]) {
      acc[elm[property]] = [];
    }
    for (let key in acc) {
      if (key === elm[property]) {
        acc[elm[property]] = [...acc[elm[property]], elm];
      }
    }
    return acc;
  }, {});

  return result;
};

console.log(groupByProperty(data1, "category"));
// Output:
// {
//   fruit: [{ category: "fruit", name: "apple" }, { category: "fruit", name: "banana" }],
//   vegetable: [{ category: "vegetable", name: "carrot" }]
// }

const obj1 = { a: { b: 2 }, c: 3 };
const obj2 = { a: { b: 2 }, c: 3 };
const obj3 = { a: { b: 3 }, c: 3 };

const deepEqual = (obj1, obj2) => {
  let isDeeptrue = false;

  for (let key in obj1) {
    if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
      deepEqual(obj1[key], obj2[key]);
    } else if (obj1[key] !== obj2[key]) {
      isDeeptrue = false;
    } else {
      isDeeptrue = true;
    }
  }
  return isDeeptrue;
};

console.log(deepEqual(obj1, obj2)); // Output: true
console.log(deepEqual(obj1, obj3)); // Output: false

const obj4 = { a: 1, b: 2, c: 3 };
const double = (x) => x * 2;
const transformValues = (obj, double) => {
  let result = {};
  for (let key in obj) {
  
      result[key] = double(obj[key]);
    
  }
  return result;
};

console.log(transformValues(obj4, double)); // Output: { a: 2, b: 4, c: 6 }
