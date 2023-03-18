// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
// підставляє його поточне значення в span#name - output.Якщо інпут порожній,
// у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>




const nameInput = document.querySelector('#name-input');
const nameOtput = document.querySelector('#name-output');

nameInput.addEventListener("input", testSpan);

function testSpan(event){
    nameOtput.textContent = event.currentTarget.value;
    if (nameOtput.textContent === "") {
        return nameOtput.textContent = "Anonymous"
    };
};


    