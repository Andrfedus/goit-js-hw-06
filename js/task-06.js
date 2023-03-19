// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.


// Яка кількість символів повинна бути в інпуті,
//  зазначається в його атрибуті data - length.
// Якщо введена правильна кількість символів,
// то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid,
// які ми вже додали у вихідні файли завдання.




const validInput = document.querySelector("#validation-input");
const validLength = Number(validInput.dataset.length);


validInput.addEventListener('blur', validNumber);


function validNumber(event) {
    const inputColor = event.currentTarget;
    if (inputColor.value.length === validLength) {
        validInput.classList.add("valid");
        validInput.classList.remove("invalid");
    }
    else {
        validInput.classList.remove("valid");
        validInput.classList.add("invalid");
    };
}


