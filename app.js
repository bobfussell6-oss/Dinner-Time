con*t recipes = [
{
name:"Hidden Veg B*lognese",
cuisine:"Italian",
type:*Beef",
prepTime:10,
cookTime:25,
k*dRating:5,
healthyRating:5,
ingred*ents:["Beef Mince","Carrots","Past*"]
},
{
name:"Creamy Chicken Pasta*,
cuisine:"Italian",
type:"Chicken*,
prepTime:10,
cookTime:20,
kidRat*ng:5,
healthyRating:4,
ingredients*["Chicken Breast","Pasta","Cream C*eese"]
},
{
name:"Chicken Fajita R*ce Bowls",
cuisine:"Mexican",
type*"Chicken",
prepTime:15,
cookTime:1*,
kidRating:4,
healthyRating:4,
in*redients:["Chicken","Rice","Pepper*"]
}
];

const recipeContainer =
d*cument.getElementById("recipeConta*ner");

function displayRecipes(re*ipeList = recipes){

recipeContain*r.innerHTML = "";

recipeList.forE*ch(recipe => {

recipeContainer.in*erHTML += `
<div class="recipe-car*">

<h3>${recipe.name}</h3>

<p>🍽*${recipe.cuisine}</p>

<p>🥩 ${rec*pe.type}</p>

<p>⏱ ${recipe.prepTi*e} mins</p>

<p>🔥 ${recipe.cookTi*e} mins</p>

<p>⭐ ${recipe.kidRati*g}/5</p>

<p>🥦 ${recipe.healthyRa*ing}/5</p>

</div>
`;

});

}

dis*layRecipes();

function filterReci*es(){

const cuisine =
document.ge*ElementById("cuisineFilter").value*

const type =
document.getElement*yId("typeFilter").value;

const fi*tered = recipes.filter(recipe => {*
const cuisineMatch =
cuisine === *all" ||
recipe.cuisine === cuisine*

const typeMatch =
type === "all"*||
recipe.type === type;

return c*isineMatch && typeMatch;

});

dis*layRecipes(filtered);

}

function*pickDinner(){

const recipe =
reci*es[Math.floor(Math.random()*recipe*.length)];

document.getElementByI*("result").innerHTML =
`🍽️ Tonigh*: ${recipe.name}`;

}

function sc*ollToSection(id){

document
.getEl*mentById(id)
.scrollIntoView({
beh*vior:"smooth"
});

}
