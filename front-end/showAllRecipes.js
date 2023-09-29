async function getAllRecipes() {
  const data = await sendFetchRequest("GET", "http://localhost:4002/recipes");
  const container = document.querySelector('#recipesHolder');
  data.forEach((recipe) => {
    const newDiv = document.createElement("div");
    const newP = document.createElement('p');
    newP.classList.add('recipe');
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
  })
}


getAllRecipes();

