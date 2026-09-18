/* Portada — sorteo de la noche del equipo: película + pizza/birra
   + proyecto corto para programar. Se muestra en #noche-resultado. */

function tomar(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

/* Catálogo de películas: sale de los perfiles del equipo. */
const peliculas = [
  "Harry Potter",
  "El rey León",
  "Soy Leyenda",
  "Guerra Mundial Z",
  "La Era de Hielo",
  "Intensamente",
  "A lot like love",
  "Guía del viajero intergaláctico",
  "Gladiador",
  "Hombre en llamas",
  "El Caballero de la Noche"
];

/* Maridajes de la casa: pizza + birra artesanal. */
const maridajes = [
  { pizza: "muzzarella clásica", birra: "golden suave" },
  { pizza: "napolitana", birra: "IPA cítrica" },
  { pizza: "fugazzeta", birra: "red ale" },
  { pizza: "calabresa", birra: "ambar tostada" },
  { pizza: "rúcula y parmesano", birra: "honey beer" }
];

/* Proyectos cortos para programar durante la semana: la parte IT del grupo. */
const proyectos = [
  { nombre: "Contador de visitas con localStorage", stack: "JavaScript + DOM", nivel: "principiante" },
  { nombre: "Buscador de películas sobre un array", stack: "JavaScript", nivel: "principiante" },
  { nombre: "Cuenta regresiva para el estreno", stack: "JavaScript + Date", nivel: "principiante" },
  { nombre: "Cartelera de pizzas con CSS Grid", stack: "HTML + CSS", nivel: "intermedio" },
  { nombre: "Modo oscuro con variables CSS", stack: "CSS", nivel: "intermedio" },
  { nombre: "Filtro de integrantes por habilidad", stack: "JavaScript + DOM", nivel: "intermedio" },
  { nombre: "Formulario de pedido con validación", stack: "HTML + JavaScript", nivel: "avanzado" },
  { nombre: "Cartelera que consume una API pública de películas", stack: "fetch + JSON", nivel: "avanzado" }
];

/* Cada dato se muestra como fila con rótulo: se lee mejor
   que una línea larga y no mueve la caja. */
function filaResultado(rotulo, valor) {
  return (
    '<span class="result-row">' +
    '<span class="result-key">' + rotulo + "</span>" +
    '<span class="result-value">' + valor + "</span>" +
    "</span>"
  );
}

function recomendarNoche() {
  const salida = document.getElementById("noche-resultado");
  if (!salida) return;

  const peli = tomar(peliculas);
  const combo = tomar(maridajes);
  const proyecto = tomar(proyectos);

  salida.innerHTML =
    '<span class="result-title">Tu noche está lista</span>' +
    '<span class="result-list">' +
    filaResultado("Película", peli) +
    filaResultado("Pizza", combo.pizza) +
    filaResultado("Birra", combo.birra) +
    filaResultado("Proyecto", proyecto.nombre) +
    filaResultado("Stack", proyecto.stack + " · " + proyecto.nivel) +
    "</span>";
}

document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("btn-noche");
  if (boton) {
    boton.addEventListener("click", recomendarNoche);
  }
});
