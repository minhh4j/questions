// console.log(x);

// let x=10;




// function name1(){
//     console.log("end");
// }

// function name2(callback , timediley){
//   setTimeout(callback , timediley);
// }

// name2(name1 , 2000);

// function name3(){
//     console.log("start")
// }

// name3()

// function task1(callbak){
//     setTimeout(() => {
//         console.log("task 1 comblited");
//         callbak()
//     },2000)

    
// }

// function task2(callback){
//     setTimeout(() => {
//         console.log("task 2 comblited");
//         callback()
//     },5000)

// }

// function task3(callback){
//     setTimeout(() => {
//     console.log("task 3 comblited");
//     callback()
//     },3000)

// }

// function task4(callback){
//     setTimeout(() => {
//         console.log("task 4 comblited");
//         callback()
//     },2000)

// }

// function task5(callback){
//     setTimeout(() => {
//         console.log("task 5 comblited");
//         callback()
//     },1500)
    

// }



// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => {
//                 task5(() => {
//                     console.log("all comblited")
//                 })
//             })
//         })
//     })
// })




// function task1(callbak){
//     setTimeout(() => {
        
//         callbak(5)
//     },2000)

    
// }

// function task2(callback){
//     setTimeout(() => {
      
//         callback(5)
//     },5000)

// }

// function task3(callback){
//     setTimeout(() => {

//     callback(5)
//     },3000)

// }

// function task4(callback){
//     setTimeout(() => {
      
//         callback(5)
//     },2000)

// }

// function task5(callback){
//     setTimeout(() => {
       
//         callback(5)
//     },1500)
    

// }



// task1((value1) => {
//     task2((value2) => {
//         task3((value3) => {
//             task4((value4) => {
//                 task5((value5) => {
//                     console.log(value1 + value2 + value3 + value4 + value5)
//                 })
//             })
//         })
//     })
// })

// const promis = new Promise ((resolve , reject) => {
//     resolve("succes!"); 

// });

// promis
//      .then((responce) => {
//         console.log(responce);
//      })


// const Promis = new Promise ((resolve ,reject ) => {
//     reject("failed!")
// })
 
// Promis.catch((error) => {
//     console.log(error);
// })


// const Promis = new Promise ((resolve , reject ) => {
//     resolve("secces!")
//     reject("failed!");

// });

// Promis.then((response) => {
//     console.log(response);
// }).catch((error) => {
//     console.log(error);
    
// })



// function task1(num){
//   new Promise ((resolve , reject) => {
//     setTimeout(() => {
//          resolve(num)
//     },1000);
//  });
// }

// function task2(num){
//     return new Promise ((resolve , reject) => {
//         setTimeout(() => {
//             resolve(num)
//         },1000)
//     });
// }

// task1(5)
//        .then((response) => {
//         return task2(response + 5);
//        })
//        .then((response) => {
//         console.log(response);
        
//        });


// let a = {
//     name : "minhaj" , 
//     age : 18,
//     id : 52565
// }

// let b =`{
//   "name" : "minhaj",
//   "age"  : 18,
//   "id" :52565
// }`

// const object =JSON.parse(b);
// const string =JSON.stringify(a)



// console.log(typeof string  + "\n" +string);
// console.log(typeof object + "\n" + object);


////////////method///////////////////

 
//all///////

// const promis1 = new Promise ((resolve , reject ) => {
//     resolve(["hello" , "javascript"]);
// });

// const promis2 = new Promise ((resolve , reject ) => {
//     resolve(["hi" , "java"])
// });

// const Allpromis = Promise.all([promis1,promis2]) ;

// Allpromis.then((res) => {
//     console.log(res);
    
// });

//allsetiled//////

// const promis1 = new Promise ((resolve , reject ) => {
//     resolve("API succes!")
// });

// const promis2 = new Promise ((resolve , reject) => {
//     reject("API failed!")
// });


// const Allpromis = Promise.allSettled([promis1 ,promis2]);

// Allpromis.then((res) => {
//     console.log(res)
// });

//any//////

// const promis1 = new Promise((resolve , reject) => {
//    // resolve("API succes!");
//    // reject("API rejected");
// });

// const promis2 = new Promise((resolve , reject) => {
//     resolve("API failed!");
// });

