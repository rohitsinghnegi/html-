const copyMsg = document.querySelector( "[data-copyMSG]" );
const inputSlider = document.querySelector("[passwordLength]");
const copyButton = document.querySelector("[copyButton]");
const passwordLength = document.querySelector("[pass-length]");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase")
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
const strengthShow = document.querySelector("[strengthshower]");
const generatePassword = document.querySelector(".Generate-button");
const passwordDisplay = document.querySelector("[password-display]");
const allCheckbox = document.querySelectorAll("input[type=checkbox]");
const symbol = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/'

let password = "";
let passwordLambai = 10;
let checkcount = 1;
handleSlider()
setIndicator("#ccc")

function handleSlider(){
    inputSlider.value = passwordLambai;
    passwordLength.innerText = passwordLambai;

    const min = Number(inputSlider.min);
    const max = Number(inputSlider.max);
    inputSlider.style.backgroundSize = ((passwordLambai - min) * 100 / (max - min)) + "% 100%";
}


function setIndicator(color){
    strengthShow.style.backgroundColor = color;
}


function getRdmInteger(min,max){
  return  Math.floor( Math.random()* (max-min)) + min;
}

function generateRandomNumber(){
    return getRdmInteger(0,9);
}

function generateRandomUppercase(){
    return String.fromCharCode(getRdmInteger(65,91));
}

function generateRandomLowercase(){
    return String.fromCharCode(getRdmInteger(97,123));
}

function generateRandomSymbol(){
    const randNum = getRdmInteger(0,symbol.length);
    return symbol.charAt(randNum);

}
function calcStrength() {
    let hasUpper = uppercase.checked;
    let hasLower = lowercase.checked;
    let hasNum = numbers.checked;
    let hasSym = symbols.checked;
    let length = passwordLambai;

    if (hasUpper && hasLower && (hasNum || hasSym) && length >= 8) {
        setIndicator("green"); // strong
    } else if (
        (hasUpper || hasLower) &&
        (hasNum || hasSym) &&
        length >= 6
    ) {
        setIndicator("yellow"); // medium
    } else {
        setIndicator("red"); // weak
    }
}    


allCheckbox.forEach(checkbox => {
    checkbox.addEventListener("change", handleCheckboxChange);
});

function handleCheckboxChange() {
    // Call your logic here, for example:
    calcStrength();
    // You can also log or handle other updates as needed
}


async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value || passwordDisplay.textContent);
        copyMsg.innerText = "Copied!";
    } catch (e) {
        copyMsg.innerText = "Failed!";
    }
    copyMsg.classList.add("active");
    setTimeout(() => {
        copyMsg.classList.remove("active");
        copyMsg.innerText = "";
    }, 1500);
}

inputSlider.addEventListener("input", function() {
    passwordLambai = inputSlider.value;
    passwordLength.innerText = passwordLambai;
    handleSlider(); // <-- update the slider fill
});

copyButton.addEventListener("click", function() {
    if ((passwordDisplay.value && passwordDisplay.value.length > 0) || (passwordDisplay.textContent && passwordDisplay.textContent.length > 0)) {
        copyContent();
    }
});

generatePassword.addEventListener("click", function() {
    let length = Number(passwordLambai);
    let hasUpper = uppercase.checked;
    let hasLower = lowercase.checked;
    let hasNum = numbers.checked;
    let hasSym = symbols.checked;

    // Special case: No checkbox selected
    if (!hasUpper && !hasLower && !hasNum && !hasSym) {
        passwordDisplay.value = "";
        copyMsg.innerText = "Select at least one option!";
        copyMsg.classList.add("active");
        setTimeout(() => {
            copyMsg.classList.remove("active");
            copyMsg.innerText = "";
        }, 1500);
        return;
    }

    let generators = [];
    if (hasUpper) generators.push(generateRandomUppercase);
    if (hasLower) generators.push(generateRandomLowercase);
    if (hasNum) generators.push(generateRandomNumber);
    if (hasSym) generators.push(generateRandomSymbol);

    let generatedPassword = [];

    // Ensure at least one character from each selected type
    generators.forEach(fn => {
        generatedPassword.push(fn());
    });

    // Fill the rest of the password
    for (let i = generatedPassword.length; i < length; i++) {
        let randFunc = generators[Math.floor(Math.random() * generators.length)];
        generatedPassword.push(randFunc());
    }

    // Shuffle the password to avoid predictable patterns
    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr.join('');
    }
    if ('value' in passwordDisplay) {
        passwordDisplay.value = shuffle(generatedPassword);
    } else {
        passwordDisplay.textContent = shuffle(generatedPassword);
    }

    // Update strength indicator
    calcStrength();
});