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

function findLargest(arr) {
  let maxValue = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
}

let arr = [1, 2, -3, -23, 650, 7, 999, 32];
let ans = findLargest(arr);
console.log(ans);
