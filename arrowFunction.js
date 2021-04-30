// function daubleIt(num) {
//     return num * 2;
// }

// const daubleIt = function (num) {
//     return num * 2;
// }

// arrow function : 
const daubleIt = num => num * 2; // when single parameter
const addItem = (num1, num2) => num1 + num2; // when more than one parameter
const give5 = () => 5; // when no parameter
const bigMath = (x, y) => { // when multiple task parameter
    const add = x + y;
    const deduct = x - y;
    const mult = add * deduct;
    return mult;
}

const result = daubleIt (10);
const result2 = addItem (10,50);
const result3 = give5 ();
const result4 = bigMath (10,5);
console.log(result4);