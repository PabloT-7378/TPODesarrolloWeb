const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
const campos = {
	nombre: false,
	correo: false,
	telefono: false
}
const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}
const validarCampo = (expresion, input, campo) => {
	if (input.value.trim() === "") { // Verifica si el valor del campo está en blanco
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	} else if (expresion.test(input.value)) {
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
	const mensajeError = document.getElementById('formulario__mensaje-error');
    const terminos = document.getElementById('terminos');
    const camposValidos = Object.values(campos).every(campo => campo === true);

    if (camposValidos && terminos.checked) {
        mensajeError.classList.remove('formulario__mensaje-error-activo');
    }
}



inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const terminos = document.getElementById('terminos');
    const mensajeError = document.getElementById('formulario__mensaje-error');

	if (!campos.nombre || !campos.correo || !campos.telefono || !terminos.checked) {
		mensajeError.textContent = "Por favor, complete todos los campos.";
		mensajeError.classList.add('formulario__mensaje-error-activo');
		setTimeout(() => {
            mensajeError.classList.remove('formulario__mensaje-error-activo');
        }, 2000);
		return;
	}

	mensajeError.textContent = "";
	
	const formData = new FormData(formulario);
	fetch('https://formspree.io/f/xoqzzwyp', {
		method: 'POST',
		body: formData,
		headers: {
			'Accept': 'application/json'
		}
	})
	.then(response => {
		if (response.ok) {
			formulario.reset();
			mensajeError.classList.remove('formulario__mensaje-error-activo');
			document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
			setTimeout(() => {
				document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
			}, 5000);
			document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
				icono.classList.remove('formulario__grupo-correcto');
			});
		}
	})

});