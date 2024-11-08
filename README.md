# ChatApp

ChatApp is a simple, text-based chat application built using **React Native** and **Firebase**. This app allows users to sign up, log in, and engage in real-time conversations. It’s designed for efficient, streamlined messaging without multimedia sharing.

## Features

- **User Authentication**: Sign up and log in using Firebase Authentication.
- **Real-Time Chat**: Send and receive messages in real-time using Firebase Firestore.
- **Simple UI**: Clean and user-friendly interface.
- **Secure Storage**: User data is securely stored and managed via Firebase.

## Tech Stack

- **Frontend**: React Native
- **Backend**: Firebase (Authentication and Firestore)

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/ChatApp.git
   cd ChatApp
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Firebase Configuration**:
   - Create a Firebase project on [Firebase Console](https://firebase.google.com/).
   - Enable **Authentication** (using Email/Password).
   - Set up **Firestore** for real-time data storage.
   - Copy your Firebase configuration and paste it into `config/firebase.js`:
     ```javascript
     // config/firebase.js
     export const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID"
     };
     ```

4. **Run the App**:
   ```bash
   npm start
   ```

## Folder Structure

- **/assets** - Contains app images and icons.
- **/config** - Firebase configuration.
- **/screens** - Different screens like Chat, Home, Login, and Signup.
- **App.js** - Root component that initializes the app.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements.

## License

This project is licensed under the MIT License.

---
