function findLargest(arr) {
  let largestValue = arr.reduce((acc, elm) => {
    if (acc < elm) {
      acc = elm;
    }
    return acc;
  }, 0);

  console.log(largestValue);
}
// findLargest([1, 2, 10, 4, 1]);
// Output: 10

function reverseString(str) {
  let reverseStr = str.split("").reverse().join("");
  console.log(reverseStr);
}
// reverseString("hello");
// Output: 'olleh'

function findDuplicates(arr) {
  let anyArr = [];
  let dups = [];

  for (let i = 0; i < arr.length; i++) {
    if (anyArr.includes(arr[i])) {
      dups.push(arr[i]);
    } else {
      anyArr.push(arr[i]);
    }
  }
  console.log("dups: ", dups);
}
// findDuplicates([1, 2, 3, 1, 3, 2]);
// Output: [1, 3, 2]

function isPalindrome(str) {
  let strArr = [];
  let result = false;
  for (let i = str.length - 1; i >= 0; i--) {
    strArr.push(str[i]);
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === strArr[i]) {
      result = true;
    } else {
      result = false;
    }
  }
  console.log(result);
}
// isPalindrome("madam");
// Output: true (for 'madam')
// Output: false (for 'hello')
function flattenArray(arr) {
  let flatArr = [];

  const recurseFlattenArrayFunc = (elm) => {
    if (elm.length > 0) {
      elm.forEach((el) => {
        recurseFlattenArrayFunc(el);
      });
    } else {
      flatArr.push(elm);
    }
  };
  recurseFlattenArrayFunc(arr);
  console.log(flatArr);
}

// flattenArray([1, [2, 3], [4, [6]]]);

function findMissingNumber(arr) {

  let missingNum = [];
  for (let i = 1; i < arr.length; i++) {
 if(arr[i-1]!== i){
    missingNum.push(i);
 }
  }
  console.log(missingNum);
}
findMissingNumber([1, 2, 3,6]);
// Output: 3 (for array [1, 2, 4, 5])
