// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Autenticacion
import { getAuth } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcud1u3N6PQYyGzxJIqYUuevb4T1udmt0",
    authDomain: "autentication-firebase-a7734.firebaseapp.com",
    projectId: "autentication-firebase-a7734",
    storageBucket: "autentication-firebase-a7734.appspot.com",
    messagingSenderId: "165626012121",
    appId: "1:165626012121:web:50d5bcf8e816784e9a39c8"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig); // Nota: 'app' se tiene que exportar para que la podamos importar en otros archivos
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);