
let arr = [
    {name :"john" , salary :23000},
    {name :"steve" , salary :40000},
    {name :"martin" , salary :15000}
]

let a=arr.reduce((result,vlu)=> result+=vlu.salary,0)
console.log(a)
