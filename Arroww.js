

let arr = [1,2,3,6,5,4,7,8,9];

let pow =arr.map((elament) => Math.pow(elament,2));

let cube =arr.map((elament) => Math.pow(elament,3));

let numEven =arr.filter((elament) => elament % 2 ==0); 

let numOdd =arr.filter((elament) => elament%2 !==0);

let sumAll =arr.reduce((accumiletor,correntvalue) => accumiletor + correntvalue);

console.log(pow);

console.log(cube);

console.log(numEven);

console.log(numOdd);

console.log(sumAll);
