import requester from "./requester";

const baseUrl = 'https://api.spoonacular.com/mealplanner/generate?targetCalories=';
const apiKey = '6ef995cbf75c49a8a300f6a9410227dc';

export const getNutritions = (calories) =>
    requester
        .get(
            `${baseUrl}${calories}`,
            { 'content-type': 'application/json', 'x-api-key': apiKey }
        );