//error are events that distrub the normal flow off the excution 
// compile time error catch during parasing(ex. = syntax error)
//run time while excuting 


// error handling
// try catch block
// try{

//     console.log(x);//it will catch the error then stops the flow of this block

//     //a
//     //b
// }
// catch(error){
//error ke sath kya karna he 
//such retry logic
//custom error
//fallback mechanism
// }


//finally block run evertime error se  fark nhi padata
// finally{

// }
//to throw or show error for custom error through throw kyword

try{
    console.log(x);
}
catch(err)
{
    throw new Error("bhai decalrre to kar x");

}