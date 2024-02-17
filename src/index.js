function showRecipe(response) {
  let fullRecipe = document.querySelector(".recipe");
  fullRecipe.innerHTML = response.data.answer;
}
function ingredientName(response) {
  event.preventDefault();

  let ingName = document.querySelector("#input-text");

  let apiKey = "dfd604f6396ftb7o693bf0062e2334aa";
  let context =
    "Please provide short and easy recipe with maximum 4 ingredients. Make ingredients and separate each line with a </br>. Make 'Ingredients' and 'Instructions' <em>. Sign the poem 'SheCodes AI' inside <strong> ";
  let prompt = `please generate a 4 ingredient recipe for ${ingName.value} Salad`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let fullRecipe = document.querySelector(".recipe");
  fullRecipe.classList.remove("hidden");
  fullRecipe.innerHTML = `<div class=loading> ⌛ Generating a ${ingName.value} Recipe for you...</div>`;
  axios.get(apiUrl).then(showRecipe);
}

let recipeGenerator = document.querySelector("#recipe-generator");
recipeGenerator.addEventListener("submit", ingredientName);
