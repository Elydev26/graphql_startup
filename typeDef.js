const { gql } = require ('apollo-server');

module.exports = gql
type Recipe {
    name: String,
    description: String,
    createdAt: String,
    thumbUp: Int,
    tuumbDown: Int

};

input RecipeInput{
    name: String,
    description: String
} 

type query {
    recipe(id: ID!): Recipe!,
    getRecipes(amount: Int): (Recipe)

}

type mutation {
    createRecipe(recipeInput: RecipeInput!): Recipe!
    deleteRecipe(id: ID!): Boolean
    editRecipe(id: ID!, recipeInput: RecipeInput): Boo
}