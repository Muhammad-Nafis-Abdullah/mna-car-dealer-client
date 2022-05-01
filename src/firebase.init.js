import { getAuth } from 'firebase/auth';

// paste the config file here from the firebase project in console of firebase
//......

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.local.API_KEY,
    authDomain: process.env.local.AUTH_DOMAIN,
    projectId: process.env.local.PROJECT_ID,
    storageBucket: process.env.local.STORAGE_BUCKET,
    messagingSenderId: process.env.local.MESSAGING_SENDER_ID,
    appId: process.env.local.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//.....
// eslint-disable-next-line no-undef
const auth = getAuth(app);
export default auth;