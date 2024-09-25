
let arr = [1,2,3,4,5,6,7,8,9,5];


let even =arr.filter(function(elament){
  return elament % 2===0 ;
});

console.log(even);

let odd =arr.filter(function(elament){
  return elament % 2 !==0 ;
});

console.log(odd);

let sumOneelament =arr.map(function(accumiletor,correntvalue){
  return accumiletor + correntvalue ;
});

console.log(sumOneelament);

let sumAll =arr.reduce(function(accumiletor,correntvalue){
  return accumiletor + correntvalue ;
});

console.log(sumAll);