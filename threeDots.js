const age = [11,20,14,35,14];
const age2 = [25,87,45,12,36,65,41];
const age3 = [22,74,15,14,85,44];
const allAge = age.concat(age2).concat(age3).concat([2]);
const allAge2 = [...age, ...age2, ...age3, 2];  // using 3dots

const doctor = 250;
const engineer = 150;
const banker = 350;
const max = Math.max(doctor,engineer,banker);
const money = [250,150,350];
const max2 = Math.max(...money); // using 3dots (when use ... it spared the inner element of the array)

console.log(max2);