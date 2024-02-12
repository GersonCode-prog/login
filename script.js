function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificar las credenciales (puedes personalizar esta parte)
    if (username === 'usuario' && password === 'contraseña') {
        alert('¡Inicio de sesión exitoso!');
    } else {
        alert('Usuario o contraseña incorrectos. Inténtalo de nuevo.');
    }
}
// Función para crear un copo de nieve

