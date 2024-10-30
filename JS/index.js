console.log ('Hello')

const recipes = {
    sweet: [
        "Pie",
        "Cookies",
        "Cake",
        "Pudding"
    ],
    savory: [
        "Soup",
        "Burger",
        "Pizza",
        "Garfield Lasagna made out of garfield for halloween"
    ]
};

function showRecipes() {
    const recipeList = document.getElementById("recipeList");
    recipeList.innerHTML = "";

    const isSweet = document.getElementById("sweet").checked;
    const isSavory = document.getElementById("savory").checked;

    if (!isSweet && !isSavory) {
        alert("Please select a recipe type.");
        return;
    }
    const selectedRecipes = isSweet ? recipes.sweet : recipes.savory;

    selectedRecipes.forEach(recipe => {
        const listItem = document.createElement("li");
        listItem.textContent = recipe;
        recipeList.appendChild(listItem);
    });
}