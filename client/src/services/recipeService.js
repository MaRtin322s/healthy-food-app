import requester from "./requester";

const baseUrl = "https://healthy-food-api.onrender.com/recipes";
// const baseUrl = 'http://localhost:3030/recipes';

export const getAll = () => requester.get(`${baseUrl}/all`);
export const getOne = (recipeId) => requester.get(`${baseUrl}/${recipeId}`);
export const getOwned = async (userId) => requester.get(`${baseUrl}/profile/${userId}`);

export const createRecipe = (token, data) =>
    requester.post(`${baseUrl}/create`, data, { 'X-Authorization': token });

export const saveRecipe = (recipeId, userId, token) =>
    requester.post(`${baseUrl}/save/${recipeId}`, { userId }, { 'X-Authorization': token });

export const getSavedRecipes = (userId, token) =>
    requester.get(`${baseUrl}/save/${userId}`, { 'X-Authorization': token })

export const download = (recipeData, token) =>
    requester.post(`${baseUrl}/download`, recipeData, { 'X-Authorization': token });

export const deleteRecipe = (id, token) =>
    requester.delete(`${baseUrl}/delete/${id}`, { 'X-Authorization': token });

export const editRecipe = (recipeData, token, id) =>
    requester.put(`${baseUrl}/edit/${id}`, { 'X-Authorization': token }, recipeData);