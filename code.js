// ===========================
// =بسم الله الرحمان الرحيم=
// ===========================

// =======================
// assignment 1 "week-> 1"
// =======================

console.error("assignment 1 week-> 1");

console.log(
  " the code will not be working where is at 1st one because will not be able to  \n find the element, not like the second one that has window.onload but if we wanna make \n the first code works we need to put it at the end of the body"
);

/*
  "the code will not be working where is at 1st
  one because will not be able to find the elm-
  ent, not like the second one that has window.
  onload but if we wanna make the first code
  works we need to put it at the end of the body"
*/

// =======================
// assignment 2 "week-> 1"
// =======================

console.error("assignment 2 week-> 1");

document.write(`<h1 style="color: #000;
border-top:solid 1px #fff;
background-color: rgb(185, 185, 16);
font-size: 50px;
font-weight: bold;
text-align: center;
font-family: Arial";
>SiMo</h1>`);

console.log("<= You Will See It On Page");

// =======================
// assignment 3 "week-> 1"
// =======================

console.error("assignment 3 week-> 1");

console.log(
  "%csimo %cweb %cschool",
  "text-transform: capitalize;color: red; font-size: 40px;",
  "text-transform: capitalize;color: green; font-size: 40px; font-weight: bold;",
  "text-transform: capitalize;color: white;background-color: blue; font-size: 40px;"
);

// =======================
// assignment 4 "week-> 1"
// =======================

console.error("assignment 4 week-> 1");

console.groupCollapsed("Group 1 ");

console.log("Message One");
console.log("Message Two");

console.groupCollapsed("Child Group");

console.log("Message One");
console.log("Message Two");

console.group("Grand Child Group");

console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();

console.group("Group 2");

console.log("Message One");
console.log("Message Two");

// =======================
// assignment 5 "week-> 1"
// =======================

console.error("assignment 5 week-> 1");

console.table(["SiMo", "Morocco", "Mohamed", "Philistine"]);

// =======================
// assignment 6 "week-> 1"
// =======================

console.error("assignment 6 week-> 1");

// console.log("Iam In Console");

/*document.write("Iam In Page");*/

console.log("=> You Will See It in Code");

// =======================
// assignment 1 "week-> 2"
// =======================

console.error("assignment 1 week-> 2");

// Add Variables Here
let num1 = 10;
let num2 = 20;

// Ouput
console.log(num1 + "" + num2); // Normal Concatenate `=> 1020
console.log(typeof (num1 + "" + num2)); // Normal Concatenate => String
console.log(`${num1}${num2}`); // Template Literals Way => 1020
console.log(typeof `${num1}${num2}`); // Template Literals Way => String

