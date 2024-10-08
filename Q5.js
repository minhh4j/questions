let a = 1111;
let b = a.toString(); 
let reverse = "";  
let result = "";
for (let i = b.length - 1; i >= 0; i--) {
  reverse += b[i];
}
if (reverse === b) {
  result = "This is a palindrome number";
} else {
  result = "This is not a palindrome number";
}
console.log(result);
console.log(typeof result);


