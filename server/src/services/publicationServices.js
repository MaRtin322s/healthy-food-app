const Recipe = require('../models/Recipe');

exports.createPublication = async (data) => {
    const recipe = await Recipe.create(data);
    return recipe;
};

exports.getAll = async () => await Recipe.find();
exports.getOne = async (recipeId) => await Recipe.findById({ _id: recipeId });
exports.getMyPublications = async (ownerId) => await Recipe.find().where({ _ownerId: ownerId });

exports.donate = async (publicId, data) => 
    await Recipe.findByIdAndUpdate({ _id: publicId },  data);

exports.editPublication = async (publicId, data) => await Recipe.findByIdAndUpdate({ _id: publicId}, data);
exports.deletePublication = async (publicId) => await Recipe.findByIdAndDelete({ _id: publicId });
