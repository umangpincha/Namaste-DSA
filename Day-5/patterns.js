let n = 5;

// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }

// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j <= i; j++) {
//     row = row + "* ";
//   }
//   console.log(row);
// }

// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j <= i; j++) {
//     row = row + (j + 1) + " ";
//   }
//   console.log(row);
// }

// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j <= i; j++) {
//     row = row + (i + 1);
//   }
//   console.log(row);
// }

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i + 1; j++) {
//     row = row + j;
//   }
//   console.log(row);
// }

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i + 1; j++) {
//     row = row + "* ";
//   }
//   console.log(row);
// }

// TODO: Tricky ques
// for (let i = 1; i <= n; i++) {
//   //space
//   let space = "";
//   for (let j = n - i; j > 0; j--) {
//     space = space + " ";
//   }
//   //star
//   let star = "";
//   for (let k = 1; k <= i; k++) {
//     star = star + "*";
//   }
//   console.log(space + star);
// }

// let toggle = 1;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j <= i; j++) {
//     row = row + Number(toggle);
//     toggle = !toggle;
//   }
//   console.log(row);
// }
