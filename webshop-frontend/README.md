# Mocha Nooka Frontend

This is the frontend for our website. This is a React-based application that provides a solution to manage a coffee shop. The project uses Material UI v5 for a nice looking and responsive design and Firebase Storage for handling data storage needs. The application supports a variety of features, including dynamic product viewing, shopping cart functionality, order management, user authentication, and more.

## Getting started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Make sure that you have Node.js and npm installed on your machine. If you don't, you can download them [here](https://nodejs.org/).
- You'll need a Firebase project to use for storage. You can create one [here](https://console.firebase.google.com/).


### Running the application

1. First, clone the repository `git clone https://github.com/julianmontague/ntnu-website-project_group01.git`
2. Move to the frontend folder: `cd webshop-frontend`
3. Install the dependencies: `npm install`
4. Create a `.env` file in the root directory of the project, and fill in your Firebase project settings and the backend API URL. Here is an example:
   `
   REACT_APP_API_KEY=<FIREBASE-API-KEY>
   REACT_APP_AUTH_DOMAIN=<FIREBASE-AUTH-DOMAIN>
   REACT_APP_PROJECT_ID=<FIREBASE-PROJECT-ID>
   REACT_APP_STORAGE_BUCKET=<FIREBASE-STORAGE-BUCKET>
   REACT_APP_MESSAGING_SENDER_ID=<FIREBASE-MESSAGING-SENDER-ID>
   REACT_APP_APP_ID=<FIREBASE-APP-ID>

   REACT_APP_BASE_URL=<URL-OF-BACKEND-API>
   `
   
5. Run the project `npm start`

### Usage
Once you've started the application, you can access it by opening your browser and navigating to http://localhost:3000.
