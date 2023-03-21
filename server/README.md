# Healthy-food REST API

## Overview 
REST API Server for healthy-food-app. This application contains endpoints for every user actions. Users may register with user information, email and password, which allows them to create their own recipes and products. Creators can also edit and delete their own sharings at any time.

## Technical Details 
The application uses:
- ExpressJS framework for the server.
- Bcrypt library for the password hashing.
- Cors library for the Cross-Origin Resource Sharing restrictions.
- JsonWebToken library for the user authentication access token.
- Mongoose library for the database communication.

## Application Endpoints
- Base URL: http://localhost:3030/users
# User authentication
- /register - send POST request to the endpoint with required data. All fields must be filled with correct information. The server responds with following data: _id, email, firstName, lastName and accessToken to perform authorized requests.

- /login - send POST request to the endpoint with required data (email and password). Both must be filled with correct information. The server responds with following data: _id, email, firstName, lastName and accessToken to perform authorized requests.

- /logout - send authorized GET request to the endpoint with special header - [X-Authorization] containing the access token of the current user.

# Recipe operations