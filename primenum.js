

let num = 7 ;
let prime = true ; 

if(num>0 && num <4){
    prime = true ; 
}
else{
    for(let i = 2 ; i <num ; i++){
        if(num%i===0){
            prime = false ;
            break;
        }
        else{
            prime = true ; 
        }
    }
}
console.log(prime)



