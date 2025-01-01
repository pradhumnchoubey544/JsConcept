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
//                      some browser versone map function is not define so we have to write polyfill mena write manual code for map method


// what is call,apply,bind ?





















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