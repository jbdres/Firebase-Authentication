import { auth } from './firebase.js'; // Importando la variable de autenticacion --- el archivo tiene que tener la extencion (.js)
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
// createUserWithEmailAndPassword es una funcion que espera 3 parametros: auth, email, password
import { showMessage } from './showMessage.js';

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // Crear el usuario
    /**
     * * - Cuando se crea el usuario, la funcion devuelve los datos de registro de dicho usuario.
     * * - Firebase tambien hace una validacion de los datos que enviamos, ej. el password tiene que tener minimo 6 caracteres; si esto no cumple, genera error, por eso se pone en un trycatch.
     */

    try {

        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);  // Cuando se crea el usuario, la funcion devuelve los datos de dicho usuario
        // console.log(userCredentials);

        // Cerrar el signup modal
        const signupModal = document.querySelector('#signupModal');
        const modal = bootstrap.Modal.getInstance(signupModal);
        modal.hide();

        showMessage(`Welcome ${userCredentials.user.email}`);

    } catch (error) {
        // console.log(error); // Error completo
        // console.log(error.message); // Nombre del error con descripcion
        // console.log(error.code); // Solo el nombre el error
        
        if (error.code === 'auth/email-already-in-use') { // El correo ya esta en uso
            showMessage('Email already in use', 'error');
        } else if (error.code === 'auth/invalid-email') { // Email invalido
            showMessage('Invalid email', 'error');
        } else if (error.code === 'auth/weak-password') { // Password debil
            showMessage('Weak password', 'error');
        } else if (error.code) { // Cualquier otro error
            console.log('Something went wrong');
        }
    }

})