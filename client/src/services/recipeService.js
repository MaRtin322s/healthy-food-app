const baseUrl = "http://localhost:3030/recipes";

export const createRecipe = (token, data) => {
    return fetch(`${baseUrl}/create`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json());
};

export const getAll = () => fetch(`${baseUrl}/all`).then(res => res.json());
export const getOne = (recipeId) => fetch(`${baseUrl}/${recipeId}`).then(res => res.json());
export const getOwned = (userId) => fetch(`${baseUrl}/profile/${userId}`).then(res => res.json());

export const deleteRecipe = (id, token) => {
    return fetch(`${baseUrl}/delete/${id}`, {
        method: "DELETE",
        headers: {
            'X-Authorization': token
        }
    })
        .then(res => res.json());
};

export const editRecipe = (recipeData, token, id) => {
    return fetch(`${baseUrl}/edit/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(recipeData)
    })
        .then(res => res.json());
};

export const saveRecipe = (recipeId, userId, token) => {
    return fetch(`${baseUrl}/save/${recipeId}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ userId })
    })
        .then(res => res.json());
};

export const getSavedRecipes = (userId) => fetch(`${baseUrl}/save/${userId}`).then(res => res.json());