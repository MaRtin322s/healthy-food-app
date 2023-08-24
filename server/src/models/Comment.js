const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    recipeId: {
        type: mongoose.Types.ObjectId,
        ref: 'Recipe'
    },
    authorId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;