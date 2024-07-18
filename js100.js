
/* diff in json and object syntext 
json = { "name": "Alice", "age": 30 }
object = { name: "Bob", age: 25 } 
 */

const { visitFunctionBody } = require("typescript");



/* //1
const data1 = true == {}; // true convert into 1 == {} give false
const data2 = true == !{}; //true == {} this obj is true but reverse of it is fasle so true == false give false
console.log(data1+data2); // fasle+false // when we are adding true convert to 1 and false into 0 so 0+0 = 0
//op = 0
 */


/* // what is wrong in this code
let result = {
    'user name':"ram",age:13
}
console.log(result['user name']); // mostly we can not give space inbatween key but if we need we have to assees it like this 
 */


/* 
console.log(b);
let b = 100; 
op:= error becouse let & const not support hoisting  
*/
//console.log(a);
//var a = 10; 
// op:= undefine but no error becouse var suppoet hoisint 




/* 
let arr = [1,2];
arr[5]= 5;
console.log(arr);//op:-[ 1, 2, <3 empty items>, 5 ] it will take 3,4 as empty items and length is 5
console.log(arr.indexOf(100)); // -1 becouse if indexof not find given value in array it return "-1"
*/




/* // write js code "if we clicked a button a pormise will resolverd" 
const btn = document.querySelector('.bts');
const mypromise = new Promise((res)=>{BroadcastChannel.addEventListener('click',()=>{resolve("my promise is resolved");})
,(reg)=>{console.log("promise is rejacted");}})
mypromise.then((res)=>{console.log(res)});
*/




/* 
let x = [1,2,34,4,5];
let y = [33,44,55];
// spread operate spread open array [] and spread it .
function f1([a,b,...c])
{
console.log(a,c);//1 [ 34, 4, 5 ]
console.log(...x,...y);//1 2 34 4 5 33 44 55
console.log([ , ,...x]);//[ <2 empty items>, 1, 2, 34, 4, 5 ]
}
f1(x);
let obj1 = {name:"rohon",age:13}
let obj2 = {hoby:"sohon",age1:14}
let obj3 = {name:"sohon",age2:14}
console.log(obj1+obj2);//wrong way[object Object][object Object] this is not correct way we have to use spread operater 
let newojb ={...obj1,...obj2}; // correct way { name: 'rohon', age: 13, hoby: 'sohon', age1: 14 }
console.log(newojb);
let newobj2={...obj1,...obj3};// key should be unique,if key is same while merging two object value will replase by last object value
console.log(newobj2);//{ name: 'rohon', age: 13, hoby: 'sohon', age1: 14 } 
// but array not have this unique type of proble like object  
*/





/* when we get NAN :- NotANumber we will get when we deviding string by number*/
/*//what will be output of this code 
//set will remove dublicate from array
const set = new Set([1,10,2,3,4,5,3,4,3]);
console.log(set);//{ 1, 10, 2, 3, 4, 5 }
*/
//console.log(NaN === NaN);// false becouse NaN type is number but the number for both is differant


/* 
const result = ["a","b","c"];
const [data,data2]= result; // this concept is called array-desturing
const [,data3]= result; 
console.log(data ,"&",data2); // op:- a & b
console.log(data3); // op:- b  it sceap first value and print second value
 */



/* // Js have 5 false values "0,undefined,null,"",NaN" except this every thing in js is true only
if({})console.log("truty value");else console.log("false value"); // {} is true value becouse except this 5 false  value all are true valuein js 
 */


/* 
const result = false || {} ||null;
console.log(result); // hear in | operater it search one true vlaue there itslef it stop execution and print it
// op:= {} becouse it is true value
const result1 = false || 0 || "";
console.log(result1); // op     empty becouse "" give empty but 
const result2 = false || 0 || null;
console.log(result2); // op  null  it give value ,if all value is false it search til last for true but it did not found so it print last false vlaue 
 */

/* // how to print fullfiled promise wethoud regacted and wethout then to handle it 
console.log(Promise.resolve("promise is resolved"));// op:- Promise { 'promise is resolved' }
 */




// In this code inner function console.log(data); will print "rohon" but if we remove  let data = "rohon"; then auticty it get outer value which is  let data = "johon";
// remamber if same name if veriable present in another scope "console.log(data);" will take nearest veriable value. 
// this is called "hoisting"
/* let data = "johon";
function getData()
{
    let data = "rohon";  
    console.log(data); 
    
}
getData();
 */
/* function getData()
{
    console.log(data); 
    var data = "rohon";
   // let data = "rohon"; // hoisting concept(if we use "let data = "rohon";" it give error becouse "let,const" is not support hositing but "var data = "rohon"; but var suppert so it will not give error")  
}
getData(); */
// wethout any veriable we define veriable.
/* data = "johon";
function getdata()
{
    console.log(data); // it will "data = "johon";" this as globle veriable ,with in next line we change the value of it. 
    data = "raju";
}
getdata(); */




// we can pass data 
/* function f1(a,b,c,d)
{
    console.log(a,b,c,d);
}
f1(...[10,20,30,40]);



*/
// use of isNaN(not-A-number):- it give true if value is anything except number ,and if itis number it give flase
/* console.log(isNaN("hello"));
console.log(isNaN(200));
 */



// if you delet anyu element from array alos it have "empty" space on that place,so that length should be same 
/*
let arr = [1,2,3,4,5]
arr[3].delete;
console.log(arr.length );// 5
console.log(arr);//[ 1, 2, 3, 4, 5 ]
//but if use same delete in object it not make it as "empty" instead remove full key-value both.
let obj = {name:"pradhumn",age:10};
delete obj.name;
console.log(obj);//op { age: 10 } //in obejct full value will deleted but not in array 
*/






// diff between "var" and "let"
for (let i = 0; i < 5; i++) {
    setTimeout(() => { console.log(i) }, 1); //op:- 5 5 5 5 5 
}
for (let i = 0; i < 5; i++) {
    setTimeout(() => { console.log(i) }, 1); //op:-0 1 2 3 4 5 
}
// why there output is diff 














































/* 
2003141030009882
central mp gramin bank  lalit choubey

 */