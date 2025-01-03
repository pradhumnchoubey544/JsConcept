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





                     // js callback , promises , try-catch ,asinc-await, fatch , axios 
callback :- it is use to perfome asyncronus code.but not for nested api call so promises is come into picher.API
promises :- it will return object which have thre 
fatch :- Fetch is a JavaScript API that helps you call HTTP methods like GET, POST, PUT, DELETE, 
axios :- Axios is a JavaScript library for making HTTP requests, similar to the fetch API, but it offers additional features that make it more user-friendly and powerful.







// is this story is correct of js 
// normany we write syncronus coad 
// but when we have to write asyncronus task we use callback like settimeout which after some time exicute the callback 
// but when we need nested api call all nested ayncr task which depand on one anthoe we use promises
// so promise return object whcih have stateu and respoine of api result 
//  try-catch we use if error come in serten case but for nested code it very clumsey to use try-catch for each api so to make more sempel code we use async-await on top of try-catch .
// and for more days to dela with promise we use fatch but now a days for we use axios whcih giver more feachers compare to fatch for intract with http method 
// is this statment is correct or if i am wrong correct my summery 


// JavaScript started with callbacks for asynchronous tasks like setTimeout. To handle dependent tasks and avoid callback hell, promises were introduced, providing cleaner chaining with .then() and .catch(). For better readability, async/await was added, making asynchronous code look synchronous while integrating well with try-catch for error handling. For HTTP requests, fetch is a modern API built on promises, but Axios is preferred for its extra features like automatic JSON handling, timeouts, and better error reporting.

























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