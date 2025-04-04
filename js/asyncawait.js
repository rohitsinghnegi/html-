// it is to handle promises 
// through this process async code can be excuted as syncro by stoping the flow of data
// async function getData(){
//     setTimeout(function() {
//         console.log("its timeout block")
//     },3000);
// }
// getData();

async function getData(){

   let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
   let data = await response.json();

   console.log(data);
}
// prepare url -> api endpoint -> sync
 // await// fetch data  ->network call -> async
// process data ->sync
getData();
