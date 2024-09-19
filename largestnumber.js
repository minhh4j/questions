let arr = [1,2,40,50,56,32,85,75,41,58,68,84,86]
let largest = arr[0]

for(let i =0 ; i<arr.length ; i++){
    for(let j = 0 ; j<arr.length ; j++){
    if(arr[j]>largest){
      largest = arr[i]
    }
            
}
}
console.log(largest)