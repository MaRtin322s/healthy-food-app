const baseUrl = "http://localhost:3030/users";

export const registerUser = (userData) => {
    return fetch(`${baseUrl}/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json());
};

export const loginUser = (userData) => {
    return fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json());
};

export const logoutUser = (token) => {
    return fetch(`${baseUrl}/logout`, {
        method: "GET",
        headers: {
            "X-Authorization": token
        }
    });
};

export const resetPassword = (passwordData) => {
    return fetch(`${baseUrl}/reset`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(passwordData)
    })
        .then(res => res.json());
};

export const testForEmail = (email, secretWord) => {
    return fetch(`${baseUrl}/email-test`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, secretWord })
    })
        .then(res => res.json());
};

export const getUser = (userId) => 
    fetch(`${baseUrl}/${userId}`).then(res => res.json());

export const unsaveRecipe = (recipeData, userId, token) => {
        return fetch(`${baseUrl}/unsave/${userId}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify(recipeData)
        })
            .then(res => res.json())
    };

export const deleteAccount = (userId, token) => {
    return fetch(`${baseUrl}/delete/${userId}`, {
        method: "DELETE",
        headers: {
            'X-Authorization': token
        }
    })
        .then(res => res.json());
};