// const Allpromis = Promise.any([promis1,promis2]);

// Allpromis.then((res) => {
//     console.log(res);
    
// })

//rice/////////


// const promis1 = new Promise ((resolve , reject) => {
//    resolve("API secces!");
// })

// const promis2 = new Promise ((resolve , reject) => {
//     reject("API rejected")
// })

// const allpromis = Promise.race([promis1 , promis2]);

// allpromis.then((res) => {
//     console.log(res)
// }).catch((res) => {
//     console.log(res)
// })



// const promis1 = new Promise ((resolve , reject) => { 
//    // resolve(["hello world" , "namasthe world"])
//     reject(("API failed"))

// });


// async call normal function

// async function data(){
    
//     const responce = await promis1 ; 
//     console.log(responce)
// }

// data()

// async call arrow function

// const data = async() => {
    
//     const responce = await promis1 ; 
//     console.log(responce)
// }

// data()

// async call iife

// (async() => {
//     const responce = await promis1 ; 
//      console.log(responce)
// })();


// const data = async () => {
//     const response = await promis1.catch((err) => {
//         console.error(err);
//     })
//     if(response){
//         console.log(response);
// }

    
// }
// data()


// function name(){
//     const promis = new  Promise((resoleve , reject ) => {
//         resoleve("suhail");
//         reject("hisham");
//         return promis ;
//     });

// }

//    promis.then((res) => {
//     console.log(res);
    
// }).catch((err) => {
//     console.error(err);
    
// })

   
// name()





// let arr = [
//     {name : "minhaj" , age :18},
//     {name : "srk" , age :20},
//     {name : "rithik roshan", age :22}
// ]
// console.log(arr.reduce((acc,val) => acc +val.age,0));




// let arr = [
//         {name : "minhaj" , age :18},
//         {name : "srk" , age :20},
//         {name : "rithik roshan", age :22}
//     ]
//     let l=0
// let b =arr.reduce((y,x) =>x.age>l?x.age:l ,0)
// console.log(b);


// let arr =[ 
//     {name : "hamsa" , age :23 , pin : 1445},
//     {name  : "latheef" , age :29 , pin :1443},
//     {name : "majeed" , age : 36 , pin :1444}
// ]

// let ans =arr.map((person) => {
//     return { name:person.name , age:person.age}
// });

// console.log(ans);


// let arr =[ 
//     {name : "hamsa" , age :23 , pin : 1445},
//     {name  : "latheef" , age :29 , pin :1443},
//     {name : "majeed" , age : 36 , pin :1444}
// ];

// let ans =arr.reduce((acc,val) => acc + val.age,0)
// console.log(ans);


// let arr =[ 
//     {name : "hamsa" , age :23 , pin : 1445},
//     {name  : "latheef" , age :29 , pin :1443},
//     {name : "majeed" , age : 36 , pin :1444}
// ]

// let a =arr.push({name : "koya" , age : 40 , pin : 2098})
// console.log(arr)



// let arr =[ 
//     {name : "hamsa" , age :23 , pin : 1445},
//     {name  : "latheef" , age :29 , pin :1443},
//     {name : "majeed" , age : 36 , pin :1444},

// ]

// let larg =0
// let ans =arr.reduce((x,y) => y > larg ?larg :y.age,0 )
// console.log(ans);


// let arr =[ 
//     {name : "hamsa" , age :23 , pin : 1445},
//     {name  : "latheef" , age :29 , pin :1443},
//     {name : "majeed" , age : 36 , pin :1444},

// ]
// let a =arr.filter((x) => 24 < x.age)
// let ans = a.map((person) => {
//     return {name:person.name , age:person.age}
// })
// console.log(ans)


// let arr =[
//     {
//         name:"shafeer",
//         age : 42 ,
//         mark:{
//             eng : 12 ,
//             arb : 16,
//             mal : 20
//         }
//     },


//     {
//         name:"irshana",
//         age : 35 ,
//         mark:{
//             eng : 11 ,
//             arb : 10,    
//             mal : 15
//         }
//     }
// ]

// let a =arr.map((person) => {
//     let a = person.mark.arb + person.mark.eng + person.mark.mal;
//     let b =a / 3
    
//     return {
//         name:person.name,
//         avargemark:b
//     } 

// })

// console.log(a);


