const atributo = document.getElementById("atributo");

const R = document.getElementById("red");
const G = document.getElementById("green");
const B = document.getElementById("blue");

const color = document.getElementById("color");
color.addEventListener("click", () => cambiarColor());

function cambiarColor() {
  if (!(validarInput(R) && validarInput(G) && validarInput(B))) return;

  const colorHex = "#" + toHEX(R) + toHEX(G) + toHEX(B);
  opener.document[atributo.value] = colorHex;
}

const toHEX = (c) => {
  const hex = c.value.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};

function validarInput(input) {
  const valor = input.value;
  if (valor === "" || valor < 0 || valor > 255) {
    alert("Introduce un valor válido de color " + input.title);
    input.focus();
    return false;
  }
  return true;
}

[R, G, B].forEach((elem) => {
  elem.addEventListener("input", (e) => {
    elem.value = elem.value.replace(/[^0-9]/, "");
    if (elem.value.length > 3) elem.value = elem.value.slice(0, 3);
  });
});

document.getElementById("cerrar").addEventListener("click", () => self.close());
