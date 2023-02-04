const selector = document.getElementById("selector");

selector.addEventListener("click", () => {
  const w = 600;
  const h = 400;
  const top = screen.height / 2 - h / 2;
  const left = screen.width / 2 - w / 2;
  window.open(
    "selectoresRGB.html",
    "popup",
    "width=" + w + ", height=" + h + ", top=" + top + ", left=" + left
  );
});
