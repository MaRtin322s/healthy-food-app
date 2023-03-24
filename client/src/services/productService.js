const baseUrl = "http://localhost:3030/products";

export const createProduct = (productData, token) => {
    return fetch(`${baseUrl}/create`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(productData)
    })
        .then(res => res.json());
};

export const getAll = () => fetch(`${baseUrl}/all`).then(res => res.json());
export const getOne = (recipeId) => fetch(`${baseUrl}/${recipeId}`).then(res => res.json());
export const getOwned = (userId) => fetch(`${baseUrl}/profile/${userId}`).then(res => res.json());