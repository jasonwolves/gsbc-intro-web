const numbers = [];

for (let i = 0; i <= 100; i++) {
  numbers[i] = Math.floor(Math.random() * 1000);
}
//Formats the numbers
let nLen = numbers.length;
let text = "";

for (let i = 0; i < nLen; i++) {
  text += numbers[i] + ", ";

    if (i == 100) {
      text += numbers[i] + ", and ";
      }
    if (i == 100) {
      text += numbers[i] + ".";
      }
  }
document.getElementById("numbers").innerHTML = text;

//Sorts the numbers and pops the largest one
numbers.sort(function (a, b) {return a - b;});
document.getElementById("largest_number").innerHTML = numbers.pop();

//Adds all the numbers together
let s = 0;
let nmLen = numbers.length;

for (let i = 0; i < nmLen; i++) {
  s = s + numbers[i];
  }
document.getElementById("sum").innerHTML = s;