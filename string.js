let name1 = "heLLo" ;
let name2 = "WorlD" ;
let join =name1.at(0).toLocaleUpperCase()+name1.slice(1).toLocaleLowerCase()+name2.toLocaleLowerCase()
console.log(join);

let text = "hello world" ;
let a =text.at(0).toLocaleUpperCase()+text.slice(1).toLocaleLowerCase();
console.log(a)


let text1 = "hello world" ; 
let b =text1.search("world")
console.log(b)


let text2 = "hello world" ;
let c =text2.replace("hello","sooi");
console.log(c);

let text3 = "hello world" ; 
let d =text3.slice(5)
console.log(d);

let text4 = "hello world" ;
let e =text4.substring(5,0)
console.log(e)

let text5 = "hello world";
let f = text.substr(5,6)
console.log(f);

let text6 = "       hello world      "; 
let g =text.trim();
console.log(g)

let text7 = "       hello world      "; 
let h =text.trimStart();
console.log(g)

let text8= "world"; 
let i =text.padStart(1,"hello");
console.log(i)

