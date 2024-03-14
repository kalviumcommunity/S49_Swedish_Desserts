
This is a full-stack project built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The project is a dessert review website where users can explore and review various desserts like cakes and cookies.

## Features

- **User Authentication**: Users can sign up, log in, and log out securely.
- **Dashboard**: Registered users have access to a personalized dashboard where they can view and manage their reviews.
- **Browse Desserts**: Users can browse through a collection of desserts, view details, and read reviews submitted by other users.
- **Write Reviews**: Authenticated users can write reviews for any dessert available on the website.
- **Rating System**: Users can rate desserts, and the average rating is displayed alongside each dessert.
- **Interactive Interface**: The website features an intuitive user interface with smooth navigation and interactive elements.

## Technologies Used

- **MongoDB**: Used as the database to store dessert information and user data.
- **Express.js**: Used to handle HTTP requests and routes.
- **React.js**: Used to build the front-end interface of the website.
- **Node.js**: Used as the back-end server environment.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **JWT (JSON Web Tokens)**: Used for user authentication and authorization.
- **React Router**: Used for client-side routing within the React application.
- **Axios**: Used for making HTTP requests from the client-side React application.


# Project Structure

The project follows a structured architecture with separate directories for the client-side and server-side code:

## Client

Contains the React.js front-end application.

- **src**: Source code files for the React components, styles, and assets.
- **public**: Public assets and the HTML template for the React application.

## Server

Contains the Node.js back-end server.

- **routes**: Express.js route handlers for different API endpoints.
- **models**: MongoDB schema definitions using Mongoose.
- **controllers**: Controllers for handling business logic.
- **middleware**: Custom middleware functions for authentication, error handling, etc.
- **config**: Configuration files for setting up MongoDB connection, JWT secret, etc.
- **helpers**: Utility functions used across the server-side codebase.

# Acknowledgments

Special thanks to the following libraries and frameworks used in this project:

- [Create React App](https://create-react-app.dev/)
- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [JWT](https://jwt.io/)

Feel free to customize the sections according to your project's specifics.

