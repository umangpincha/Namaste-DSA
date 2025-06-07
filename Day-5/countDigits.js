let n = -123;
let count = 0;
// converting negative numbers to positive
n = Math.abs(n);
if (n === 0) {
  console.log("1");
  return;
}
while (n > 0) {
  n = Math.floor(n / 10);
  count += 1;
}
console.log(count);
