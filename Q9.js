var findGCD = function(nums) {
    let max = Math.max(...nums)
    let min = Math.min(...nums)
    let result = []
    for(let i = 1 ; max >=i ; i++){
        if(min % i ==0 && max % i ==0 ){
            result.push(i)
        }
    }
   return result[result.length-1]
};
console.log(findGCD([2,5,6,9,10]))