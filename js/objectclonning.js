// dynamic object nature which data can be changed in runtime
let src ={
    age:13,
    Wt:68,
    ht:180
};
// console.log(obj);

// obj.color="white"
// console.log(obj);

//object cloning is making another object not reference
//using spread operator(...)

// let dest ={...src};//cloning done
// src.age=56;
// console.log("src:",src);
// console.log("dest:",dest);

//assign method dest=object.assign
// let dest = Object.assign({},src);
// console.log("dest",dest);


//iteration method

let dest ={};
for(let key in src ){
    let newkey=key;
    let newValue = src[key];
    // inseert key and value 
    dest[newKey] = newValue;
}






// garbage collector(no conntrol always run)
// the memory which no longeer used is freed through gc
// memory leak are non ussed memory cannot be used 