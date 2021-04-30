const person = {name: 'kutub', mobile: '55221144', add : 'dholaipar', age: 27};

const { name, add } = person; // this way you can access object property
console.log(name,add);

const friends = ['rahim', 'karim', 'jadu', 'modhu'];

const [frist, ...rest ] = friends;

console.log(frist, rest);