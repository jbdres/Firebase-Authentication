// Saber si el usuario esta autenticado o no
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { auth } from './app/firebase.js';
import { loginCheck } from './app/logincheck.js';
import './app/signupForm.js'; // --- el archivo tiene que tener la extencion (.js)
import './app/signinForm.js';
import './app/logout.js';

// Parametros: En donde esta la conexion con la autenticacion? : auth
onAuthStateChanged(auth, async (user) => { // La funcion devuelve la informacion del usuario autenticado
    loginCheck(user);
});