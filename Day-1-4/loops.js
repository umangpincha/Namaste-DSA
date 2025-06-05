// function findElement(arr, element) {
//     for (let i = 0; i < arr.length; i++) {
//         if (element === arr[i]) {
//             return i;
//         }
//     }
//     return -1;
// }

// function searchNeg(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             count = count + 1;
//         }
//     }
//     return count;
// }

// TODO: Max number
function findLargest(arr) {
  let maxValue = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
}

// TODO: Min number
function findMin(arr) {
  let minValue = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }
  return minValue;
}

let arr = [-9, -19, -3];
// let ans = findLargest(arr);
let ans = findMin(arr);
console.log(ans);
