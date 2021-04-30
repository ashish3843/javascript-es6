let friendName = 'Liton';
friendName = 'rajib';
console.log(friendName);

const friendAge = [33, 54, 78, 54];
friendAge.push(44); // can add new value
friendAge[1] = 20; // can change the value

console.log(friendAge);

let num = 0; // cannot use const as value will be change
for (let i = 0; i < 10; i++) {
    const element = 10 ;
    num = num +  element;
}
console.log(num);