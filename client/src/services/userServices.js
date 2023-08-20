import requester from "./requester";

const baseUrl = "https://healthy-food-api.onrender.com/users";
// const baseUrl = "http://localhost:3030/users";

export const logoutUser = (token) => requester.get(`${baseUrl}/logout`, { "X-Authorization": token });
export const getUser = (userId) => requester.get(`${baseUrl}/${userId}`);

export const registerUser = (userData) => requester.post(
    `${baseUrl}/register`,
    userData
);

export const loginUser = (userData) => requester.post(
    `${baseUrl}/login`,
    userData
);

export const resetPassword = (passwordData) => requester.post(
    `${baseUrl}/reset`,
    passwordData
);

export const testForEmail = (email, secretWord) => requester.post(
    `${baseUrl}/email-test`,
    { email, secretWord }
);

export const unsaveRecipe = (recipeData, userId, token) => requester.post(
    `${baseUrl}/unsave/${userId}`,
    recipeData,
    { 'X-Authorization': token }
);

export const deleteAccount = (userId, token) => requester.delete(
    `${baseUrl}/delete/${userId}`,
    { 'X-Authorization': token }
);

export const updateUser = async (userId, userData, token) => {
    const res = await fetch(`${baseUrl}/update/${userId}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(userData)
    })
    return await res.json();
};