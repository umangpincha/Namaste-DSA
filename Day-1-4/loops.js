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

//TODO: 2nd largest Number
function secondLargest(arr) {
  // Implementation goes here
  if(arr.length < 2) {
    return null; // Not enough elements for a second largest
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

let arr = [4, 9, 0, 2, 8, 7, 1];
// let ans = findLargest(arr);
let ans = secondLargest(arr);
console.log(ans);
