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
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.innerHTML = "❆";
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.animationDuration = Math.random() * 3 + 2 + "s";
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 20 + 10 + "px";
    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Generar copos de nieve
setInterval(createSnowflake, 100);
