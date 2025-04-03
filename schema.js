const { gql } = require('apollo-server');

const typeDefs = gql`
  type Recipe {
    id: String!  
    title: String!
    ingredients: String!
    instructions: String!
    category: String!
    rating: Float!
    image_url: String
  }

  type Category {
    id: String!  
    name: String!
  }

  type Query {
    recipes(category: String): [Recipe]
    categories: [Category]
    recipe(id: String!): Recipe   
  }

  type Mutation {
    addRecipe(
      title: String!,
      ingredients: String!,
      instructions: String!,
      category: String!,
      image_url: String!
    ): Recipe
    removeRecipe(id: String!): Recipe  
    addCategory(name: String!): Category
    removeCategory(id: String!): Category  
  }
`;

module.exports = { typeDefs };
