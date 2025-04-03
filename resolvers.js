const { v4: uuidv4 } = require('uuid');
const { recipes, categories } = require('./tables');

const resolvers = {
  Query: {    
    recipes: (parent, args) => {
      if (args.category) {
        return recipes.filter(recipe => recipe.category === args.category);
      }
      return recipes;
    },
    categories: () => categories,
    recipe: (parent, { id }) => recipes.find(recipe => recipe.id === id),
  },

  Mutation: {
    addRecipe: (_, { title, ingredients, instructions, category, image_url }) => {
        console.log("Adcionando");
      const newRecipe = {
        id: uuidv4(),
        title,
        ingredients,
        instructions,
        category,
        rating: 0,
        image_url,  
      };
      recipes.push(newRecipe);
      return newRecipe;
    },

    removeRecipe: (parent, { id }) => {
      console.log("Tentando deletar receita com ID:", id);
      const recipeIndex = recipes.findIndex(recipe => recipe.id === id);
      if (recipeIndex === -1) return null; // Retorna null se não encontrou a receita
      return recipes.splice(recipeIndex, 1)[0]; // Remove e retorna a receita deletada
    },

    addCategory: (parent, { name }) => {
      const newCategory = {
        id: uuidv4(),
        name,
      };
      categories.push(newCategory);
      return newCategory;
    },

    removeCategory: (parent, { id }) => {
      console.log("Tentando deletar categoria com ID:", id);
      const categoryIndex = categories.findIndex(category => category.id === id);
      if (categoryIndex === -1) return null; // Retorna null se não encontrou a categoria
      return categories.splice(categoryIndex, 1)[0]; // Remove e retorna a categoria deletada
    },
  },
};

module.exports = { resolvers };
