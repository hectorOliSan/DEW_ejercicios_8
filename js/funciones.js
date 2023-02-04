// Index
function actividad() {
  let ejer = document.getElementById("actividad").value;
  window.location.href = "./actividades/" + ejer + ".html";
}

// General
function descripcion() {
  if (!modal.open) window.modal.showModal();
}

function cerrar() {
  window.modal.close();
}
