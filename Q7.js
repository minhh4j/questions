promis
     .then((responce) => {
        console.log(responce);
     })


const Promis = new Promise ((resolve ,reject ) => {
    reject("failed!")
})
 
Promis.catch((error) => {
    console.log(error);
})


const Promis = new Promise ((resolve , reject ) => {
    resolve("secces!")
    reject("failed!");

});

Promis.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
    
})



function task1(num){
  new Promise ((resolve , reject) => {
    setTimeout(() => {
         resolve(num)
    },1000);
 });
}

function task2(num){
    return new Promise ((resolve , reject) => {
        setTimeout(() => {
            resolve(num)
        },1000)
    });
}

task1(5)
       .then((response) => {
        return task2(response + 5);
       })
       .then((response) => {
        console.log(response);
        
       });


let a = {
    name : "minhaj" , 
    age : 18,
    id : 52565
}

let b =`{
  "name" : "minhaj",
  "age"  : 18,
  "id" :52565
}`

const object =JSON.parse(b);
const string =JSON.stringify(a)



console.log(typeof string  + "\n" +string);
console.log(typeof object + "\n" + object);


//////////method///////////////////

 
all///////

const promis1 = new Promise ((resolve , reject ) => {
    resolve(["hello" , "javascript"]);
});

const promis2 = new Promise ((resolve , reject ) => {
    resolve(["hi" , "java"])
});

const Allpromis = Promise.all([promis1,promis2]) ;

Allpromis.then((res) => {
    console.log(res);
    
});

allsetiled//////

const promis1 = new Promise ((resolve , reject ) => {
    resolve("API succes!")
});

const promis2 = new Promise ((resolve , reject) => {
    reject("API failed!")
});


const Allpromis = Promise.allSettled([promis1 ,promis2]);

Allpromis.then((res) => {
    console.log(res)
});

any//////

const promis1 = new Promise((resolve , reject) => {
   // resolve("API succes!");
   // reject("API rejected");
});

const promis2 = new Promise((resolve , reject) => {
    resolve("API failed!");
});

const Allpromis = Promise.any([promis1,promis2]);

Allpromis.then((res) => {
    console.log(res);
    
})

rice/////////


const promis1 = new Promise ((resolve , reject) => {
   resolve("API secces!");
})

const promis2 = new Promise ((resolve , reject) => {
    reject("API rejected")
})

const allpromis = Promise.race([promis1 , promis2]);

allpromis.then((res) => {
    console.log(res)
}).catch((res) => {
    console.log(res)
})



const promis1 = new Promise ((resolve , reject) => { 
   // resolve(["hello world" , "namasthe world"])
    reject(("API failed"))

});


async call normal function

async function data(){
    
    const responce = await promis1 ; 
    console.log(responce)
}

data()

async call arrow function

const data = async() => {
    
    const responce = await promis1 ; 
    console.log(responce)
}

data()

async call iife

(async() => {
    const responce = await promis1 ; 
     console.log(responce)
})();


const data = async () => {
    const response = await promis1.catch((err) => {
        console.error(err);
    })
    if(response){
        console.log(response);
}

    
}
data()