import requester from "./requester";

const baseUrl = 'https://api.spoonacular.com/recipes/findByNutrients?minCalories=0&maxCalories=';
const apiKey = '6ef995cbf75c49a8a300f6a9410227dc';

export const getNutritions = (calories) =>
    requester
        .get(
            `${baseUrl}${calories}&random=true&number=5`,
            { 'content-type': 'application/json', 'x-api-key': apiKey }
        );