import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { auth } from './firebase.js'

const signinForm = document.querySelector('#login-form');

signinForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const email = signinForm['login-email'].value;
    const password = signinForm['login-password'].value;

    try {
        // Si todo va bien, la funcion devuelve los datos de las credenciales
        const credentials = await signInWithEmailAndPassword(auth, email, password);
        console.log(credentials);
    } catch (error) {
        // Tipos de errores: password incorrecto
        console.log(error);
    }

})
