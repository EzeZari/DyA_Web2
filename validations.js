// Obtenemos los elementos.
var inputNombre = document.getElementById('nombre');
var inputEmail = document.getElementById('email');
var inputContrasena = document.getElementById('contrasena');
var inputRepetirContrasena = document.getElementById('repetirContrasena');
var inputEdad = document.getElementById('edad');
var inputTelefono = document.getElementById('telefono');
var inputDireccion = document.getElementById('direccion');
var inputCiudad = document.getElementById('ciudad');
var inputCodigoPostal = document.getElementById('codigoPostal');
var inputDNI = document.getElementById('dni');
var button = document.getElementById('button');

// Obtenemos los mensajes de error
var nombreError = document.getElementById('nombreError');
var emailError = document.getElementById('emailError');
var contrasenaError = document.getElementById('contrasenaError');
var repetirContrasenaError = document.getElementById('repetirContrasenaError');
var edadError = document.getElementById('edadError');
var telefonoError = document.getElementById('telefonoError');
var direccionError = document.getElementById('direccionError');
var ciudadError = document.getElementById('ciudadError');
var codigoError = document.getElementById('codigoError');
var dniError = document.getElementById('dniError');

// Agregar eventos de "focus" para limpiar los mensajes de error
var inputs = [inputNombre, inputEmail, inputContrasena, inputRepetirContrasena, inputEdad, inputTelefono, inputDireccion, inputCiudad, inputCodigoPostal, inputDNI];
var errors = [nombreError, emailError, contrasenaError, repetirContrasenaError, edadError, telefonoError, direccionError, ciudadError, codigoError, dniError];

inputs.forEach((input, index) => {
    input.addEventListener('focus', function () {
        errors[index].textContent = '';
    });
});

// Validación al perder el foco (evento blur)
inputNombre.addEventListener('blur', function (event) {
    validarNombre(inputNombre.value, event);
});

inputEmail.addEventListener('blur', function (event) {
    validarEmail(inputEmail.value, event);
});

inputContrasena.addEventListener('blur', function (event) {
    validarContraseña(inputContrasena.value, event);
});

inputRepetirContrasena.addEventListener('blur', function (event) {
    validarRepetirContraseña(inputContrasena.value, inputRepetirContrasena.value, event);
});

inputEdad.addEventListener('blur', function (event) {
    validarEdad(inputEdad.value, event);
});

document.addEventListener('DOMContentLoaded', function () {
    var telefonoInput = document.getElementById('telefono');
    telefonoInput.addEventListener('input', validarTelefono);
});

inputDireccion.addEventListener('blur', function (event) {
    validarDireccion(inputDireccion.value, event);
});

inputCiudad.addEventListener('blur', function (event) {
    validarCiudad(inputCiudad.value, event);
});

inputCodigoPostal.addEventListener('blur', function (event) {
    validarCodigoPostal(inputCodigoPostal.value, event);
});

inputDNI.addEventListener('blur', function (event) {
    validarDNI(inputDNI.value, event);
});


// Funciones de validación
function validarNombre(nombre, event) {
    if (nombre.length <= 6 || !nombre.includes(' ')) {
        nombreError.textContent = 'El nombre debe tener al menos 6 letras y un espacio en el medio';
        event.preventDefault(); // Detener el envío del formulario si la validación falla
    } else {
        nombreError.textContent = '';
    }
}

function validarEmail(email, event) {
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!expr.test(email)) {
        emailError.textContent = 'El email tiene formato incorrecto';
        event.preventDefault(); 
    } else {
        emailError.textContent = '';
    }
}

function validarContraseña(contrasena, event) {
    var haveNumbers = /[0-9]/.test(contrasena); // Verifica si la contraseña contiene números
    var haveLowercase = /[a-záéíóú]/.test(contrasena); // Verifica si la contraseña contiene letras minúsculas
    var haveUppercase = /[A-ZÁÉÍÓÚ]/.test(contrasena); // Verifica si la contraseña contiene letras mayúsculas

    if (!haveNumbers || !haveLowercase || !haveUppercase || contrasena.length < 6) {
        contrasenaError.innerHTML = 'La contraseña debe contener al menos 6 caracteres, incluyendo números, letras mayúsculas y minúsculas.';
        event.preventDefault();
    } else {
        contrasenaError.textContent = '';
    }
}

function validarRepetirContraseña(contrasena, repetirContrasena, event) {
    if (contrasena !== repetirContrasena) {
        repetirContrasenaError.textContent = 'Las contraseñas no coinciden';
        event.preventDefault();
    } else {
        repetirContrasenaError.textContent = '';
    }
}

function validarEdad(edad, event) {
    if (edad < 18) {
        edadError.innerHTML = 'La edad es menor a lo permitido';
        event.preventDefault();
    } else {
        edadError.innerHTML = '';
    }
}

