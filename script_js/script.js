(function(){
  emailjs.init('3s-UuRoTpmNZFFBHa');
})();

//inicio script de ventana flotante//
function openVentana(ventanaId) {
  const ventana = document.getElementById(ventanaId);
  const cerrarBtn = ventana.querySelector(".cerrar");
    // Guardar la posición actual de la ventana
  const posicionActual = window.scrollY;
  
  ventana.style.display = "block";
  cerrarBtn.onclick = function() {
    ventana.style.display = "none";
    
    // Restaurar la posición anterior de la ventana
    window.scrollTo(0, posicionActual);
  }
  window.onclick = function(event) {
    if (event.target == ventana) {
      ventana.style.display = "none";
      
      // Restaurar la posición anterior de la ventana
      window.scrollTo(0, posicionActual);
    }
  }
}

//desplazamiento del boton Escribenos a la seccion Contacto//
const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');

const contacto = document.getElementById('CONTACTO');

boton1.addEventListener('click', () => {
  contacto.scrollIntoView({ behavior: 'smooth' });
});
boton2.addEventListener('click', () => {
  contacto.scrollIntoView({ behavior: 'smooth' });
});


//fin ventana flotante//  

function enviar() {
  // Obtener los valores de los campos del formulario
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;
  const mensaje = document.getElementById("mensaje").value;

  // Configurar los parámetros para la plantilla de correo electrónico
  const parametros = {
    nombre: nombre,
    apellido: apellido,
    email: email,
    telefono: telefono,
    mensaje: mensaje
  };

  // Enviar el correo electrónico a través de EmailJS
  emailjs.send("service_1ix920e", "template_2ajezqw", parametros )
    .then(function(response) {
      alert("El correo electrónico se ha enviado con éxito. Nos contactaremos a la brevedad!");
      // Limpiar los campos del formulario después de enviar el correo electrónico
      document.getElementById("nombre").value = "";
      document.getElementById("apellido").value = "";
      document.getElementById("email").value = "";
      document.getElementById("telefono").value = "";
      document.getElementById("mensaje").value = "";
    }, function(error) {
      alert("Ha ocurrido un error al enviar el correo electrónico. Por favor, inténtalo de nuevo más tarde.");
    });
}





