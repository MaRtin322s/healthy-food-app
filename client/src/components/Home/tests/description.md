# Home Component Functionality Tests

This documentation outlines the functionality tests for the `Home` component of a React application. These tests ensure that the Home component behaves as expected, rendering various elements and handling user interactions correctly.

## Technologies Used

- React
- React Testing Library
- Jest
- react-router-dom for routing
- AuthContext for user authentication

## Code Structure

The code for testing the `Home` component is organized as follows:

1. **Import Statements**: Import the necessary libraries and components for testing, including React Testing Library, Jest matchers (`@testing-library/jest-dom`), the `Home` component itself, `AuthContext` for providing authentication context, and `BrowserRouter` for simulating routing.

2. **Render Function**: Define a function `renderHomeComponent` to render the `Home` component within a `BrowserRouter`. It also creates a mock context to simulate fetching recipes and providing them to the component.

3. **Test Suites and Cases**:
   - **Renders the application main title**: This test case checks if the main title "NutriGit" is rendered correctly on the page.
   - **Renders phone number correctly**: This test case verifies the correct rendering of the phone number.
   - **Renders address correctly**: This test case ensures the correct rendering of the address.
   - **Renders the salmon image correctly**: This test case checks if the salmon image is rendered with the correct alt text.
   - **Renders the fruit image correctly**: This test case checks if the background image is rendered with the correct alt text.
   - **Renders the learn more link correctly**: This test case verifies the presence of the "Learn more" link.
   - **Should navigate to diet info page when link is clicked**: This test case simulates clicking the "Learn more" link and checks if it navigates to the expected URL.
   - **Renders the last 3 recipes section**: This test case checks if the "Last 3 recipes created" heading is rendered.
   - **Renders an about section**: This test case verifies the presence of the "Food is An Important Part Of A Balance Diet" heading.
   - **Should navigate to recipes catalog when button is clicked**: This test case simulates clicking the "Recipes Catalog" button and checks if it navigates to the expected URL.

## How to Run the Tests

To run these tests, follow these steps:

1. Make sure you have Node.js and npm installed on your system.

2. Clone the project repository.

3. Navigate to the project directory.

4. Run `npm install` to install the project dependencies.

5. Run `npm test` to execute the tests.

## Conclusion

These tests ensure that the `Home` component functions correctly by rendering the necessary elements and handling user interactions as expected. Running these tests helps identify and address any issues during development, ensuring a seamless user experience when using the Home component.