function validarTelefono(event) {
    var telefono = event.target.value;
    var telefonoNumerico = telefono.replace(/\D/g, ''); // Eliminar todo lo que no sea un número
    event.target.value = telefonoNumerico;

    if (telefonoNumerico.length < 7) {
        telefonoError.textContent = 'El número de teléfono debe tener al menos 7 dígitos.';
    } else {
        telefonoError.textContent = '';
    }
}

function validarDireccion(direccion, event) {
    // Verificar si la dirección tiene al menos 5 caracteres
    if (direccion.length < 5) {
        direccionError.textContent = 'La dirección debe tener al menos 5 caracteres.';
        event.preventDefault();
        return; // Salir de la función porque la dirección es inválida
    }

    // Verificar si la dirección contiene letras, números y un espacio en el medio
    var direccionValida = /^[a-zA-Z0-9]+(\s[a-zA-Z0-9]+)+$/.test(direccion);
    if (!direccionValida) {
        direccionError.textContent = 'La dirección debe contener letras, números y un espacio en el medio.';
        event.preventDefault(); 
    } else {
        direccionError.textContent = '';
    }
}

function validarCiudad(ciudad, event) {
    // Verificar si la ciudad tiene al menos 3 caracteres
    if (ciudad.length < 3) {
        ciudadError.textContent = 'La ciudad debe tener al menos 3 caracteres.';
        event.preventDefault(); 
    } else {
        ciudadError.textContent = '';
    }
}

function validarCodigoPostal(codigoPostal, event) {
    // Verificar si el código postal tiene al menos 3 caracteres
    if (codigoPostal.length < 3) {
        codigoError.textContent = 'El código postal debe tener al menos 3 caracteres.';
        event.preventDefault(); 
    } else {
        codigoError.textContent = '';
    }
}

function validarDNI(dni, event) {
    var dniValido = /^\d{7,8}$/.test(dni);
    if (!dniValido) {
        dniError.textContent = 'El DNI debe ser un número de 7 u 8 dígitos.';
        event.preventDefault();
    } else {
        dniError.textContent = '';
    }
}

function mostrarMensajeEmergente(mensaje) {
    alert(mensaje);
}

button.addEventListener('click', function (event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    var nombre = inputNombre.value;
    var email = inputEmail.value;
    var contrasena = inputContrasena.value;
    var repetirContrasena = inputRepetirContrasena.value;
    var edad = inputEdad.value;
    var telefono = inputTelefono.value;
    var direccion = inputDireccion.value;
    var ciudad = inputCiudad.value;
    var codigoPostal = inputCodigoPostal.value;
    var dni = inputDNI.value;

    var errores = [];
    var mensaje = '';

    validarNombre(nombre, event);
    validarEmail(email, event);
    validarContraseña(contrasena, event);
    validarRepetirContraseña(contrasena, repetirContrasena, event);
    validarEdad(edad, event);
    validarTelefono({ target: inputTelefono });
    validarDireccion(direccion, event);
    validarCiudad(ciudad, event);
    validarCodigoPostal(codigoPostal, event);
    validarDNI(dni, event);

    errors.forEach((error, index) => {
        if (error.textContent) {
            errores.push(error.textContent);
        }
    });

    if (errores.length > 0) {
        mensaje = 'Errores en el formulario:\n' + errores.join('\n');
        mostrarMensajeEmergente(mensaje);
    } else {
        var formData = {
            nombre: nombre,
            email: email,
            contraseña: contrasena,
            edad: edad,
            telefono: telefono,
            direccion: direccion,
            ciudad: ciudad,
            codigoPostal: codigoPostal,
            dni: dni
        };

        // Realizar la solicitud POST al servidor
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud.');
                }
                return response.json();
            })
            .then(data => {
                // Mostrar modal con mensaje de éxito y datos recibidos
                mostrarModal('Suscripción exitosa', data);
                // Guardar los datos recibidos en LocalStorage
                localStorage.setItem('userData', JSON.stringify(data));
            })
            .catch(error => {
                mostrarModal('Error', error.message);
            });
    }
    limpiarCampos()
});


function mostrarModal(titulo, mensaje) {
    var modal = document.getElementById('modal');
    var modalTitle = document.getElementById('modal-title');
    var modalMessage = document.getElementById('modal-message');

    // Mostrar el modal
    modal.style.display = 'block';
    modalTitle.textContent = titulo;

    if (typeof mensaje === 'object') {
        modalMessage.textContent = JSON.stringify(mensaje, null, 2);
    } else {
        modalMessage.textContent = mensaje;
    }

    var closeModal = document.getElementsByClassName('close-modal')[0];
    closeModal.onclick = function () {
        modal.style.display = 'none';
    }
}

function limpiarCampos() {
    inputs.forEach(input => {
        input.value = '';
    });
}

