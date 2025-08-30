// // WAF that searches an element in an array and return index , if element is not present return -1

// // let arr = [23, 45, 62, 1, 3, 43, 222];
// // function findKey(key) {
// //     for (let i = 0; i < arr.length; i++) {
// //         if (arr[i] === key) {
// //             return(i);
// //         }
// //     }
// //     return -1;
// // }


// // console.log(findKey(62));

// // WAF that return negative numbers in an array

// // function countNeg(arr) {
// //     let count = 0;
// //     for (let i = 0; i < arr.length; i++) {
// //         if (arr[i] < 0) {
// //             count++;
// //         }
// //     }
// //     return count;
// // }
// // console.log(countNeg([1, 2, -3, 44, -32, 41, 98]));


// // WAF to return largest number in an array

// function getLargest(arr) {
//     let largest = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }
//     return largest;
// }
// console.log(getLargest([1, 2, -3, 98, -32, 41, 8]));



// // WAF to return smallest number in an array

// function getLargest(arr) {
//     let largest = Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < largest) {
//             largest = arr[i];
//         }
//     }
//     return largest;
// }
// console.log(getLargest([1, 2, -3, 98, -32, 41, 8]));


