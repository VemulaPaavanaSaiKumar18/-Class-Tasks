// 1. find the product of this array [1,2,3,10]

const a = [1, 2, 3, 10];
let p = 1;
for (i = 0; i < a.length; ++i) {
  p *= a[i];
}
console.log(p);
/*
2. write a function to check wheather the given value exist in the
target nested object or not 
*/

// const obj = {
//   data: {
//     info: {
//       stuff: {
//         thing: {
//           moreStuff: {
//             magicNumber: 44,
//             something: "somevalue",
//           },
//         },
//       },
//     },
//   },
// };

// // output should be like this
// let hasIt = contains(nestedObject, 44); // true
// let doesntHaveIt = contains(nestedObject, "foo"); // false

/*
3. write a function to flatten the nested array shown below (Don't use array.flat method)
*/

// const b = [1, 2, 3, [4, 5, 6, [7, 8, 9], 0, [1, 2, [3]]]];
function flatten(arr) {
  return arr.reduce(
    (acc, cur) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur),
    []
  );
}

const b = [1, 2, 3, [4, 5, 6, [7, 8, 9], 0, [1, 2, [3]]]];

const flattened = flatten(b);
console.log(flattened);

/*
4. write a function that will take array as input and return duplicate values
for eg.. 
*/

const c = [
  "nodejs",
  "javascript",
  "mongodb",
  "sql",
  "javascript",
  "webstorage",
  "html",
  "sql",
];
const duplicatesArray = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) !== index);
const duplicateElements = duplicatesArray(c);
console.log(duplicateElements); // should give ['javascript', 'sql']

/*
5. write a function to find uniq values from the array  
*/
let arr = [
  "nodejs",
  "javascript",
  "mongodb",
  "sql",
  "javascript",
  "webstorage",
  "html",
  "sql",
];
const uniqueArray = (value) => {
  let uniqueValue = [...new Set(value)];
  return uniqueValue;
};
let data = uniqueArray(arr);
console.log(data);
/*
6. write a function to find number of duplicates values from the array 
*/
const values = [
  "nodejs",
  "javascript",
  "mongodb",
  "sql",
  "javascript",
  "webstorage",
  "html",
  "sql",
];

const set = new Set(values);

const duplicates = values.filter((item) => {
  if (set.has(item)) {
    set.delete(item);
  } else {
    return item;
  }
});
console.log(duplicates.length);
