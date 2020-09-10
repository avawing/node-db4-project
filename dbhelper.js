const db = require('./knex/knexconfig')

/* 
- `getRecipes()`: should return a list of all recipes in the database.
- `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
- `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe

*/

function getRecipes(){
    return db('recipe')
}

function getShoppingList(recipe_id){

}

function getInstructions(recipe_id){

}

module.exports = {getRecipes, getShoppingList, getInstructions}