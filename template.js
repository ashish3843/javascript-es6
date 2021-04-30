const firstName = 'ashish';
const lastName = 'dutta';
const fullName = firstName + ' ' + lastName; // old system before es6
const fullName2 = `${firstName} ${lastName} ${10+54+36} is good boy` // // using Template (carate ``) of es6


const multiLine = 'i love you\n'  // old system before es6
+ 'i miss you\n'
+ 'i hate you';


const multiLine2 = `i love you 
i miss you
i dont need you`;  // using Template (carate ``) of es6
console.log(multiLine2);