const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

function aplicarTema(tema) {
  if (tema === "light") {
    body.classList.add("light-mode");
    themeToggle.textContent = "☀️";
  } else {
    body.classList.remove("light-mode");
    themeToggle.textContent = "🌙";
  }
}

const temaGuardado = localStorage.getItem("tema") || "dark";
aplicarTema(temaGuardado);

themeToggle.addEventListener("click", () => {
  const nuevoTema = body.classList.contains("light-mode") ? "dark" : "light";
  localStorage.setItem("tema", nuevoTema);
  aplicarTema(nuevoTema);
});
