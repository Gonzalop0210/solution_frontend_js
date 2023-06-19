const input_suscribe = document.querySelector('.input_text_form');
const boton_suscribe = document.querySelector('.boton_form');
const no_view = document.querySelector('.no_view');

/* Funcion para verificar si cumple con el formato de correo o no */
function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (pattern.test(email)) {
        return true;
    } else {
        return false;
    }
}

boton_suscribe.addEventListener("click", function (event) {
    var correoIngresado = input_suscribe.value;

    if (validateEmail(correoIngresado)) {
        window.open('confirm.html', '_blanck');
    } else {
        no_view.classList.toggle('no_view');
        input_suscribe.style.outline = '2px solid hsl(4, 100%, 67%)';
        input_suscribe.style.border = '1px solid hsl(4, 100%, 67%)';
        input_suscribe.insertRule("::placeholder { color: hsl(4, 100%, 67%); }", 0);
        event.preventDefault();
    }
});