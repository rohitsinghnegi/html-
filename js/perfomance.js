//code 1 
const t1 = performance.now();
for(let i=1;i<=50;i++){
    let para = document.createElement('p');
     para.textContent="this is para " + i;
     document.body.appendChild(para);
}
const t2 = performance.now();
console.log("time by one;"+(t2-t1));

// standard way of knowingg perfomance
// perfomance.now()