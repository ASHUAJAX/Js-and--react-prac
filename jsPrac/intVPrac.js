let dupArr = [2, 2, 3, 5, 5, 7]; // Find out the missing and duplicate number.

const findDuplicates = (arr) => {
  const foundDups = [];
  const arrChecker = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arrChecker.includes(arr[i])) {
      arrChecker.push(arr[i]);
    } else {
      foundDups.push(arr[i]);
    }
  }
  console.log(foundDups);
};

// findDuplicates(dupArr);

let missingNumArr = [1, 2, 4, 7, 6]; // Find out the missing and duplicate number.

const findMissingNums = (arr) => {
  const foundMisiingNums = [];
  const max = Math.max(...arr);

  for (let i = 1; i < max; i++) {
    if (!arr.includes(i)) {
      foundMisiingNums.push(i);
    }
  }
  console.log(foundMisiingNums);
};

// findMissingNums(missingNumArr);

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

const inFlatFunc = (obj) => {
  let flatObj = {};

  const processFlat = (sentObj, keyStr) => {
    for (let key in sentObj) {
      let newKey = keyStr ? keyStr + "." + key : key;
      if (typeof sentObj[key] === "object") {
        processFlat(sentObj[key], newKey);
      } else {
        flatObj[newKey] = sentObj[key];
      }
    }
  };

  processFlat(obj);

  console.log(flatObj);
};

// inFlatFunc(nestedObj);

// Expected Output:
// {
//   'user.name': 'Alice',
//   'user.address.city': 'Wonderland',
//   'user.address.zip': 12345,
//   'age': 25
// }

const students = [
  { name: "Alice", subjects: { English: 85, Math: 90, Science: 88 } },
  { name: "Bob", subjects: { Math: 75, English: 80, Science: 70 } },
  { name: "Charlie", subjects: { Math: 85, English: 90, Science: 92 } },
];

const processStudents = (students) => {
  const result = {
    studentsAverage: {},
    highestGrade: {},
    toppers: { first: "", second: "", third: "" },
  };

  students.forEach((element) => {
    const { name, subjects } = element;
    let total = 0;
    let noOfSubjects = 0;

    for (let key in subjects) {
      total += subjects[key];
      noOfSubjects++;

      if (!result.highestGrade[key]) {
        result.highestGrade[key] = 0;
      }
      if (result.highestGrade[key] < subjects[key]) {
        result.highestGrade[key] = subjects[key];
      }
    }
    result.studentsAverage[name] = parseFloat(
      (total / noOfSubjects).toFixed(2)
    );
  });

  const marksArr = Object.entries(result.studentsAverage).map(
    ([key, value]) => {
      return { marks: value, key };
    }
  );

  let sortedArr = marksArr.sort((a, b) => b.marks - a.marks);

  result.toppers.first = sortedArr[0].key;
  result.toppers.second = sortedArr[1].key;
  result.toppers.third = sortedArr[2].key;

  console.log(result);
};

// processStudents(students);

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

const promiseFunc = async (val) => {
  const promise = new Promise((res, rej) => {
    val === 1 ? res("Resolved") : rej({ message: "erej" });
  });

  try {
    const promiseResp = await promise;
    console.log(promiseResp);
  } catch (err) {
    console.log(err.message);
  }
};
// promiseFunc(0);

let uniqSumarr = [1, 2, 2, 3, 4, 4, 5];
const uniqSumFunc = (arr) => {
  let uniqArr = [];

  let dupArr = arr.reduce((acc, elm) => {
    if (!uniqArr.includes(elm)) {
      uniqArr.push(elm);
    } else {
      acc.push(elm);
    }
    return acc;
  }, []);

  let uniqSum = uniqArr.reduce((acc, elm) => {
    if (!dupArr.includes(elm)) {
      
      acc += elm;
    }
    return acc;
  }, 0);
  console.log("uniqSum", uniqSum);
};
// uniqSumFunc(uniqSumarr);
// Output: 15 (since 1 + 3 + 5 are unique)


let str = "A man, a plan, a canal, Panama";
const IsPalindrome=()=>{
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    // Reverse the cleaned string
    let reversedStr = cleanedStr.split("").reverse().join("");
    console.log(cleanedStr,reversedStr);
    // Check if the cleaned string is equal to its reverse
    return cleanedStr === reversedStr;
    
}
// IsPalindrome();
// Output: true

let word = "swiss";
const firstNonRepeated=(str)=>{
  let repeatedWordObj = {};
  let firstNonRepeated = "";
  str.split("").forEach((elm)=>{
    if(!repeatedWordObj[elm]){
        repeatedWordObj[elm] = 0;
    }
    repeatedWordObj[elm]++;
  })

  firstNonRepeated = Object.entries(repeatedWordObj).filter(([key,value])=>value === 1).map(([key,value])=>{return{key}});
console.log(firstNonRepeated[0].key);
}
firstNonRepeated('sssXss');
// Output: "w"

