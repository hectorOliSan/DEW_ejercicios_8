// Función para grabar la cookie
const setCookie = (name, value) => {
  document.cookie = `${name}=${value};path=/`;
};

// Función para leer la cookie
const getCookie = (name) => {
  const cookie = document.cookie
    .split(";")
    .find((cookie) => cookie.startsWith(`${name}=`));
  return cookie ? cookie.split("=")[1] : "";
};

// Función para borrar la cookie
const deleteCookie = (name) => {
  setCookie(name, "", -1);
};

const mensaje = document.getElementById("mensaje");
let contadorVisitas = parseInt(getCookie("contador_Visitas")) || 0;

mensaje.innerText =
  contadorVisitas === 0
    ? "Bienvenido a la página de las cookies"
    : `Esta es su visita nº ${contadorVisitas}`;

contadorVisitas += 1;
setCookie("contador_Visitas", contadorVisitas);

document.getElementById("borrarCookie").addEventListener("click", () => {
  deleteCookie("contador_Visitas");
  location.reload();
});
