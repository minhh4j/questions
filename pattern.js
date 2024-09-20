let n = 5 ;
let patterrn = "";
for(let i=0 ; i<=n ; i++){
    for(let j = 0; j<n ; j++){
      patterrn += "* "
      
    }
    patterrn +="\n"
}
console.log(patterrn);


let h = 5 ; 
let ptrn = ""
for(let i =0 ; i<=n ; i++){
    for(let j =0 ; j<=i ; j++){
        ptrn += "$ "
    }
    ptrn +="\n"
}
console.log(ptrn);

let a = 5 ;
let prt = "";
for(let i = 0 ; i<=n ; i++){
    for(let j =i ; j < n ; j++){
        prt = prt + "# "
    }
    prt += "\n"
}
console.log(prt)

let b = 5 ;
let str = ""
for(let i = 0 ; i<=n ; i++){
    for(let j=i ; j<=n ; j++){
        str += "  "

    }
    for(let j = 1 ; j<=i ; j++ ){
        str +=" *"
    }
    str += "\n"
}
console.log(str)

let c = 5 ;
let pin = "";
for(let i = 0 ; i<=n ; i++){
    for(let j = 1 ; j<=i ; j++){
        pin += "  ";
    }
    for(let j =i ; j<=n ; j++){
        pin +="$ "
    }
    pin += "\n"
}
console.log(pin)


let d =  5 ; 
let cod = ""; 
for(let i= 0 ; i< n ; i++){
    for(let j =i ; j<n ; j++){
        cod += "  "
    }
    for(let j =1 ; j<i ; j++){
        cod +="# "
    }
    for(let j = 1 ; j<=i ; j++){
        cod += "# "
    }
    cod += "\n"
}
console.log(cod)


 






