const { ModuleDetectionKind } = require("typescript");

let obj1 = {"name":"rohon","age":13,"height":3.6};
let obj2=obj1;
obj2.age=14;
console.log(obj1);
console.log(obj2);
//op:- { name: 'rohon', age: 14, height: 3.6 } { name: 'rohon', age: 14, height: 3.6 } 
//# porble in upside code ,if we change in obj2 it change vlaue of obj1 becouse obj2 only carry referanve.
//to solve this deepcopy & shellocopy concept came;
//shellocopy:- by using object.assine() or {...obj1} we can to sellocopy but it create same Top{let obj2=obj1;} issue with nested object values but by "deepcopy" we can overcome this nested issue.  
//deepcopy:-by "JSON.parse(JSON.stringify(obj))" or by coding manualy this logic
function makedeepcopy(obj)
{
    if(typeof obj !=='object' || obj === null)
    {  return obj; }
    var copiedval = Array.isArray(obj)?[]:{};
    var keys = Object.keys(obj);
    for(var i = 0;i<keys.length;i++)
    {
        copiedval[keys[i]]= makedeepcopy(obj[keys[i]]);
    }
    return copiedval;
}
var copy = makedeepcopy({kay:"ram",age:20});

//###So by using deepcopy we can create object real copy so that we can change in obj2 whihc not change vlaue of obj1;




// what is Polyfill :- if some mathod is not presend so you have to write its code manualy like 
//                     some browser versone map function is not define so we have to write polyfill mena write manual code for map method

// what is call,apply,bind ?


//------------------------------------------------------------------------
// js callback , promises , try-catch , fatch , axios 
js wait for none what ever we write in it it exicute it on that time only which is syncronus task 

good part of callback :- 
if we have to make delay to execute any code or any time take process we will write into callback which is async task by using callback
ex:- setTimeout(()=>{console.log("this code will delay")},5000)




bard part of callback :- issues like callback hell , inversone of controle 
but if we  have multiple api call and there is depandancy with one another in that can we use callback is called callback hell.
to solve this we have "promises" come into pichdr.
ex:- api.createOrder(creat,()=>{
    api.procearTopay(pay,()=>{
        api.showorderSummery(summery,()=>{
          console.log("every thing is success full")
        })
    })
})
so in this case we use "promises".

wahrt is inversone:- when we have callback if we pass to another function the we loss control now that function have rights to execute that code or Not .
                     so for one lever we use callback like "settimeout" but we not proefer callback for nested api call.Array




// Synchronous Code: JavaScript is single-threaded, and by default, most code runs synchronously (one operation at a time).
// 	2.	Asynchronous Tasks with Callbacks: For tasks that take time (e.g., setTimeout, API calls, file I/O), we use callbacks to handle the result of these tasks after they complete. However, deeply nested callbacks (callback hell) can make code hard to read and maintain.
// 	3.	Promises: Promises were introduced to solve the problem of callback hell. A promise represents the eventual result (or failure) of an asynchronous operation. It has states (pending, fulfilled, rejected) and its object is imutable (no one can chnage its data & what aver come in .then all his will definatly exicut)
// and provides methods like .then() and .catch() to handle the response or error.

// 	4.	Async-Await: async-await is built on top of promises and allows asynchronous code to be written in a synchronous style. This makes the code cleaner and easier to understand. We still use try-catch for error handling, but it’s more readable than chaining .catch() for each promise.
// 	5.	Fetching APIs:
// 	•	Fetch API: A modern, built-in way to make HTTP requests in JavaScript. However, it lacks certain features like automatic JSON parsing for errors, request cancellation, etc.
// 	•	Axios: A third-party library that provides additional features over fetch, such as request and response interceptors, automatic JSON parsing, timeout configuration, and more.
//     Summary:Callbacks are foundational for async tasks but can lead to messy code / Promises simplify handling of async tasks/ Async-Await improves readability of promise-based code / Use Fetch API or Axios for HTTP requests, with Axios being more feature-rich.

