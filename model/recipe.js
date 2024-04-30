const { model, Schema } = require (
    'mongoose'
    )

    const recipeSchema = new Schema ({
        name: String,
        discription: String,
        createdAt: String,
        updatedAt: String,
        thumbsUp: Number,
        thumbsDown: Number,

    }) 
    module.exports = model('Recipe', recipeSchema)