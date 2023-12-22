// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyCRlf0PMjvU2lRtMzdfZuS14KVWvT2fx4Q",
    // authDomain: "devtown-task.firebaseapp.com",
    // projectId: "devtown-task",
    // storageBucket: "devtown-task.appspot.com",
    // messagingSenderId: "329992912650",
    // appId: "1:329992912650:web:d1ab876f946037b85584f3"
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;