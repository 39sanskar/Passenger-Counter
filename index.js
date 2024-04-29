let count = 0;
let countE1 = document.getElementById("count-el");

const increment = () => {
    count += 1;
    countE1.innerText = count;
};

const decrement = () => {
    count -= 1;
    countE1.innerText = count;
};

let saveEl = document.getElementById("save-el");
const save = () => {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    
    countE1.textContent = 0;
    count = 0;
    
};



