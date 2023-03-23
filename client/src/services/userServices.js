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

export const testForEmail = (email) => {
    return fetch(`${baseUrl}/email-test`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(email)
    })
        .then(res => res.json());
};

export const getUser = (userId) => 
    fetch(`${baseUrl}/${userId}`).then(res => res.json());