const primaria = document.getElementById("primaria");
const img1 = document.getElementById("img1");
const secundaria = document.getElementById("secundaria");
const img2 = document.getElementById("img2");

[primaria, secundaria].forEach((elem) => {
  elem.addEventListener("mouseenter", () =>
    cambiarImagen("../img/secun-indir.gif")
  );
  elem.addEventListener("mouseleave", () =>
    cambiarImagen("../img/prim-indir.gif")
  );
});

const cambiarImagen = (src) => {
  img1.src = src;
  img2.src = src;
};

secundaria.addEventListener("click", () => {
  window.close();
});
