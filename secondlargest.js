//SECOND LARGEST NUMBER

let str = "958764123";
let arr =str.split("")

for(let i =0 ; i<arr.length;i++){
    for(let j=i+1 ; j<arr.length ; j++){
        if(arr[i]>arr[j]){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] =  temp
        }
    }
}
console.log(arr[arr.length-2])