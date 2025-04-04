//callstack is bascially calling function according to stack 
//also track the function
//functions are first class function becauuse this are motstly used in js 
// let greet= function(){
//     console.log("have a good day");
// }
// greet();this is normal function

//passing the function 

// function greet(){
//     console.log("have a good day");
// }
// function greetMe(greet,fullName){
//     console.log("hello",fullName);
//     greet();

// }
// greetMe(greet,"rohit");




// returning function
// function solve(number){
//     return function(number){
//         return number*number;
//     }
// }
//  let ans = solve(5);
//   let finalAns =ans(10);
//   console.log(finalAns);

//store function
// const arr = [
//   function (a,b){
//     return a+b;
//   },
//   function(a,b){
//     return a-b;

//   },
//   function(a,b){
//     return a*b;
//   }

// ];
// let first = arr[0];
// let ans = first(5,10);
// console.log(ans);

let obj ={
    age:25,
    wt:56,
    ht:245,
    greet:()=>{
        console.log("hello rohit")
    }
}
console.log(obj.age);
obj.greet();