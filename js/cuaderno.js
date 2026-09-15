const semanas = [
  {
    id: 1,
    titulo: "Semana 1",
    fecha: "----",
    resumen: "---",
    contenido: `<p>-----</p>`,
    imagenes: [],
  },
  {
    id: 2,
    titulo: "Semana 2",
    fecha: "----",
    resumen: "---",
    contenido: `<p>-----</p>`,
    imagenes: [],
  },
  {
    id: 3,
    titulo: "Semana 3",
    fecha: "----",
    resumen: "---",
    contenido: `<p>-----</p>`,
    imagenes: [],
  },
];

const grid = document.getElementById("lista-semanas");
const detalle = document.getElementById("detalle-semana");

semanas.forEach((s) => {
  const card = document.createElement("div");
  card.className = "semana-card";
  card.innerHTML = `<h3>${s.titulo}</h3><p class="fecha">${s.fecha}</p><p>${s.resumen}</p>`;
  card.addEventListener("click", () => mostrarSemana(s.id));
  grid.appendChild(card);
});

function mostrarSemana(id) {
  const s = semanas.find((x) => x.id === id);
  document.getElementById("detalle-titulo").textContent = s.titulo;
  document.getElementById("detalle-fecha").textContent = s.fecha;
  document.getElementById("detalle-contenido").innerHTML = s.contenido;
  document.getElementById("detalle-imagenes").innerHTML = s.imagenes
    .map((src) => `<img src="${src}" alt="${s.titulo}">`)
    .join("");
  grid.classList.add("oculto");
  detalle.classList.remove("oculto");
}

document.getElementById("volver").addEventListener("click", () => {
  detalle.classList.add("oculto");
  grid.classList.remove("oculto");
});
