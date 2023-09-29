async function getRecipe() {
  console.log("Hello")
  const idElem = document.querySelector("#recipeId");
  const url = `http://localhost:4002/recipes/` + idElem.value;
  const recipe = await sendFetchRequest("GET", url);
  const container = document.querySelector("#recipesHolder");
  console.log(recipe);

  const newDiv = document.createElement("div");
  const newP = document.createElement("p");
  newP.classList.add("recipe");
  newP.textContent = `${recipe.name} - Time to make: ${recipe.timeToMake})`;
  newDiv.appendChild(newP);
  const newPInstructions = document.createElement("p");
  newPInstructions.classList.add("instructions");
  newPInstructions.textContent = `${recipe.instructions})`;
  newDiv.appendChild(newPInstructions);
  const newId = document.createElement("p");
  newId.classList.add("id");
  newId.textContent = `${recipe.id}`;
  newDiv.appendChild(newId);
  container.appendChild(newDiv);
}
