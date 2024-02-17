function showRecipe(response) {
  let fullRecipe = document.querySelector(".recipe");
  console.log(response.data.answer);
  fullRecipe.innerHTML = response.data.answer;
}

function ingredientName(response) {
  event.preventDefault();

  let ingName = document.querySelector("#input-text");
  console.log(ingName.value);
  let apiKey = "dfd604f6396ftb7o693bf0062e2334aa";
  let context =
    "Please provide short and easy recipe with maximum 4 ingredients. Make ingredients and instructions display in <p>. Make ingredients and instructions bold. Please display recipe name in bigger font size ";
  let prompt = `please generate a 4 ingredient recipe for ${ingName.value} Salad`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let loading = document.querySelector("#load");
  loading.innerHTML = "Generating Recipe ... ";

  new Typewriter("#load", {
    strings: ["Generating Recipe ... "],
    autoStart: true,
    delay: 75,
  });

  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(showRecipe);
}

/*https://api.shecodes.io/ai/v1/generate?prompt=please generate a 4 ingredient recipe for chicken Salad&&key=dfd604f6396ftb7o693bf0062e2334aa */
let recipeGenerator = document.querySelector("#recipe-generator");
recipeGenerator.addEventListener("submit", ingredientName);
