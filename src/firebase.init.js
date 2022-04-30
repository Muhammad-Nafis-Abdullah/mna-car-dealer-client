import { getAuth } from 'firebase/auth';

// paste the config file here from the firebase project in console of firebase
//......

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQeq8PoUZMo8ioWGRJQw41TbkOz7LbbYc",
    authDomain: "mna-car-dealer.firebaseapp.com",
    projectId: "mna-car-dealer",
    storageBucket: "mna-car-dealer.appspot.com",
    messagingSenderId: "359420432354",
    appId: "1:359420432354:web:8670201dc3a4094726f3bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//.....
// eslint-disable-next-line no-undef
const auth = getAuth(app);
export default auth;