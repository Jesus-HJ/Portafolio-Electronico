const semanas = [
  {
    id: 1,
    titulo: "Semana 1",
    fecha: "Semana 1",
    resumen:
      "Exposición de sílabo, prueba de diagnóstico y fundamentos de tecnologías web.",

    contenido: `
      <div class="semana-contenido">

        <div class="columna-teoria">

          <h3>Teoría</h3>

          <h4>Exposición de sílabo y prueba de diagnóstico</h4>

          <p>
            Durante la primera semana se realizó la exposición del sílabo
            del curso y una prueba de diagnóstico para conocer los
            conocimientos previos relacionados con el desarrollo de
            aplicaciones web.
          </p>

          <h4>Fundamentos de las tecnologías web</h4>

          <p>
            Se estudiaron los fundamentos de las tecnologías web y los
            principales conceptos relacionados con el desarrollo de
            aplicaciones para Internet.
          </p>

          <h4>Soluciones web</h4>

          <p>
            Se revisaron los conceptos de sistema web, aplicación web,
            sitio web y página web, identificando sus características
            y diferencias.
          </p>

          <h4>Tecnologías web</h4>

          <p>
            Se estudiaron las tecnologías web básicas, los lenguajes
            utilizados para el desarrollo web y las tecnologías
            relacionadas con gráficos.
          </p>

          <h4>Funcionamiento de la Web</h4>

          <p>
            Se revisó cómo funciona la Web mediante conceptos como
            DNS, el protocolo TCP/IP y el protocolo HTTP.
          </p>

          <h4>Roles en el desarrollo de aplicaciones para Internet</h4>

          <p>
            Se estudiaron los principales roles involucrados en el
            desarrollo de aplicaciones web.
          </p>

          <ul>
            <li>
              <strong>Desarrollador Frontend:</strong>
              trabaja con la interfaz y la experiencia del usuario,
              ejecutándose principalmente en el navegador.
            </li>

            <li>
              <strong>Desarrollador Backend:</strong>
              desarrolla la lógica, las bases de datos y el
              funcionamiento interno de una aplicación o sitio web.
            </li>

            <li>
              <strong>Desarrollador Fullstack:</strong>
              integra conocimientos tanto del desarrollo frontend
              como del backend.
            </li>
          </ul>

          <h4>Tecnologías y estándares web</h4>

          <p>
            Se revisaron tecnologías y estándares básicos como HTML,
            CSS, JavaScript, HTTP/HTTPS y XML, además de tecnologías
            complementarias como Web APIs, SVG y WebGL.
          </p>

          <h4>Frontend y Backend</h4>

          <p>
            El frontend corresponde a la interfaz y experiencia del
            usuario, mientras que el backend se encarga de la lógica,
            base de datos y funcionamiento interno de la aplicación.
          </p>

        </div>

        <div class="columna-practica">

          <h3>Práctica</h3>

          <p>
            Evidencias de los trabajos, ejercicios y actividades
            realizadas durante la Semana 1.
          </p>

          <div class="imagenes-practica">

            <div class="imagen-recuadro">
              <img
                src="img/semana_1.1.png"
                alt="Evidencia de la práctica 1"
              >
            </div>

            <div class="imagen-recuadro">
              <img
                src="img/semana_1.2.png"
                alt="Evidencia de la práctica 2"
              >
            </div>

            <div class="imagen-recuadro">
              <img
                src="img/semana_1.3.png"
                alt="Evidencia de la práctica 3"
              >
            </div>

            <div class="imagen-recuadro">
              <img
                src="img/semana_1,4.png"
                alt="Evidencia de la práctica 4"
              >
            </div>

          </div>

        </div>

      </div>
    `,

    imagenes: []
  },

  {
    id: 2,
    titulo: "Semana 2",
    fecha: "----",
    resumen: "---",

    contenido: `
      <div class="semana-contenido">

        <div class="columna-teoria">
          <h3>Teoría</h3>
          <p>Contenido pendiente de la Semana 2.</p>
        </div>

        <div class="columna-practica">
          <h3>Práctica</h3>
          <p>Contenido pendiente de la Semana 2.</p>
        </div>

      </div>
    `,

    imagenes: []
  },

  {
    id: 3,
    titulo: "Semana 3",
    fecha: "----",
    resumen: "---",

    contenido: `
      <div class="semana-contenido">

        <div class="columna-teoria">
          <h3>Teoría</h3>
          <p>Contenido pendiente de la Semana 3.</p>
        </div>

        <div class="columna-practica">
          <h3>Práctica</h3>
          <p>Contenido pendiente de la Semana 3.</p>
        </div>

      </div>
    `,

    imagenes: []
  }
];

const grid = document.getElementById("lista-semanas");
const detalle = document.getElementById("detalle-semana");

semanas.forEach((semana) => {
  const card = document.createElement("div");

  card.className = "semana-card";

  card.innerHTML = `
    <h3>${semana.titulo}</h3>
    <p class="fecha">${semana.fecha}</p>
    <p>${semana.resumen}</p>
  `;

  card.addEventListener("click", () => {
    mostrarSemana(semana.id);
  });

  grid.appendChild(card);
});

function mostrarSemana(id) {
  const semana = semanas.find((item) => item.id === id);

  if (!semana) {
    return;
  }

  document.getElementById("detalle-titulo").textContent =
    semana.titulo;

  document.getElementById("detalle-fecha").textContent =
    semana.fecha;

  document.getElementById("detalle-contenido").innerHTML =
    semana.contenido;

  document.getElementById("detalle-imagenes").innerHTML =
    semana.imagenes
      .map(
        (src) =>
          `<img src="${src}" alt="${semana.titulo}">`
      )
      .join("");

  grid.classList.add("oculto");
  detalle.classList.remove("oculto");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

document.getElementById("volver").addEventListener("click", () => {
  detalle.classList.add("oculto");
  grid.classList.remove("oculto");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});