console.log(num1 + "\n" + num2);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${num1}
${num2}`);
/*
  Template Literals Way
  20
  10
*/

// =======================
// assignment 2 "week-> 2"
// =======================

console.error("assignment 2 week-> 2");

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

// =======================
// assignment 3 "week-> 2"
// =======================

console.error("assignment 3 week-> 2");

console.log(`
I'm In
\\\\
Love \\\\ """ '''
++ With ++
\\"""\\"""
""JavaScript""\``);

// =======================
// assignment 4 "week-> 2"
// =======================

console.error("assignment 4 week-> 2");

let a = 21;
let b = 20;
let repeat = ("" + a + b).length;

console.log("_" + `${a}_${b}`.repeat(repeat) + "_"); // _21_2021_2021_2021_20_

// ==========================================
// == variable and concatenation challenge ==
// ==========================================

console.error("variable and concatenation challenge");

let title1 = "SiMo";
let desc1 = "SiMo Web School";
let time1 = "25/10";

let markup1 = `
<div style="padding:20px; border-top:solid 1px #fff;
 background-color:rgb(185, 185, 16);" class="var-concat">
<h3 style="color:green;">Hello ${title1}</h3>
<p style ="padding:15px 0;color:blue;">${desc1}</p>
<span>${time1}</span>
</div>`;

document.write(markup1.repeat(4));

console.log("<= You Will See It On Page");

// =======================
// assignment 1 "week-> 3"
// =======================

console.error("assignment 1 week-> 3");

// Replace ? With Arithmetic Operators
console.log(10 * 20 + (15 % 3) + 190 + 10 - 400); // 0

// =======================
// assignment 2 "week-> 3"
// =======================

console.error("assignment 2 week-> 3");

let num3 = 3;

// Solution One
console.log(num3 + num3); // 6

// Solution Two
console.log(num3 * num3 - num3); // 6

// Soultion Three
console.log((num3 ** num3 + num3) / num3 - true - num3); // 6

// Soultion Four
console.log(num3 ** num3 / num3 - num3); // 6

// Solution Five
console.log(++num3 + --num3 - true); // 6

// Solution Six
console.log(num3 * --num3); // 6

// =======================
// assignment 3 "week-> 3"
// =======================

console.error("assignment 3 week-> 3");

let num4 = "10";

// Solution One
console.log(Number(num4) - -num4); // 20

// Solution Two
console.log(num4 * (true + true)); // 20

// Solution Three
console.log(+num4 + +num4); // 20

// Solution Four
console.log(++num4 + --num4 - true); // 20

// =======================
// assignment 4 "week-> 3"
// =======================

console.error("assignment 4 week-> 3");

let points1 = 10;

points1 = ++points1 + true + true;

console.log(points1); // 13

points1 = --points1 - true - true - true - true;

console.log(points1); // 8;

// =========================
// == Operators challenge ==
// =========================

console.error("Operators challenge");

let a1 = "-100";
let b1 = "20";
let c1 = 30;
let d1 = true;

console.log(Number(b1) * -a1);
console.log(Number(++b1) * ++d1 + ++c1 + -a1);

// =======================
// assignment 1 "week-> 4"
// =======================

console.error("assignment 1 week-> 4");

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1e5); // 100000
console.log(10 ** 5); // 100000
console.log(1_000 * 100); // 100000
console.log(50_000 * 2); // 100000
console.log(5e4 * 2); // 100000
console.log(100_000.0); // 100000
console.log(1_000_000 / 10); // 100000
console.log(Number("100000")); // 100000
console.log(Math.round(99_999.6)); // 100000
console.log(Math.ceil(99_999.1)); // 100000

// =======================
// assignment 2 "week-> 4"
// =======================

console.error("assignment 2 week-> 4");

console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

// =======================
// assignment 3 "week-> 4"
// =======================

console.error("assignment 3 week-> 4");

console.log(Number.MAX_SAFE_INTEGER.toString().length); // 9007199254740991

// =======================
// assignment 4 "week-> 4"
// =======================

console.error("assignment 4 week-> 4");

let myVar1 = "100.56789 Views";

console.log(parseInt(myVar1)); // 100
console.log(Number(parseFloat(myVar1).toFixed(2))); // 100.57

// =======================
// assignment 5 "week-> 4"
// =======================

console.error("assignment 5 week-> 4");

let num5 = 10;

console.log(Number.isInteger(num5) + Number.isInteger(num5)); // 2

// =======================
// assignment 6 "week-> 4"
// =======================

console.error("assignment 6 week-> 4");

let flt1 = 10.4;

console.log(Math.round(flt1)); // 10
console.log(Math.floor(flt1)); // 10
console.log(Math.trunc(flt1)); // 10
console.log(parseInt(flt1)); // 10
console.log(Math.ceil(--flt1)); // 10

// =======================
// assignment 7  "week-> 4"
// =======================

console.error("assignment 7 week-> 4");

console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4

// =======================
// assignment 8 "week-> 4"
// =======================

console.error("assignment 8 week-> 4");

let userName1 = "Elzero";

console.log(userName1[0].toLowerCase()); // e
console.log(userName1.charAt(0).toLowerCase()); // e
console.log(userName1.slice(0, 1).toLowerCase()); // e
console.log(userName1.split("")[0].toLowerCase()); // e
console.log(userName1.substring(0, 1).toLowerCase()); // e
console.log(userName1.substr(0, 1).toLowerCase().repeat(3)); // eee

// =======================
// assignment 9 "week-> 4"
// =======================

console.error("assignment 9 week-> 4");

let word1 = "Elzero";
let letterZ1 = "z";
let letterE1 = "e";
let letterO1 = "O";

console.log(word1.includes(letterZ1)); // True
console.log(word1.startsWith(letterE1.toUpperCase())); // True
console.log(word1.endsWith(letterO1.toLowerCase())); // True

// ======================
// == Number challenge ==
// ======================

console.error("Number challenge");

let q1 = 1_00;
let p1 = 2_00.5;
let f1 = 1e2;
let x1 = 2.4;

// find smallest number in all variables and return integer
console.log(parseInt(Math.min(q1, p1, f1, x1)));

// use variable q + x one time to get the needed output
console.log(Math.pow(q1, Math.floor(x1))); //10000

// get integer "2" from x variable with 4 methods
console.log(Math.trunc(x1));
console.log(Math.floor(x1));
console.log(Math.round(x1));
console.log(parseInt(x1));

// use variables p + x to get this values
console.log((Math.trunc(p1) / Math.ceil(x1)).toFixed(2)); //66.67 => String
console.log(Math.ceil(Math.trunc(p1) / Math.ceil(x1))); //67 => Number

// ======================
// == String challenge ==
// ======================

console.error("String challenge");

let title2 = "Simo Web School";

// Include This Methods In Your Solution [slice, charAt]
console.log(title2.charAt(1).toUpperCase() + title2.slice(2, 4)); // Imo

//8 R
console.log(
  title2
    .slice(title2.indexOf("h"), title2.indexOf("h") + true)
    .toUpperCase()
    .repeat(8)
); // HHHHHHHH

//Return Array
console.log(title2.split(" ")[0].split(" ")); // [Simo]

// Use Only "substr" Method + Template Literals In Your Solution <= sorry ^,^
console.log(
  `${title2.substr(0, title2.split(" ")[0].length)} ${title2.substr(
    title2.length - 6
  )}`
); // Simo School

// Solution Must Be Dynamic And string May change
console.log(
  `${title2.charAt(0).toLowerCase()}${title2
    .substr(1, title2.length - 2)
    .toUpperCase()}${title2.slice(-1)[0].toLowerCase()}`
); // sIMO WEB SCHOOl

// =======================
// assignment 1 "week-> 5"
// =======================

console.error("assignment 1 week-> 5");

console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 && 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(typeof -50 === typeof +"-40"); // true
console.log(typeof 10 === typeof -"-40"); // true
console.log(typeof "10" !== typeof 10); // true
console.log(typeof 20 !== false); // true

// =======================
// assignment 2 "week-> 5"
// =======================

console.error("assignment 2 week-> 5");

let num6 = 10;
let num7 = 20;

console.log(num6 != num7); // true
console.log(num6 < num7); // true
console.log(num6 !== num7); // true
console.log(typeof num6 === typeof num7); // true
console.log(num7 > num6); // true
console.log(num6 * (true + true) === num7); // true

// =======================
// assignment 3 "week-> 5"
// =======================

console.error("assignment 3 week-> 5");

let a2 = 20;
let e = 30;
let c = 10;

console.log((a2 == e && a2 > c) || a2 < e); // true
console.log(a2 < e || a2 == c); // true
console.log(!(a2 > e) && !(a2 === e) && !(a2 == c) && !(a2 < c)); // true

// =======================
// assignment 4 "week-> 5"
// =======================

console.error("assignment 4 week-> 5");

let num8 = 10;

num8 < 10
  ? console.log(`00${num8}`)
  : num8 >= 10 && num8 <= 100
  ? console.log(`0${num8}`)
  : console.log(`${num8}`);

// =======================
// assignment 5 "week-> 5"
// =======================

console.error("assignment 5 week-> 5");

let Num9 = 9;
let str1 = "9";
let str2 = "20";

if (Num9 == str1) {
  console.log(`${Num9} is the same value as ${str1}`);
  if (Num9 >= str1) {
    console.log(`${Num9} Is The Same Value As ${str1} But Not The Same Type`);
    if (Num9 !== str2) {
      console.log(`${Num9} Is Not The Same Value Or The Same Type As ${str2}`);
      if (typeof str1 === typeof str2) {
        console.log(
          `${str1} Is The Same Type As ${str2} But Not The Same Value`
        );
      }
    }
  }
}

// =======================
// assignment 6 "week-> 5"
// =======================

console.error("assignment 6 week-> 5");

let num10 = 10;
let num11 = 30;
let num12 = "30";

if (num12 > num10 && num12 !== num10) {
  console.log(
    `${num12} Is Larger Than ${num10} And Type string Not The Same Type As number`
  );
  if (num12 >= num11 && num12 !== num10) {
    console.log(
      `${num12} Is Larger Than ${num10} And Value Is The Same As ${num12} And Type string Not The Same Type As number`
    );
    if (num12 != num10 && num12 !== num10 && num12 !== num11) {
      console.log(
        `${num12} Value And Type Is Not The Same As ${num10} And Type Is Not The Same As ${num11}`
      );
    }
  }
}

// =======================
// assignment 7 "week-> 5"
// =======================
console.error("assignment 7 week-> 5");

// Edit What You Want Here

let num13 = 15;
let num14 = 10;
let num15 = 15;
let num16 = 41;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num13 > num14) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num13 > num14 && num13 < num16) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num13 > num14 && num13 === num15) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (num13 + num14 < num16) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (num13 + num15 < num16) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (num13 + num14 + num15 < num16) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num16 - (num13 + num15) + num14 === 21) {
  console.log("True");
} else {
  console.log("False");
}

// ============================
// == if condition challenge ==
// ============================

console.error("if condition challenge");

// first challenge

let ifCond = 10;

if (ifCond < 10) {
  console.log(10);
} else if (ifCond >= 10 && ifCond <= 40) {
  console.log("10 to 40");
} else if (ifCond > 40) {
  console.log(">40");
} else {
  console.log("unknown");
}

//solution

ifCond < 10
  ? console.log(10)
  : ifCond >= 10 && ifCond <= 40
  ? console.log("10 to 40")
  : ifCond > 40
  ? console.log(">40")
  : console.log("unknown");

// second challenge

let st1 = "Simo Web School";
let stLength1 = (st1.length * (true + true)).toString();

if (stLength1 === "30") {
  console.log("Good");
}

// W Position May change
let stIncludW = st1.charAt(st1.indexOf("W"));

if (stIncludW === "W") {
  console.log("Good");
}

if (st1 !== "string") {
  console.log("Good");
}

if (typeof st1.length === "number") {
  console.log("Good");
}

let reName1 = st1.split(" ")[0] + st1.split(" ")[0];
if (reName1 === "SimoSimo") {
  console.log("Good");
}

// =======================
// assignment 6 "week-> 5"
// =======================
console.error("assignment 6 week-> 5");

let day = "                  friday";

day = day.trim(); // Remove spaces
day = day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();

switch (day) {
  case "Monday":
  case "Thursday":
    console.log(`From 10:00 AM To 5:00 PM`);
    break;
  case "Tuesday":
    console.log(`From 10:00 AM To 6:00 PM`);
    break;
  case "Wednesday":
    console.log(`From 10:00 AM To 7:00 PM`);
    break;
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log(`No Appointments Available`);
    break;
  default:
    console.log(`Its Not A Valid Day`);
}

// ======================
// == Switch challenge ==
// ======================

console.error("Switch challenge");

// first challenge

let job =
  ""; /*<= type here your job you wan to know the salary of it and you will see the output in console inshallah "good luck"*/
let salary = 0;

switch (job) {
  case "manager":
    salary = 8000;
    console.log(`My job is ${job} and my salary is ${salary}`);
    break;
  case "IT":
  case "support":
    salary = 6000;
    console.log(`My job is ${job} and my salary is ${salary}`);
    break;
  case "developer":
  case "designer":
    salary = 7000;
    console.log(`My job is ${job} and my salary is ${salary}`);
    break;
  case "frontend":
    salary = "10$";
    console.log(`My job is ${job} and my salary is ${salary}`);
    break;
  default:
    salary = 4000;
    console.log(`My job is ${job} and my salary is ${salary}`);
}

// second challenge

let holidays =
  ""; /*<= type here number you want to and you will see the output in console inshallah "good luck"*/
let money = 0;

if (holidays === 0) {
  money = 5000;
  console.log(`my money is ${money}`);
} else if (holidays === 1 || holidays === 2) {
  money = 3000;
  console.log(`my money is ${money}`);
} else if (holidays === 3) {
  money = 2000;
  console.log(`my money is ${money}`);
} else {
  money = 0;
  console.log(`my money is ${money}`);
}

// =======================
// assignment 1 "week-> 6"
// =======================
console.error("assignment 1 week-> 6");

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1

console.log(myFriends.slice("", num)); // ["Ahmed", "Elham", "Osama"];

// Method 2

myFriends.pop();

console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 3

myFriends.length = num;
console.log(myFriends);

// =======================
// assignment 2 "week-> 6"
// =======================
console.error("assignment 2 week-> 6");

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.pop();
friends.shift();

console.log(friends); // ["Eman", "Osama"]

// =======================
// assignment 3 "week-> 6"
// =======================
console.error("assignment 3 week-> 6");

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = arrOne.concat(arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// =======================
// assignment 4 "week-> 6"
// =======================
console.error("assignment 4 week-> 6");

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

// =======================
// assignment 5 "week-> 6"
// =======================
console.error("assignment 5 week-> 6");

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// first Solution

let found = haystack
  .slice(haystack.indexOf(needle), haystack.indexOf(needle) + 1)
  .join("");

if (needle === found) {
  console.log("found");
}

// second Solution

haystack.pop();
haystack.shift();

if (needle === haystack.toString()) {
  console.log("found");
}

// third Solution

if (haystack.includes(needle)) {
  console.log("found");
}

// =======================
// assignment 6 "week-> 6"
// =======================
console.error("assignment 6 week-> 6");

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];

let combSort = arr1.concat(arr2).sort();

let slicedArray = combSort.slice(combSort.indexOf("F"));

let result = slicedArray.join("").toLowerCase();

console.log(result); // "fxy"

// ======================
// == Array challenge ===
// ======================

console.error("Array challenge");

let zero1 = 0;

let counter1 = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// First

let my1 = my.slice(zero1, my.indexOf("Gamal")).reverse();
console.log(my1); // ["Osama", "Elham", "Mazero", "Ahmed"]

// Second

let my2 = my1.slice(my1.indexOf("Elham"), counter1);
console.log(my2); // ["Elham", "Mazero"]

// Third

let my3 =
  my2[zero1].slice(zero1, my2.length) +
  my2[my2.indexOf("Mazero")].slice(my2.length);
console.log(my3); // "Elzero"

// Forth

let my4 =
  my3.slice(my3.indexOf("r"), my3.indexOf("o")) +
  my3.slice(my3.indexOf("o")).toUpperCase();

console.log(my4); // "rO"

// =======================
// assignment 1 "week-> 7"
// =======================
console.error("assignment 1 week-> 7");

let start1 = 10;
let end1 = 100;
let exclude1 = 40;

for (i = start1; i <= end1; i += start1) {
  if (i === exclude1) continue;
  console.log(i);
}

// =======================
// assignment 2 "week-> 7"
// =======================
console.error("assignment 2 week-> 7");

let start2 = 10;
let end2 = 0;
let stop1 = 3;

mainLoop: for (i = start2; i > end2; i--) {
  if (i < start2) {
    console.log(`${end2}${i}`);
    if (i === stop1) break;
  } else {
    console.log(i.toString());
  }
}

// =======================
// assignment 3 "week-> 7"
// =======================
console.error("assignment 3 week-> 7");

let start3 = 1;
let end3 = 6;
let breaker1 = 2;

mainLoop: for (i = start3; i < end3; i++) {
  console.log(i);
  nestedLoop: for (j = breaker1; j < end3; j += breaker1) {
    console.log("--" + j);
  }
}

// =======================
// assignment 4 "week-> 7"
// =======================
console.error("assignment 4 week-> 7");

let index1 = 10;
let jump1 = 2;

for (;;) {
  if (index1 === jump1) break;
  console.log(index1);
  index1 -= jump1;
}

// =======================
// assignment 5 "week-> 7"
// =======================
console.error("assignment 5 week-> 7");

let friends1 = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter1 = "a";

for (i = 0; i < friends1.length; i++) {
  if (friends1[i][0].toLowerCase() === letter1) {
    continue;
  }
  console.log(`"${i} => ${friends1[i]}"`);
}

// =======================
// assignment 6 "week-> 7"
// =======================
console.error("assignment 6 week-> 7");

let start4 = 0;
let swappedName1 = "elZerO";
let result1 = "";
for (i = start4; i < swappedName1.length; i++) {
  if (swappedName1[i] === swappedName1[i].toLowerCase()) {
    result1 += swappedName1[i].toUpperCase();
  } else {
    result1 += swappedName1[i].toLowerCase();
  }
}
console.log(result1);

// =======================
// assignment 7 "week-> 7"
// =======================
console.error("assignment 7 week-> 7");

let start5 = 0;
let mix1 = [1, 2, 3, "A", "B", "C", 4];

for (let i = start5; i < mix1.length; i++) {
  if (typeof mix1[i] === "string" || mix1[i] === mix1[start5]) continue;
  console.log(mix1[i]);
}

// =======================
// assignment 8 "week-> 7"
// =======================
console.error("assignment 8 week-> 7");

let friends2 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index2 = 0;
let counter2 = 0;

while (index2 < friends2.length) {
  if (
    typeof friends2[index2] === "number" ||
    friends2[index2][counter2] === "A"
  ) {
    index2++;
    continue;
  }
  console.log(`=> ${friends2[index2]}`);
  index2++;
}

// ================================
// == Loop, White, Do challenge ===
// ================================

console.error("Loop, White, Do challenge");
console.log("you will see it on the screen ");

let myAdmins = ["Ahmed", "Osama", "sayed", "Stop", "omar", "simo"];
let myWorker = ["Amgad", "simo", "Ameer", "Omar", "Othman", "Amany", "Samia"];
let s = 0;
document.write(`<div class="mainDiv" style = "width:100%;">`);

document.write(
  `<h1 style = " padding:15px; text-align:center; background-color:#5cd322; color:white;">Loop, White, Do challenge</h1>`
);
for (; s < myAdmins.length; s++) {
  if (myAdmins[s].toLowerCase() === "stop") break;
}
document.write(
  `<p style="padding:20px; width:100%; background-color:rgb(185, 185, 16);">We Have ${s} Admins</p>`
);
document.write(`<hr>`);
document.write(`<div class="nestedDiv" style="100%">`);
mainLoop: for (let k = 0; k < s; k++) {
  document.write(
    `<div style="padding:20px; background-color:rgb(185, 185, 16);">We Admin For Team ${
      k + 1
    } Is ${myAdmins[k]}</div>`
  );
  document.write(
    `<h3 style="padding:15px; background-color:rgb(185, 185, 16);">Team Members:</h3>`
  );
  nestedLoop: for (let l = 0; l < myWorker.length; l++) {
    if (
      myAdmins[k][0] === myWorker[l][0] ||
      myAdmins[k][0].toUpperCase() === myWorker[l][0].toUpperCase() ||
      myAdmins[k][0].toLowerCase() === myWorker[l][0].toLowerCase()
    ) {
      document.write(
        `<p style="padding:10px; background-color:rgb(185, 185, 16);">=> ${myWorker[l]}</p>`
      );
    }
  }
  document.write(`<hr>`);
}
document.write(`</div>`);
document.write(
  `<h1 style = " padding:15px; text-align:center; background-color:#5cd322; color:white;">DONE,</h1>`
);
document.write(`</div>`);

// =======================
// assignment 1 "week-> 8"
// =======================
console.error("assignment 1 week-> 8");

function sayHello(theName, theGender) {
  if (theGender === "Male" || theGender === "male") {
    return `Hello Mr ${theName}`;
  } else if (theGender === "Female" || theGender === "female") {
    return `Hello Miss ${theName}`;
  } else {
    return `Hello ${theName}`;
  }
}

// Needed Output
console.log(sayHello("SiMo", "Male")); // "Hello Mr Osama"
console.log(sayHello("Aisha", "Female")); // "Hello Miss Eman"
console.log(sayHello("Abu Bakr")); // "Hello Sameh"

// =======================
// assignment 2 "week-> 8"
// =======================
console.error("assignment 2 week-> 8");

function calculate(firstNum, secondNum, opertion) {
  if (firstNum === undefined || secondNum === undefined) {
    return `Second Number Not Found`;
  } else if (opertion === "add" || opertion === undefined) {
    return firstNum + secondNum;
  } else if (opertion === "subtract") {
    return firstNum - secondNum;
  } else if (opertion === "multiply") {
    return firstNum * secondNum;
  }
}

// Needed Output
console.log(calculate(20)); // Second Number Not Found
console.log(calculate(20, 30)); // 50
console.log(calculate(20, 30, "add")); // 50
console.log(calculate(20, 30, "subtract")); // -10
console.log(calculate(20, 30, "multiply")); // 600

// =======================
// assignment 3 "week-> 8"
// =======================
console.error("assignment 3 week-> 8");

function ageInTime(theAge) {
  if (theAge < 10 || theAge > 100) {
    return `Age Out Of Range`;
  } else {
    return `Mons: ${theAge * 12}, Days: ${theAge * 365.25}, Weeks: ${
      theAge * 52
    }, Hrs: ${theAge * 365.25 * 24}, Mins: ${
      theAge * 365.25 * 24 * 60
    }, Secs: ${theAge * 365.25 * 24 * 60 * 60}`;
  }
}

console.log(ageInTime(22));

// ==============================================
// assignment 4 "week-> 8" and Function challenge
// ==============================================
console.error("assignment 4 week-> 8 and Function challenge");

function checkStatus(a, b, c) {
  let dataType = [a, b, c];
  let Name, Age, State;
  for (let m = 0; m < dataType.length; m++) {
    if (typeof dataType[m] === "string") {
      Name = dataType[m];
    } else if (typeof dataType[m] === "number") {
      Age = dataType[m];
    } else if (typeof dataType[m] === "boolean") {
      State = dataType[m];
    }
  }
  if (State === true) {
    console.log(
      `Hello ${Name}, Your Age Is ${Age}, You Are Available For Hire`
    );
  } else {
    console.log(
      `Hello ${Name}, Your Age Is ${Age}, You Are Not Available For Hire`
    );
  }
}

// Needed Output
checkStatus(22, "simo");

// =======================
// assignment 5 "week-> 8"
// =======================
console.error("assignment 5 week-> 8");

function createSelectBox(startYear, endYear) {
  document.write(
    `<div style = "padding:15px; text-align:center; background-color:rgb(185, 185, 16); color:white;">`
  );
  document.write(
    `<select name="years" id="years"style = "padding:15px 30px; text-align:center; background-color:#5cd322; color:white;border:none;outline:0; font-size:20px;">`
  );
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option>${i}</option>`);
  }
  document.write(`</select>`);
  document.write("</div>");
}

createSelectBox(2002, 2024);

// =======================
// assignment 6 "week-> 8"
// =======================
console.error("assignment 6 week-> 8");

function multiply(...nums) {
  let resutl11 = 1;
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] !== "number") {
      continue;
    }
    resutl11 *= Math.floor(nums[i]);
  }
  return resutl11;
}

console.log(multiply(10, 20, false)); //200
console.log(multiply("A", 10, 30)); //300
console.log(multiply(100.5, 10, "B")); //1000

// =======================
// assignment 1 "week-> 9"
// =======================
console.error("assignment 1 week-> 9");

function getDetails(zName, zAge, zCountry) {
  let namePattern = (zName) =>
    `Hello ${zName.split(" ")[0]} ${zName.split(" ")[1][0].toUpperCase()}.`;

  let ageWithMessage = (zAge) => `Your Age Is ${parseInt(zAge)}`;

  let countryTwoLetters = (zCountry) =>
    `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
  let fullDetails = () =>
    `${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(
      zCountry
    )}`;

  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

console.log(getDetails("SiMo GuiNe", "22 Is The Age", "Morocco"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

// =======================
// assignment 2 "week-> 9"
// =======================
console.error("assignment 2 week-> 9");

let itsMe = () => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

//+++++++++++++++++++++++++++++++++++++++++++++

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// =====================================
// assignment 3 "week-> 9" and Challenge
// =====================================
console.error("assignment 3 week-> 9 and challenge");

let checker = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;

console.log(checker("SiMo")("Available")(`4000$`)); // Osama, My Salary Is 4000
console.log(checker("Mohamed")("Not Available")()); // Iam Not Avaialble

// =======================
// assignment 4 "week-> 9"
// =======================
console.error("assignment 4 week-> 9");

function specialMix(...data) {
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    if (parseInt(data[i])) {
      result += parseInt(data[i]);
    }
  }
  if (result == 0) {
    return "All Is Strings";
  }
  return result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

// ========================
// == challenge function ==
// ========================
console.error("challenge function");

// . [1] .One.Statement . In.Function
// . [2] .Convert . To.Arrow.Function
// . [3]. Print .The.Output . [Arguments.May.Change]

let names = (...names) => `${typeof names[0]} [${names.join("],[")}] => Done!`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

//.String. [Osama],.[Mohamed], .[Ali], [Ibrahim] .= > .Done!

/* ******************************* */

// . [1].Replace. ???. In.Return.Statement.To.Get.The.Output
// . [2].Create.The.Same.Function.With.Regular Syntax
// . [3].Use.Array. Inside.The.Arguments.To.Get.The.Output

let myNumbers = [20, 50, 10, 60];
let calc = (one, two, ...nums) => one + two + nums[0];

console.log(calc(10, myNumbers[0], myNumbers[1]));

// =======================
// assignment 1 "week-> 10"
// =======================
console.error("assignment 1 week-> 10");

let mix = [1, 2, 3, "S", 4, "i", "M", "o", 5];

let checkName = mix
  .map(function (el) {
    return typeof el !== "number" ? el : "";
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });

console.log(checkName);

// =======================
// assignment 2 "week-> 10"
// =======================
console.error("assignment 2 week-> 10");

let myString = "SSiiiiiMMMMMMMooo";

// SiMo

let filterString = myString
  .split("")
  .filter(function (el, i, arr) {
    return arr.indexOf(el) === i;
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });

console.log(filterString);

// =======================
// assignment 3 "week-> 10"
// =======================
console.error("assignment 3 week-> 10");

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let flattenReduce = myArray.reduce((acc, cur) => acc.concat(cur), []).join("");

console.log(flattenReduce);

// Elzero

// =======================
// assignment 4 "week-> 10"
// =======================
console.error("assignment 4 week-> 10");

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let skipLitter = numsAndStrings
  .filter((el) => (typeof el !== "string" ? el : ""))
  .map((el) => -el);

console.log(skipLitter);

// [-1, -10, 10, 20, -5, -3]

// =======================
// assignment 5 "week-> 10"
// =======================
console.error("assignment 5 week-> 10");

let nums = [2, 12, 11, 5, 10, 1, 99];

let accCur = nums.reduce(function (acc, cur) {
  return cur % 2 === 0 ? acc * cur : acc + cur;
}, 1);

console.log(accCur);

// 500

// ===========================
// challenge map filter reduce
// ===========================
console.error("challenge map filter reduce");

let myString1 = "1,2,3,EE,1,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString1
  .split(",")
  .filter((el) => isNaN(el) && "_")
  .map((el) => (el === "_" ? " " : el))
  .reduce((acc, cur) => acc + cur)
  .split("");

solution.shift();
solution.pop();

console.log(solution.join("")); // Elzero Web School

// =======================
// assignment 1 "week-> 11"
// =======================
console.error("assignment 1 week-> 11");

let member = {
  name: "Simo",
  age: 22,
  country: "Morocco",
  fullDetails: function () {
    return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`;
  },
};
console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

// =======================
// assignment 2 "week-> 11"
// =======================
console.error("assignment 2 week-> 11");

// Method One
let objMethodOne = {
  property: "Method One",
};

console.log(objMethodOne.property); // "Method One"

// Method Two
let objMethodTwo = new Object();

objMethodTwo.property = "Method Two";

console.log(objMethodTwo.property); // "Method Two"

// Method Three
let objMethodThree = new ObjConstructor();

function ObjConstructor() {
  this.property = "Method Three";
}

console.log(objMethodThree.property); // "Method Three"

// Method Four
class ObjClass {
  constructor() {
    this.property = "Method Four";
  }
}

let objMethodFour = new ObjClass();

console.log(objMethodFour.property); // "Method Four"

// Method Five
let objMethodFive = Object.create({ property: "Method Five" });

console.log(objMethodFive.property); // "Method Two"

// =======================
// assignment 3 "week-> 11"
// =======================
console.error("assignment 3 week-> 11");

let A = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

let finalObject = Object.assign({ A }, threeNums, twoNums);

console.log(finalObject);

// ======================================
// assignment 4 "week-> 11" and Challenge
// ======================================
console.error("assignment 4 week-> 11 and Challenge");

// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
  console.log(
    `The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`
  );
  console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);

  // Check If Nested Object Has Property (bestThree)
  if (myFavGames[Object.keys(myFavGames)[i]].bestThree) {
    console.log("- Game Has Releases");
    console.log(
      `First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`
    );
    console.log(
      `Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`
    );
    console.log(
      `Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`
    );
  }
  console.log("#".repeat(20));
}

// Ouput

// "The Game Name Is Trinity Universe"
// "The Publisher Is NIS America"
// "The Price Is 40"
// "####################"
// "The Game Name Is Titan Quest"
// "The Publisher Is THQ"
// "The Price Is 50"
// "- Game Has Releases"
// "First => Immortal Throne"
// "Second => Ragnarök"
// "Third => Atlantis"
// "####################"
// "The Game Name Is YS"
// "The Publisher Is Falcom"
// "The Price Is 40"
// "- Game Has Releases"
// "First => Oath in Felghana"
// "Second => Ark Of Napishtim"
// "Third => origin"
// "####################"

// ========================
// assignment 1 "week-> 12"
// ========================
console.error("assignment 1 week-> 12");

// Method 1

let getElById = document.getElementById("SiMo");
console.log(getElById);

// Method 2

let getElClass = document.getElementsByClassName("element");
console.log(getElClass[0]);

// Method 3

let getElTagName = document.getElementsByTagName("div");
console.log(getElTagName[2]);

// Method 4

let getElName = document.getElementsByName("js");
console.log(getElName[0]);

// Method 5

let getElQ = document.querySelector(".element");
console.log(getElQ);

// Method 6

let getElidQ = document.querySelector("#SiMo");
console.log(getElidQ);

// Method 7

let getElidQSel = document.querySelector("div");
console.log(getElidQSel.getElementsByClassName("element")[0]);

// Method 8

let getElidQLast = document.querySelector("[name='js']");
console.log(getElidQLast);

// Method 9

let getElAll = document.querySelectorAll(".element");
console.log(getElAll[0]);

// Method 10

let getElAllId = document.querySelectorAll("#SiMo");
console.log(getElAllId[0]);

// Method 11

let getElidQSelAll = document.querySelectorAll("div");
console.log(getElidQSelAll[0].getElementsByClassName("element")[0]);

// Method 12

let getElidQLastAll = document.querySelectorAll("[name='js']");
console.log(getElidQLastAll[0]);

// Method 13

let getElClosest = document.getElementById("SiMo").closest("div");
console.log(getElClosest);

// ========================
// assignment 2 "week-> 12"
// ========================
console.error("assignment 2 week-> 12");

// First method

let getImgs = document.querySelectorAll("[class='asmOne']");

for (let i = 0; i < getImgs.length; i++) {
  getImgs[i].setAttribute(
    "src",
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
  );
  getImgs[i].setAttribute("alt", "Elzero Logo");
}

// Second method

let getImgQAll = document.querySelectorAll("[class='asmOne']");

getImgQAll.forEach((img) => {
  img.setAttribute(
    "src",
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
  );
  img.setAttribute("alt", "Elzero Logo");
});

console.log("you will see it in elements side (:");

// ========================
// assignment 3 "week-> 12"
// ========================
console.error("assignment 3 week-> 12");
console.log("you will see it on sreen side (:");

let inputValue = document.getElementById("dollar");
let divResult = document.getElementById("result");

inputValue.oninput = () => {
  if (inputValue.value === "") {
    divResult.innerHTML = `{0} USD Dollar = {0} Moroccan Pound`;
  } else {
    let valueCurrent = parseFloat(inputValue.value);
    let changeCurrent = (valueCurrent * 9.75).toFixed(2);
    divResult.innerHTML = `<span>{${valueCurrent}}</span> USD Dollar = <span>{${changeCurrent}}</span> Moroccan Pound
  `;
  }
};
// jsut for try and fun
let inputName = document.getElementById("name");
let userName = document.getElementById("userName");

inputName.oninput = function () {
  let valueName = inputName.value;
  userName.innerHTML = `Hello, <span>${valueName}</span>`;
};

// ========================
// assignment 4 "week-> 12"
// ========================
console.error("assignment 4 week-> 12");

let divOne = document.querySelector(".one");
let divTwo = document.querySelector(".two");

let newTitleOne = divOne.getAttribute("title");
let newTitleTwo = divTwo.getAttribute("title");

divOne.setAttribute("title", newTitleTwo);
divTwo.setAttribute("title", newTitleOne);

divOne.innerHTML = `${newTitleTwo}`;
divTwo.innerHTML = `${newTitleOne} 2`;

console.log(divOne);
console.log(divTwo);

// ========================
// assignment 5 "week-> 12"
// ========================
console.error("assignment 5 week-> 12");

let getElementAlt = document.querySelectorAll('[class="asmFive"]');

// Method one

for (let i = 0; i < getElementAlt.length; i++) {
  if (getElementAlt[i].hasAttribute("alt")) {
    getElementAlt[i].setAttribute("alt", "old");
  } else {
    getElementAlt[i].setAttribute("alt", "SiMo New");
  }
}

// Method Two

getElementAlt.forEach(function (checkAlt) {
  if (checkAlt.hasAttribute("alt")) {
    checkAlt.setAttribute("alt", "old");
  } else {
    checkAlt.setAttribute("alt", "SiMo New");
  }
});

console.log("you will see it in elements side (:");

// ========================
// assignment 6 "week-> 12"
// ========================
console.error("assignment 6 week-> 12");
console.log("it all about dom");

// Get form input values and the target container
let inputValueEl = document.querySelector('[id="el-1"]');
let inputTextEl = document.querySelector('[id="el-2"]');
let inputSelcEl = document.querySelector('[id="el-3"]');
let contentPage = document.querySelector('[id="el-5"]');
let formContent = document.querySelector('[id="main-chlng"]');

formContent.onsubmit = function (event) {
  event.preventDefault();

  let inputValue = parseInt(inputValueEl.value);
  let textValue = inputTextEl.value;
  let selectValue = inputSelcEl.value;
  contentPage.innerHTML = "";

  for (let i = 0; i < inputValue; i++) {
    let createContent = document.createElement(selectValue);
    createContent.innerHTML = textValue;

    // createContent.setAttribute("class", "box");
    createContent.className = "box";

    // createContent.setAttribute("title", "Element");
    createContent.title = "Element";

    // createContent.setAttribute("id", `id-${i + 1}`);
    createContent.id = `id-${i + 1}`;

    contentPage.appendChild(createContent);
  }
};

// ========================
// assignment 1 "week-> 13"
// ========================
console.error("assignment 1 week-> 13");
console.log("it all about dom");

let getParentLinks = document.getElementsByClassName("challenge-dom")[0];

let getChildrenLinks = getParentLinks.querySelectorAll("a");

getChildrenLinks.forEach((el) => {
  el.addEventListener("click", (event) => {
    if (!el.classList.contains("open") || el.innerHTML !== "Elzero")
      event.preventDefault();
  });
});

// ========================
// assignment 2 "week-> 13"
// ========================
console.error("assignment 2 week-> 13");
console.log("it all about dom");

let assign = document.querySelector(".assign-13");
let assignToAdd = assign.querySelector(".classes-to-add");
let assignToRemove = assign.querySelector(".classes-to-remove");
let assignButton = assign.querySelector(".current");
let assignOutup = assign.querySelector(".classes-list");

assignOutup.lastElementChild.textContent = "No Classes To Show";

// adding function

function assignButtonFirstElement() {
  let assignToAddValue = assignToAdd.value.toLowerCase().trim();

  let getLastElement = assignOutup.lastElementChild;

  let getclassList = getLastElement.classList;

  getclassList.add(...assignToAddValue.split(" ").sort());

  assignToAdd.value = "";

  getLastElement.innerHTML = "";

  let classValue = getclassList.value.split(" ").sort();

  classValue.forEach((classes) => {
    getLastElement.innerHTML += `<span>${classes}</span>`;
  });
}

// removing function

function assignButtonLastElement() {
  let assignToRemoveValue = assignToRemove.value.toLowerCase().trim();

  let getLastElement = assignOutup.lastElementChild;

  let getclassList = getLastElement.classList;

  let assignValueShort = assignToRemoveValue.split(" ").sort();

  getclassList.remove(...assignValueShort);

  assignToRemove.value = "";

  let classValue = getclassList.value.split(" ").sort();

  getLastElement.innerHTML = "";

  classValue.forEach((classes) => {
    if (classes !== "") {
      getLastElement.innerHTML += `<span>${classes}</span>`;
    } else {
      getLastElement.innerHTML = "No Classes To Show";
    }
  });
}

// DOM events and addEventListener

assignButton.firstElementChild.addEventListener(
  "click",
  assignButtonFirstElement
);
assignToAdd.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    assignButtonFirstElement();
  }
});

assignButton.lastElementChild.addEventListener(
  "click",
  assignButtonLastElement
);
assignToRemove.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    assignButtonLastElement();
  }
});

// ========================
// assignment 3 "week-> 13"
// ========================
console.error("assignment 3 week-> 13");
console.log("it all about dom");
let getElOurElement = document.querySelector(".our-element");

let createElementAndAttributes = function (
  tags,
  classes,
  titles,
  dataValue,
  text
) {
  let element = document.createElement(tags);
  element.className = classes;
  element.title = titles;
  element.setAttribute("data-value", dataValue);
  element.textContent = text;
  return element;
};

let createELStart = createElementAndAttributes(
  "div",
  "start",
  "Start Element",
  "Start",
  "Start"
);
let createELEnd = createElementAndAttributes(
  "div",
  "end",
  "End Element",
  "End",
  "End"
);

getElOurElement.addEventListener("click", function () {
  // Remove the paragraph element from the DOM
  let paragraph = document.querySelector("p");
  if (paragraph) {
    paragraph.remove();
    console.log("Paragraph has been removed!!!");
  }

  // Insert the new "Start" and "End" div elements
  getElOurElement.before(createELStart);
  getElOurElement.after(createELEnd);
  getElOurElement.getElementsByTagName("span")[0].remove();
});

// ========================
// assignment 4,5 "week-> 13"
// ========================
console.error("assignment 4,5 week-> 13");
console.log("you will find everything in my codepen");

// ========================
// assignment 1 "week-> 14"
// ========================
console.error("assignment 1 week-> 14");
console.log("it all about dom");

function promp() {
  let promt = prompt("Print Number From – To", "-");
  promt.split(" ").reduce(function (acc, curr) {
    if (parseInt(acc) < parseInt(curr)) {
      for (let i = parseInt(acc); i < parseInt(curr); i++) {
        console.log(i);
      }
    } else {
      for (let i = parseInt(curr); i < parseInt(acc); i++) {
        console.log(i);
      }
    }
  });
}

//setTimeout(promp, 10000);

/* When I finished, I checked with ChatGPT, and it mentioned that using reduce here is unnecessary. 
Instead,it suggested using map for better clarity and simplicity*/

// ========================
// assignment 2 "week-> 14"
// ========================
console.error("assignment 2 week-> 14");
console.log("it all about dom");

function popup() {
  document.body.style.cssText = `
    background: #eee;
    width: 100%;
    height: 100vh;
    overflow: hidden; 
  `;

  let overlay = document.createElement("div");
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5); 
    z-index: 5;
    pointer-events: auto; 
    `;
  document.body.appendChild(overlay);
  let createDivMain = document.createElement("div");
  createDivMain.id = "poppu";
  createDivMain.style.cssText = `
  position: absolute;
    z-index: 15;
    left: 50%;
    top: 50%;
    background: #fff;
    width: 500px;
    height: 200px;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;
  document.body.appendChild(createDivMain);

  let createTitle = document.createElement("h2");
  createTitle.innerHTML = `welcome`;
  createDivMain.appendChild(createTitle);

  let createP = document.createElement("p");
  createDivMain.appendChild(createP);
  createP.textContent = `welcome to my web learning`;

  let createButton = document.createElement("button");
  createDivMain.appendChild(createButton);
  createButton.innerHTML = `x`;
  createButton.style.cssText = `    
  background-color: #ff5b5b;
  color: #fff;
  font-size: 20px;
  padding: 5px 12px;
  border-radius: 50%;
  border: none;
  outline: none;
    position: fixed;
    right: -10px;
    top: -16px;`;
  createButton.addEventListener("click", function () {
    createDivMain.remove();
    overlay.remove();
    document.body.style.overflow = "";
  });
  document.body.addEventListener("click", function () {
    createDivMain.remove();
    overlay.remove();
    document.body.style.overflow = "";
  });
}
//setTimeout(popup, 5000);

// ============================
// assignment 3,4,5 "week-> 14"
// ============================
console.error("assignment 3,4,5 week-> 14");
console.log("it all about dom");

function counterTime() {
  let createDivCounter = document.createElement("div");
  createDivCounter.innerHTML = 60;
  createDivCounter.id = "counterTime";
  createDivCounter.style.cssText = `
  position: fixed;
  z-index: 8;
  left: 0;
  top: 0;
  background: rgb(150 150 150 / 66%);
  color:#fff;
  font-size:50px;
  font-weight:bold;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  `;
  let setin = setInterval(() => {
    let getValue = parseInt(createDivCounter.innerHTML);
    createDivCounter.innerHTML -= 1;
    if (getValue == 1) {
      clearTimeout(setin);
      location.href = "https://codepen.io/guine123";
    }
    if (getValue == 5) {
      window.open(
        "https://codepen.io/guine123",
        "_blank",
        "left:100;top:200;width:500;height:100;"
      );
    }
  }, 1000);
  createDivCounter.addEventListener("click", function () {
    clearTimeout(setin);
  });

  document.body.appendChild(createDivCounter);
}

//counterTime();

// ============================
// assignment 1,2 "week-> 15"
// ============================
console.error("assignment 1,2 week-> 15");

console.log("you will find everything in my codepen");
console.log("dont forget challenge this msg for me");

// ========================
// assignment 1 "week-> 16"
// ========================
console.error("assignment 1 week-> 16");

let myNumberss = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
[a, , , , e] = myNumberss;
console.log(a * e); // 5

// ========================
// assignment 2 "week-> 16"
// ========================
console.error("assignment 2 week-> 16");

let mySkills = [
  "HTML",
  "CSS",
  "JavaScript",
  ["PHP", "Python", ["Django", "Laravel"]],
];

// Write Your Destructuring Assignment Here

[a, b, c, [d, e, [f, g]]] = mySkills;

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

// ========================
// assignment 3 "week-> 16"
// ========================
console.error("assignment 3 week-> 16");

let Arr1 = ["Ahmed", "Sameh", "Sayed"];
let Arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
let newArr = [...arr3.slice(1), Arr1[0]];

// Write Your Destructuring Assignment Here
[a, b, c] = newArr;

console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed

// ========================
// assignment 4 "week-> 16"
// ========================
console.error("assignment 4 week-> 16");
let membr = {
  age: 22,
  working: false,
  country: "Morocco",
  hobbies: ["eating", "Swimming", "sleeping"],
};

// Write Your Destructuring Assignment Here
({
  age: a,
  working: w,
  country: c,
  hobbies: [h1, , h3],
} = membr);

console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} 🥹`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming

// ========================
// assignment 5 "week-> 16"
// ========================
console.error("assignment 5 week-> 16");

let game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

// Write Your Destructuring Assignment/s Here
({ title: t, developer: d } = game);

let getkeys = Object.keys(game.releases);
({ "Oath In Felghana": o, "Ark Of Napishtim": A, Origin: or } = game.releases);

o = getkeys[0];
A = getkeys[1];

[u, j] = game.releases["Oath In Felghana"];

({ US: u_price, JAP: j_price } = game.releases["Ark Of Napishtim"]);
console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${A}`);
// Although I Love Ark Of Napishtim

console.log(`${A} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${A} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD

// ========================
// assignment 6 "week-> 16"
// ========================
console.error("assignment 6 week-> 16");

let chosen = 2;

let myFriendsssssssss = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
let { title, age, available, skills } = myFriendsssssssss[chosen - 1];

console.log(title);
console.log(age);
console.log(available ? "Available" : "Not Available");
console.log(skills[1]);

// ========================
// assignment 1 "week-> 17"
// ========================
console.error("assignment 1 week-> 17");

let setOfNumbers = new Set().add(10);

setOfNumbers.add(20);

let setOfNumbersSize = setOfNumbers.size;

setOfNumbers.add(setOfNumbersSize);

console.log(setOfNumbers);
console.log(setOfNumbersSize);

// ========================
// assignment 2 "week-> 17"
// ========================
console.error("assignment 2 week-> 17");

let myFriendssss = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

console.log(new Set(myFriendssss.sort()));

// ========================
// assignment 3 "week-> 17"
// ========================
console.error("assignment 3 week-> 17");

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let mapInfo = new Map(Object.entries(myInfo));

console.log(mapInfo);
console.log(mapInfo.size);
console.log(mapInfo.has("role"));

// ========================
// assignment 4 "week-> 17"
// ========================
console.error("assignment 4 week-> 17");

let theNumberOne = 100020003000;

console.log(
  +[...new Set([...theNumberOne.toString()].reverse())].sort().join("")
);

// ========================
// assignment 5 "week-> 17"
// ========================
console.error("assignment 5 week-> 17");

let theName = "Elzero";

console.log(theName.split(""));
console.log(Object.assign([], theName));
console.log([...new Set(theName)]);
console.log(Array.from(theName));
console.log([...theName]);

// ======================================
// assignment 6 "week-> 17 and challenge"
// ======================================
console.error("assignment 6 week-> 17 and challenge");

//let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
//let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
let chars = ["Z", "Y", "A", "D", "E", 10, 1];

let numbers = chars.filter((va) => typeof va === "number");
let letters = chars.filter((va) => typeof va === "string");

let target = 0;
let start = numbers.length;
let end = numbers.length * 2;

console.log([...numbers, ...letters].copyWithin(target, start, end));

// ========================
// assignment 7 "week-> 17"
// ========================
console.error("assignment 7 week-> 17");

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log(numsOne.concat(numsTwo));
console.log([...numsOne, ...numsTwo]);
console.log([numsOne, numsTwo].flat());

// ======================================
// assignment 8 "week-> 17 and challenge"
// ======================================
console.error("assignment 8 week-> 17 and challenge");

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log([...n1, ...n2].length * Math.max(...n2));

// ========================
// assignment 1 "week-> 18"
// ========================
console.error("assignment 1 week-> 18");

let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipValid = /\d{4}:\w{3}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/gi;

console.log([ip]);
