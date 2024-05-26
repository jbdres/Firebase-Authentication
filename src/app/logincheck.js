const loggedOutlinks = document.querySelectorAll('.logged-out');
const loggedInlinks  = document.querySelectorAll('.logged-in');


export const loginCheck = user => {
    if (user) { // Si existe un usuario
        loggedOutlinks.forEach(link => link.style.display = 'none');
        loggedInlinks.forEach(link => link.style.display = 'block');
    } else {
        loggedOutlinks.forEach(link => link.style.display = 'block');
        loggedInlinks.forEach(link => link.style.display = 'none');
    }
}