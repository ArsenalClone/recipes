const recipeContainer = document.querySelector('.recipe-container');

const recipes = [ // Replace with your actual recipe data (e.g., from an API or JSON file)
  { image: 'recipe1.jpg', title: 'Recipe Title 1', description: 'Short description 1' },
  { image: 'recipe2.jpg', title: 'Recipe Title 2', description: 'Short description 2' },
  // ... more recipes
];

recipes.forEach(recipe => {
  const card = document.createElement('div');
  card.classList.add('recipe-card');
  card.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.title}">
    <h3>${recipe.title}</h3>
    <p>${recipe.description}</p>
  `;
  recipeContainer.appendChild(card);
});