window.addEventListener('DOMContentLoaded', function() {
    const EMAIL = document.getElementById('loginEmail');
    const PASSWORD = document.getElementById('loginPassword');

    EMAIL.addEventListener('input', validationEmail);
    PASSWORD.addEventListener('input', validationPassword);

    function validationEmail(event) {
        const USER_KEYBOARD_ACTION_ON_INPUT_EMAIL = event.target.value;  // Obtener el valor completo del input
        const REGEX_EMAIL = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° 0-9@.]+$/;

        if (!REGEX_EMAIL.test(USER_KEYBOARD_ACTION_ON_INPUT_EMAIL)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "¡Ingrese un correo electrónico válido!",
                footer: '<a href="#">¿Por qué sucede esto?</a>'
            });
        }
    }

    function validationPassword(event) {
        const USER_KEYBOARD_ACTION_ON_INPUT_PASSWORD = event.data;
        const REGEX_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;

        if (!REGEX_PASSWORD.test(USER_KEYBOARD_ACTION_ON_INPUT_PASSWORD)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "¡La contraseña debe ser mayor a 8 y menor a 15 dígitos!",
                footer: '<a href="#">¿Por qué sucede esto?</a>'
            });
        }
    }
});
