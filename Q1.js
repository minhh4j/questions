let arr = [ 2,3,7,6,8,-4,] ;

let  x =arr.map(x => Math.abs(x));

let b =x.reduce((a,b) => a + b)


console.log(b)

