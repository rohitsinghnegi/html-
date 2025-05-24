// fetching the value from text 
const countValue = document.querySelector('.zero');

const increment = () => {
    let value = parseInt(countValue.innerText)
    value = value + 1;
    // returning th value
    countValue.innerText = value;
}

const decrement = ()=>{
    let value = parseInt(countValue.innerText)
    value = value-1;
    countValue.innerText = value;
}
