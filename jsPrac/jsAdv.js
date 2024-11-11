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
                obj.highestGrade[key] = 0
            }
            if (obj.highestGrade[key] < subjects[key]) {
                obj.highestGrade[key] = subjects[key]
            }



        }


        totalMarksAllStudentsObj.push({ marks: totalMarks, name })

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
    console.log('missing numbers', missingNumArr); // missing number is 4
    console.log('duplicate numbers', dupliacteNUmArr); // dupliacte number is 5
};

// missingNumFunc();

const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Charlie', age: 25 },
    { name: 'Alice', age: 30 }
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
        acc[name] = 1
    } else {
        acc[name]++
    }
    return acc;
}, {});

// console.log(desiredOutput);

const nestedObj = {
    user: {
        name: 'Alice',
        address: {
            city: 'Wonderland',
            zip: 12345
        }
    },
    age: 25
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

        let newKey = sentkey ? `${sentkey}.${key}` : key

        if (typeof (obj[key]) === 'object') {
            flatObjFunc(obj[key], key)
        } else {
            flatObj[newKey] = obj[key]
        }

    }
}
// flatObjFunc(nestedObj);
// console.log(flatObj);



//check the count of chars
const countChars = (str) => {
    const obj = {};
    for (let i = 0; i < str.length; i++) {
       
            if (!obj[str[i]]) {
                obj[str[i]] = 1
            } else {
                obj[str[i]]++;
            }
       
    }
    console.log(obj)
}

countChars("bobe");

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

const obj = { a: 1, b: 2, c: 3 };
const findKeyByValue = (obj, val) => {
    let result = null;
    Object.entries(obj).forEach(([key, value]) => {
        if (value === val) {
            result = key
        }
    })
    return result;
}
// console.log(findKeyByValue(obj, 2)); // Output: "b"
// console.log(findKeyByValue(obj, 5)); // Output: null


const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
const countOccurrences = () => {
    let obj = {};
    words.forEach((elm) => {

        if (!obj[elm]) {
            obj[elm] = 1;
        } else {
            obj[elm]++;
        }

    })
    return obj;
}
console.log(countOccurrences(words)); // Output: { apple: 3, banana: 2, orange: 1 }