// JavaScript started with callbacks for asynchronous tasks like setTimeout. To handle dependent tasks and avoid callback hell, promises were introduced, providing cleaner chaining with .then() and .catch(). For better readability, async/await was added, making asynchronous code look synchronous while integrating well with try-catch for error handling. For HTTP requests, fetch is a modern API built on promises, but Axios is preferred for its extra features like automatic JSON handling, timeouts, and better error reporting.


//#we can create over on promise like this 
// let tocreate = true;
// const myPromise = new Promise((resolve, reject) => {
//     if (tocreate) {
//       resolve('Success!'); 
//     } else {
//       reject('Error!'); 
//     }
//   });


// # what of ways to handle try-catch ? which are inter-defpaden on one another beocuse may be there are shering data in downword chanin
myPromise.then(()=>{console.log("this is first then")})
         .then(()=>{console.log("this is second then")})
         .then(()=>{console.log("this is third then")})
         .catch(()=>{console.log("this is catch method")}) // if any of .then there is error .then exicution terminate and this catch will exicute

myPromise.then(()=>{console.log("this is first then")})
         .then(()=>{console.log("this is second then")})
         .then(()=>{console.log("this is third then")})
         .catch(()=>{console.log("this is catch method")})
         .then(()=>{console.log("this is third then")}) // this i .then will definatly exicute in all case

myPromise.then(()=>{console.log("this is first then")})
         .catch(()=>{console.log("this is catch method")})
         .then(()=>{console.log("this is second then")})
         .catch(()=>{console.log("this is catch method")})
         .then(()=>{console.log("this is third then")})
         .catch(()=>{console.log("this is catch method")}) // if any of .then will got error its respacted catch will exicute becouse we assine .catch for every .then.

         
// # types of promise api
     Promise.all()
     Promise.allSettled()
     Promise.race()
     Promise.any()

                        Waits for All?	    Stops on Rejection?	        Returns
Promise.all	            Yes	                Yes (on first rejection)	Array of resolved values or first rejection error.
Promise.allSettled   	Yes	                No	                        Array of status objects (fulfilled or rejected).
Promise.race        	No (first settles)	No	                        First resolved/rejected value.
Promise.any	            No (first resolves)	Yes (if all reject)	        First resolved value or AggregateErro



what is mena by iterable in js ???




# what is async await ??
// async always return "promise" whether you retunr one promise from it o norma value it always retunr promise.
ex:      let promiseData = async function garData(){ return  myPromise; }   // promise object 
         let promiseData = async function garData(){ return  10; }          // promise object 
// we can use .then.catch outside of async-await also and inside also async-await also whih try.catch.
@why we need async-await and how we handle promise before ???
async-await is uses to handle promise only in more better compare to privies "promise.then.catch"
await is only used under async function ,you write await infornt of promise and it resolve the promise which "fatch,axios will return"




promises exicution in async-await 
If you await each promise one after the other, the second promise will not start until the first one finishes. This results in a sequential execution.
so If you use await in front of each promise inside an async function, the promises will execute sequentially that we call normal promise.



// how we can use  ""asyn_with (fatch/axios) all promise method""
// “Here by applying ‘Promise.all types of method’ we can decide in which way we need execution. In general, with normal promises, they will execute one after another, but with Promise.all, Promise.race, Promise.allSettled, and Promise.any, the rule of execution will change.”
async function fetchWithDelay() {
    const urls = [
      "https://jsonplaceholder.typicode.com/posts/1",
      "https://jsonplaceholder.typicode.com/posts/2",
    ];
    const responses = await Promise.all(
      urls.map(async (url) => {
        await new Promise((resolve) => setTimeout(resolve, 1000)); 
        return fetch(url).then((res) => res.json());
      })
    );
    console.log("Responses with delay:", responses);
  } 
  fetchWithDelay();






# diff in (then.catch) and (try.catch) ??



















/* 
what is node js 
waht is event loop
waht is npm
what is event emiter
what is buffer
whatt is aggrigation
what is stream
what is module explain in breaf
waht is diff in sql and no sql DB
what is indexing
what is fork
what is libuv
what http method and explain me
what is put and patch diff
what is middelwear
what is triger
node js REPL
how can you handle in node js
explain the consept of collection in Mongodb
what is advantage and disadvatage in node js
what is shearding in node js
what are some commonly use timeing featurs of node js
what is chide process in node js

*/