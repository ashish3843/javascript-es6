function add(num1, num2 = 10) {  // new system in es6
        const totaladd = num1 + num2;
        return totaladd
    }
    
    let result = add(10);
    console.log(result);

// function add(num1, num2) {  // old system before es6
// if (num2 == undefined) {
//     num2 = 10;
// }

//     const totaladd = num1 + num2;
//     return totaladd
// }

// let result = add(10, 30);
// console.log(result);

// function add(num1, num2) {  // 2nd system before es6
//    num2 = num2 || 5;
    
//         const totaladd = num1 + num2;
//         return totaladd
//     }
    
//     let result = add(10);
//     console.log(result);
