let str = "hello shahid , how are you" ;
let arr =str.split(" ") ; 
for(let i =0 ; i<arr.length ; i++){
    for(let j=i+1; j<arr.length ; j++){
        if(arr[i].length>arr[j].length){
            let temp  =arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}
console.log(arr[arr.length-1] , arr[arr.length-1].length)