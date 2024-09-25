let arr = [12,34,56,78,15,23,3]

let min =arr.reduce(getMin)
let max =arr.reduce(getMix)

console.log(min)
cconsole.log(max)


function getMix(accumiletur,currentvalue){
    return Math.max(accumiletur,currentvalue);
}

function getMin(accumiletor,currentvalue){
    return Math.min(accumiletor,currentvalue)
}