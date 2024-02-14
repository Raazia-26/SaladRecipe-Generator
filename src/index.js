function ingredientName(response) {
  event.preventDefault();
  let ingName = document.querySelector("#input-text");

  alert(`Finding recipe including ${ingName.value}...`);
  console.log(ingName.value);

  let fullRecipe = document.querySelector(".recipe");
  let recipeName = document.querySelector(".recipe_name");

  recipeName.innerHTML = `${ingName.value} Salad`;
  fullRecipe.innerHTML = `<p> Beetroot </br> 
  Yogurt</br>
  Salt </br> </p>`;
}

let submitBtn = document.querySelector("#submit_btn");
submitBtn.addEventListener("click", ingredientName);
