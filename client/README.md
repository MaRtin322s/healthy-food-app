## Healthy food application - NutriGit

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## UI/UX Components
# Home Page Component
- This component showcases a healthy food app with a tagline and paragraph on its philosophy, a contact section, an informative section on balanced diets with an external resource link and a salmon fish image, and the three latest recipes displayed as RecipeItem components. It uses React hooks and an AuthContext context object to manage state and retrieve recipes from the API. It's an attractive and engaging way to introduce the app and its features to users.

# Register Page Component
- The Register component is a React functional component that renders a form for user registration. It manages state using hooks like useState, useCallback, useReducer, and useContext, and uses a validations object for form field validation. It also uses navigate and userLogin constants for authentication. The form has input fields for personal details like name, email, image URL, and password, and a submit button. The submitHandler function sends a request to the server to register the user and logs them in if successful. The changeHandler function updates the state when a user types in a form field.

# Login/Logout Page Component
-Login Component
- The Login component is a memoized functional component that displays a login form to the user. It uses hooks such as useContext, useNavigate, useReducer, and useState to manage state and handle user actions. It receives the userLogin function from AuthContext and uses navigate to redirect the user upon successful login. The submitHandler function checks for empty fields and authenticates the user using service.loginUser. It displays an error message using the Error component if there's an error.

-Logout component
- This is a React functional component called Logout that logs out the currently authenticated user by making an API call to the backend using the service object provided. It utilizes the useContext hook to access the AuthContext and get the current user and the userLogout function to update the authentication state when the user logs out. The component also uses the useNavigate hook to navigate the user back to the home page after they have logged out. The useEffect hook is used to navigate the user to the home page whenever userLogout changes.

# Catalogs Compoennts Recipes/Products
- Recipes Catalog
- The RecipesCatalog component is a functional component that displays a catalog of recipes. It uses the useContext hook to retrieve the getAllRecipes function from the AuthContext. The component manages state using the useState hook and sets a loading state to display a spinner while the recipes are being fetched.
The useEffect hook is used to fetch recipes from the API by calling getAllRecipes and setting the recipes state when the data is returned. If there are no recipes available, a message is displayed indicating this.
The component renders two links to other pages, a section to display the recipes, and either a spinner or a list of RecipeCatalogItem components based on the loading state. The RecipeCatalogItem component is used to display information about individual recipes.

- Catalog Products
- The ProductsCatalog component is a functional component that displays a catalog of products. It uses the useState, useContext, and useEffect hooks to manage state and fetch data. It also uses the PublicContext to access the getAllProducts function. The component displays a spinner while fetching data and renders a list of product items once the data is received. If there are no products, it displays a message. The component also includes links to switch between the products and recipes catalogs.