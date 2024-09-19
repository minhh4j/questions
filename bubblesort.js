let arr = [8,7,6,5,7,4,5,3,2,8,1]

for(let i = 0 ; i<arr.length ; i++){
     for(let j= 0 ; j<arr.length ; j++){
        if(arr[j]>arr[j+1]){
            let temb = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temb
        }

     }
}
console.log(arr)