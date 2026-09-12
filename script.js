// Esperamos a que cargue completamente la página
document.addEventListener("DOMContentLoaded", function () {

    // Obtenemos el formulario
    var formulario = document.getElementById("formServicios");

    // Obtenemos el campo de fecha
    var campoFecha = document.getElementById("fecha");

    // Obtenemos la fecha actual
    var hoy = new Date();

    // Convertimos la fecha al formato YYYY-MM-DD
    var año = hoy.getFullYear();
    var mes = String(hoy.getMonth() + 1).padStart(2, "0");
    var dia = String(hoy.getDate()).padStart(2, "0");

    var fechaActual = año + "-" + mes + "-" + dia;

    // No permite seleccionar fechas anteriores a hoy
    campoFecha.min = fechaActual;


    // Cuando el usuario envía el formulario
    formulario.addEventListener("submit", function (evento) {

        // Evita que la página se recargue
        evento.preventDefault();

        enviarWhatsApp();

    });

});


// Función para enviar la solicitud por WhatsApp
function enviarWhatsApp() {

    // Número que recibirá las solicitudes
    var telefonoDestino = "523314413806";


    // Obtener los datos del formulario
    var nombre = document.getElementById("nombre").value.trim();

    var telefono = document.getElementById("telefono").value.trim();

    var direccion = document.getElementById("direccion").value.trim();

    var servicio = document.getElementById("servicio").value;

    var fecha = document.getElementById("fecha").value;

    var descripcion = document.getElementById("descripcion").value.trim();


    // Comprobar que todos los campos estén completos
    if (
        nombre === "" ||
        telefono === "" ||
        direccion === "" ||
        servicio === "" ||
        fecha === "" ||
        descripcion === ""
    ) {

        alert("Por favor, completa todos los campos antes de enviar.");

        return;
    }


    // Comprobar que el teléfono tenga 10 números
    if (!/^\d{10}$/.test(telefono)) {

        alert("El teléfono debe contener exactamente 10 números.");

        return;
    }


    // Crear el mensaje
    var mensaje =
        "Hola! Deseo solicitar un servicio general.%0A%0A" +

        "Cliente: " + encodeURIComponent(nombre) + "%0A" +

        "Telefono: " + encodeURIComponent(telefono) + "%0A" +

        "Direccion: " + encodeURIComponent(direccion) + "%0A" +

        "Servicio: " + encodeURIComponent(servicio) + "%0A" +

        "Fecha preferida: " + encodeURIComponent(fecha) + "%0A" +

        "Descripcion: " + encodeURIComponent(descripcion);


    // Crear la dirección de WhatsApp
    var url =
        "https://wa.me/" +
        telefonoDestino +
        "?text=" +
        mensaje;


    // Abrir WhatsApp en una nueva pestaña
    window.open(url, "_blank");

}