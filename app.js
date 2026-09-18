const recipeContainer =
document.getElementById("recipeContainer");

const days = [
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",
"Sunday"
];

function displayRecipes() {

recipes.forEach(recipe => {

recipeContainer.innerHTML += `

<div class="recipe-card">

<h3>${recipe.name}</h3>

<p>
⏱ Prep ${recipe.prepTime} mins
</p>

<p>
🔥 Cook ${recipe.cookTime} mins
</p>

<p>
⭐ Kid Rating ${recipe.kidRating}/5
</p>

<p>
🥦 Healthy ${recipe.healthyRating}/5
</p>

<button onclick="addToPlanner('${recipe.name}')">

Add To Planner

</button>

</div>

`;

});

}

displayRecipes();

function pickDinner() {

const chosen =

recipes[
Math.floor(
Math.random() * recipes.length
)
];

document.getElementById("result")
.innerHTML =

`<h3>Tonight's Dinner:</h3>
<p>${chosen.name}</p>`;

}

const plannerGrid =
document.getElementById("plannerGrid");

days.forEach(day => {

plannerGrid.innerHTML += `

<div class="day-card">

<strong>${day}</strong>

<p id="${day}">
No Meal Chosen
</p>

</div>

`;

});

let currentDay = 0;

function addToPlanner(meal) {

document.getElementById(
days[currentDay]
).innerText = meal;

currentDay++;

if(currentDay > 6){

currentDay = 0;

}

savePlanner();

}

function savePlanner(){

const data = {};

days.forEach(day => {

data[day] =
document.getElementById(day)
.innerText;

});

localStorage.setItem(
"mealplanner",
JSON.stringify(data)
);

}

function loadPlanner(){

const planner =
JSON.parse(
localStorage.getItem(
"mealplanner"
)
);

if(!planner) return;

days.forEach(day => {

document.getElementById(day)
.innerText = planner[day];

});

}

loadPlanner();

function generateShoppingList(){

let ingredients = [];

recipes.forEach(recipe => {

days.forEach(day => {

const meal =
document.getElementById(day)
.innerText;

if(meal === recipe.name){

ingredients.push(
...recipe.ingredients
);

}

});

});

ingredients =
[...new Set(ingredients)];

const list =
document.getElementById(
"shoppingList"
);

list.innerHTML = "";

ingredients.forEach(item => {

list.innerHTML +=
`<li>${item}</li>`;

});

}

function scrollToSection(id){

document
.getElementById(id)
.scrollIntoView({
behavior:"smooth"
});

}
