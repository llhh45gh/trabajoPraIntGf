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