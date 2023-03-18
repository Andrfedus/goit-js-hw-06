const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("ul#ingredients");
let ingredientCopy;


ingredientCopy = ingredients.map(ingredient => {
  const ingredientLi = document.createElement("li");
  ingredientLi.textContent = ingredient;
  ingredientLi.classList = "item";
  return ingredientLi;
});


console.log(ingredientCopy);

list.append(...ingredientCopy);

