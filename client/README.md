# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# UI/UX Components
- Home Page Component
The component contains several sections with information about the app and its features. The first section is a heading with a tagline for the app, followed by a paragraph describing the philosophy behind the app's recipes. This section also includes a link to the app's recipe catalog.

The second section displays contact information for the app, including an address and phone number.

The third section provides more information about the importance of a balanced diet, with a paragraph of text and a link to an external resource for further reading. This section also includes an image of a salmon fish.

Finally, the component displays the three most recent recipes added to the app, in the form of a list of RecipeItem components. If there are no recipes available, the component will display a message indicating this.

The component uses React hooks, including useState and useEffect, to manage its state and lifecycle methods. It also relies on a context object called "AuthContext" to retrieve the list of recipes from the app's API.

Overall, this component provides a clear and visually appealing introduction to the healthy food app, highlighting its key features and encouraging users to explore its recipe catalog.