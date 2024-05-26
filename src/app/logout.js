// Cerrar sesion desde el frontend - quita todas la sesiones guardadas
import { signOut } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { auth } from './firebase.js';

const logout = document.querySelector('#logout');

logout.addEventListener('click', async () => {
    await signOut(auth);
    console.log('user signed out')
});