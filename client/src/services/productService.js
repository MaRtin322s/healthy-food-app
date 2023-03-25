const baseUrl = "http://localhost:3030/products";

export const createProduct = (productData, token, userId) => {
    return fetch(`${baseUrl}/create`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({...productData, _ownerId: userId })
    })
        .then(res => res.json());
};

export const getAll = () => fetch(`${baseUrl}/all`).then(res => res.json());
export const getOne = (id) => fetch(`${baseUrl}/${id}`).then(res => res.json());
export const getOwned = (userId) => fetch(`${baseUrl}/profile/${userId}`).then(res => res.json());

export const deleteProduct = (id, token) => {
    return fetch(`${baseUrl}/delete/${id}`, {
        method: "DELETE",
        headers: {
            'X-Authorization': token
        }
    })
        .then(res => res.json());
};

export const editProduct = (productData, token, id) => {
    return fetch(`${baseUrl}/edit/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(productData)
    })
        .then(res => res.json());
};