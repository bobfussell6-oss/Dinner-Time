const recipes = [

{
name:"Hidden Veg Bolognese",
cuisine:"Italian",
type:"Beef",
prepTime:10,
cookTime:25,
kidRating:5,
healthyRating:5,
ingredients:[
"Beef Mince",
"Carrots",
"Pasta",
"Onion"
]
},

{
name:"Creamy Chicken Pasta",
cuisine:"Italian",
type:"Chicken",
prepTime:10,
cookTime:20,
kidRating:5,
healthyRating:4,
ingredients:[
"Chicken Breast",
"Pasta",
"Cream Cheese"
]
},

{
name:"Chicken Fajita Rice Bowls",
cuisine:"Mexican",
type:"Chicken",
prepTime:15,
cookTime:15,
kidRating:4,
healthyRating:4,
ingredients:[
"Chicken",
"Rice",
"Peppers"
]
},

{
name:"Fish Finger Wraps",
cuisine:"British",
type:"Fish",
prepTime:5,
cookTime:15,
kidRating:5,
healthyRating:3,
ingredients:[
"Fish Fingers",
"Wraps",
"Lettuce"
]
},

{
name:"Mac and Cheese",
cuisine:"American",
type:"Vegetarian",
prepTime:10,
cookTime:20,
kidRating:5,
healthyRating:2,
ingredients:[
"Pasta",
"Cheese",
"Milk"
]
}

];

const recipeContainer =
document.getElementById("recipeContainer");

function displayRecipes(recipeList = recipes){

recipeContainer.innerHTML = "";

recipeList.forEach(recipe=>{

recipeContainer.innerHTML += `
<div class="recipe-card">

<h3>${recipe.name}</h3>

<p>🍽 ${recipe.cuisine}</p>

<p>🥩 ${recipe.type}</p>

<p>⏱ ${recipe.prepTime} mins</p>

<p>🔥 ${recipe.cookTime} mins</p>

<p>⭐ ${recipe.kidRating}/5</p>

<p>🥦 ${recipe.healthyRating}/5</p>

<button onclick="addToPlanner('${recipe.name}')">
Add To Planner
</button>

</div>
`;

});

}

displayRecipes();

function filterRecipes(){

const cuisine =
document.getElementById("cuisineFilter").value;

const type =
document.getElementById("typeFilter").value;

const filtered = recipes.filter(recipe=>{

const cuisineMatch =
cuisine === "all" ||
recipe.cuisine === cuisine;

const typeMatch =
type === "all" ||
recipe.type === type;

return cuisineMatch && typeMatch;

});

displayRecipes(filtered);

}

function pickDinner(){

const randomRecipe =
recipes[Math.floor(Math.random()*recipes.length)];

document.getEle*entById("result").innerHTML =
`Ton*ght: ${randomRecipe.name}`;

}

co*st days = [
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",
"Sunday"
];

const plann*rGrid =
document.getElementById("p*annerGrid");

days.forEach(day=>{
*plannerGrid.innerHTML += `
<div cl*ss="day-card">
<strong>${day}</str*ng>
<p id="${day}">No Meal Selecte*</p>
</div>
`;

});

let currentDa* = 0;

function addToPlanner(meal)*

document.getElementById(
days[currentDay]
).innerText = meal;

curr*ntDay++;

if(currentDay > 6){
curr*ntDay = 0;
}

}

function generate*hoppingList(){

let ingredients = *];

recipes.forEach(recipe=>{

day*.forEach(day=>{

const meal =
docu*ent.getElementById(day).innerText;*
if(meal === recipe.name){

ingred*ents.push(
...recipe.ingredients
)*

}

});

});

ingredients =
[...new Set(ingredients)];

const list =*document.getElementById("shoppingL*st");

list.innerHTML = "";

ingre*ients.forEach(item=>{

list.innerH*ML +=
`<li>${item}</li>`;

});

}
*function scrollToSection(id){

doc*ment
.getElementById(id)
.scrollIn*oView({
behavior:"smooth"
});

}
