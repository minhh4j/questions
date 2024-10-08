
let a = "Hey wollef sroirraw" ;
let b =a.split(" ");
let result =[]
for(let i = 0; i<b.length ; i++){
    if(b[i].length >= 5){
        result.push(b[i].split("").reverse().join(""))
    }
    else{
        result.push(b[i])
    }
}
console.log((result).join(" "))