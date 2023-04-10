//inicio script de ventana flotante//
function openVentana(ventanaId) {
    const ventana = document.getElementById(ventanaId);
    const cerrarBtn = ventana.querySelector(".cerrar");
    ventana.style.display = "block";
    cerrarBtn.onclick = function() {
      ventana.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == ventana) {
        ventana.style.display = "none";
      }
    }
  }
//fin ventana flotante//  

//inicio form Web...//
const nextBtn = document.querySelector("#next-btn");
const backBtn = document.querySelector("#back-btn");
const step1 = document.querySelector("#step-1");
const step2 = document.querySelector("#step-2");
const summary = document.querySelector("#summary");

//agregar evento onclick al botón siguiente
nextBtn.addEventListener("click", function() {
  // recopilar datos del primer paso
  let name = document.querySelector("#name").value;
  let lastname = document.querySelector("#lastname").value;
  let email = document.querySelector("#email").value;
  
  // mostrar resumen en el segundo paso
  summary.innerHTML = `Nombre: ${name}<br> Apellido: ${lastname}<br> Email: ${email}`;
  
  // ocultar el primer paso y mostrar el segundo paso
  step1.style.display = "none";
  step2.style.display = "block";
});