/* -------------------------------------------------------------------------
  Perfiles — una interacción distinta por integrante.
  Cada página declara su clave en <body data-profile="..."> y usa el mismo
  botón #btn-perfil. Para sumar un perfil: agregá su clave en `acciones`
  (ver CONTRIBUTING.md).
------------------------------------------------------------------------- */

function azar(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

/* Florencia: resalta una de sus tres películas. */
function florenciaPelicula() {
  const items = document.querySelectorAll("[data-movie]");
  if (!items.length) return;
  items.forEach(function (item) {
    item.classList.remove("is-highlight");
  });
  azar(Array.from(items)).classList.add("is-highlight");
}

/* Sonia: abre o cierra la nota corta de un disco. */
function soniaDisco() {
  const items = document.querySelectorAll("[data-album]");
  if (!items.length) return;
  const cerrado = Array.from(items).every(function (item) {
    return !item.classList.contains("is-open");
  });
  items.forEach(function (item) {
    item.classList.remove("is-open");
  });
  if (cerrado) {
    azar(Array.from(items)).classList.add("is-open");
  }
}

/* Eitel: rota una frase sobre trabajo en equipo. */
const frasesEitel = [
  "El equipo avanza cuando nadie se queda solo con el problema.",
  "Probar, equivocarse y documentar también es trabajo en equipo.",
  "La resiliencia se nota en el siguiente commit, no en el primero."
];

function eitelFrase() {
  const caja = document.getElementById("frase-equipo");
  if (!caja) return;
  const actual = caja.textContent.trim();
  let siguiente = azar(frasesEitel);
  while (siguiente === actual && frasesEitel.length > 1) {
    siguiente = azar(frasesEitel);
  }
  caja.textContent = siguiente;
}

/* Esteban: contador de birras donadas. Suma uno y lo muestra. */
function estebanBirras() {
  const numero = document.getElementById("birras-esteban");
  const mensaje = document.getElementById("mensaje-birras");
  if (!numero) return;
  const total = Number(numero.textContent) + 1;
  numero.textContent = total;
  if (mensaje) {
    mensaje.textContent =
      total === 1
        ? "¡Primera birra donada! 🍺"
        : "¡Ya van " + total + " birras donadas! 🍺";
  }
}

/* Guillermo: contador interactivo, mensajes del equipo y lluvia/explosión de 🍕 y 🍺 adaptada a móvil. */
const mensajesGuillermo = [
  "¡Marchando una grande de muzzarella y dos birras bien frías! 🍕🍺",
  "¡Segunda vuelta! La mesa del equipo agradece 🙌",
  "¡Pinta IPA y fainá recién horneada en camino! 🍻🍕",
  "¡Cine, pizza, birra y código para todo el grupo! 🎬🍕",
  "¡Ronda servida con honores de la casa! 🍕🍻"
];

function guillermoLluvia(boton) {
  // 1. Contador interactivo de rondas
  const numero = document.getElementById("invitaciones-guille");
  const mensaje = document.getElementById("mensaje-guille");
  if (numero) {
    const total = Number(numero.textContent || 0) + 1;
    numero.textContent = total;
    if (mensaje) {
      mensaje.textContent = azar(mensajesGuillermo);
    }
  }

  // 2. Feedback háptico en celulares compatibles
  if (typeof navigator !== "undefined" && navigator.vibrate) {
    navigator.vibrate(40);
  }

  const emojis = ["🍕", "🍺", "🍻", "🍕"];

  // 3. Emojis emergentes desde el botón (efecto visible inmediato en pantalla táctil)
  if (boton) {
    const rect = boton.getBoundingClientRect();
    const centroX = rect.left + rect.width / 2;
    const centroY = rect.top + rect.height / 2;

    for (let j = 0; j < 6; j++) {
      const pop = document.createElement("span");
      pop.className = "emoji-pop";
      pop.textContent = emojis[j % emojis.length];
      pop.style.left = centroX + "px";
      pop.style.top = centroY + "px";
      const offsetX = (Math.random() - 0.5) * 160;
      const offsetY = -(Math.random() * 80 + 40);
      const rot = (Math.random() - 0.5) * 60;
      pop.style.setProperty("--pop-x", offsetX + "px");
      pop.style.setProperty("--pop-y", offsetY + "px");
      pop.style.setProperty("--pop-rot", rot + "deg");
      pop.setAttribute("aria-hidden", "true");
      document.body.appendChild(pop);
      setTimeout(function () {
        pop.remove();
      }, 1300);
    }
  }

  // 4. Lluvia general cayendo por toda la pantalla
  for (let i = 0; i < 16; i++) {
    const copo = document.createElement("span");
    copo.className = "lluvia-emoji";
    copo.textContent = emojis[i % emojis.length];
    copo.style.left = (Math.random() * 92) + "vw";
    copo.style.animationDelay = (Math.random() * 0.5) + "s";
    copo.setAttribute("aria-hidden", "true");
    document.body.appendChild(copo);
    setTimeout(function () {
      copo.remove();
    }, 2800);
  }
}

/* Plantilla: no tiene datos propios, así que muestra los dos estados que el
   CSS ya trae listos (una película resaltada y un disco abierto). */
function plantillaDemo() {
  const pelis = document.querySelectorAll("[data-movie]");
  const discos = document.querySelectorAll("[data-album]");
  pelis.forEach(function (item) {
    item.classList.remove("is-highlight");
  });
  discos.forEach(function (item) {
    item.classList.remove("is-open");
  });
  if (pelis.length) azar(Array.from(pelis)).classList.add("is-highlight");
  if (discos.length) azar(Array.from(discos)).classList.add("is-open");
}

document.addEventListener("DOMContentLoaded", function () {
  const pagina = document.body.dataset.profile;
  const boton = document.getElementById("btn-perfil");
  if (!pagina || !boton) return;

  const acciones = {
    florencia: florenciaPelicula,
    sonia: soniaDisco,
    eitel: eitelFrase,
    esteban: estebanBirras,
    guillermo: guillermoLluvia,
    plantilla: plantillaDemo
  };

  const accion = acciones[pagina];
  if (accion) {
    boton.addEventListener("click", function () {
      accion(boton);
    });
  }
});
