const Recipe = require ('../model/recipe')

module.exports = {
    Query: {
        async recipe (_, {id}) {
            return await Recipe.findById(id)
        },
        async getRecipes (_, {amount}) {
            return await Recipe.find(amount).sort({ createdAt: -1}).limit(amount)
        }
    },
    Muation: {
        async createRecipe(_, {recipeInput: {name, description}}) {
            const createdRecipe = new Recipe({
                name: name,
                description: description,
                createdAt: new Date().toISOString(),
                thumbsUp: 0,
                thumbsDown: 0
            })
            const result = await createdRecipe.save()

            return {
                id: result.id,
                ...result._id
            }
        },
        async deleteRecipe(_, {id}) {
            const wasDeleted = (await Recipe.deleteOne({_id: id})).deletedCount
            // 1 if something is deleted 0 if nothing is deleted
            return wasDeleted;
        },
        async editedRecipe(_, {id, recipeInput: { name, description}}) {
            const wasEdited = (await Recipe.updateOne({ _id: id}, {name: name, description: description})).modifiedCount
        }
        
    }
}