## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## UI/UX Components
# Home Page Component
- The component contains several sections with information about the app and its features. The first section is a heading with a tagline for the app, followed by a paragraph describing the philosophy behind the app's recipes. This section also includes a link to the app's recipe catalog.

- The second section displays contact information for the app, including an address and phone number.

- The third section provides more information about the importance of a balanced diet, with a paragraph of text and a link to an external resource for further reading. This section also includes an image of a salmon fish.

-  Finally, the component displays the three most recent recipes added to the app, in the form of a list 
of RecipeItem components. If there are no recipes available, the component will display a message indicating this.

- The component uses React hooks, including useState and useEffect, to manage its state and lifecycle methods. It also relies on a context object called "AuthContext" to retrieve the list of recipes from the app's API.

- Overall, this component provides a clear and visually appealing introduction to the healthy food app, highlighting its key features and encouraging users to explore its recipe catalog.

# Register Page Component
- This is a React functional component that renders a registration form for users. It uses hooks like useState, useCallback, useReducer and useContext to manage its state and dispatch actions. It also imports and calls a validations object that contains validation functions for different form fields.

- The Register component uses a navigate constant from the useNavigate hook and a userLogin function from the AuthContext to handle user authentication.

- The state constant is an object that holds the user's input values, and it is updated through the dispatch function by using the reducer function. error is another constant that holds the state of errors that can occur during user input.

- The submitHandler function is called when the user submits the form. It checks if the user's input values are valid and uses a service object to send a request to a server and register the user. If the registration is successful, it logs the user in, and navigates to the home page. If not, it throws an error message.

- The changeHandler function is called whenever a user types in a form field. It updates the state by calling the dispatch function.

- The component returns a form element that has input fields for the user to fill in their personal details, such as their first name, last name, email, image URL, and password. The form also has a submit button.





