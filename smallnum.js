let arr = [2, 3, 5,6,2,78,95,48,68,1]
let small = arr[0]

for(let i =0 ; i<arr.length ; i++){
    for(let j = 0 ; j<arr.letgth ; j++ ){
        if(small > arr[i]){
            small = arr[i]
        }
    }
}
console.log(small)