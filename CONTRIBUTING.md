# Cómo colaborar (aunque no hayas usado Git nunca)

Este archivo es el manual del equipo. Si te trabás, leelo entero antes de preguntar: la mayoría de los errores ya están acá, con la forma de salir.

## Qué no hay que tocar sin hablarlo

| Archivo | Por qué | Si necesitás cambiarlo |
| --- | --- | --- |
| `css/styles.css` | Define el look de las 8 páginas | Rama `style/…` y avisarlo en el PR: lo ve todo el equipo |
| `css/normalize.css` | Reinicio de estilos | No se toca |
| `js/main.js` | Es la lógica de la portada | Rama `feature/…` y avisarlo |
| `js/perfiles.js` | Ahí se registran las interacciones de todos | Se puede tocar **agregando** tus líneas, sin borrar las de los demás |
| El HTML de **otra** persona | Su perfil es suyo | Pedile el cambio por chat |

Sí podés tocar sin preguntar: **tu** `nombre-apellido.html`, **tu** imagen en `img/`, una entrada en `bitacora.html` y tu propia línea dentro del objeto `acciones` de `js/perfiles.js`.

## Cómo está armado el sitio (para saber dónde meter mano)

Todas las páginas comparten la misma cáscara: `header` con el logo y el menú, y `footer` con los enlaces. Eso **no se toca**: es lo que hace que el sitio se vea igual en todos lados.

Dentro de tu perfil, el orden es siempre el mismo:

```text
<main class="profile">
  <article class="profile-card">
    .profile-head   → tu foto (.profile-photo) + tu identidad (.profile-id)
                      con el eyebrow, el h1, la .ficha (ciudad, edad, GitHub)
                      y tus cuatro habilidades en .chip-row
    .board          → “Películas favoritas” y “Discos favoritos” (.meta-grid)
    .profile-actions → el botón #btn-perfil y la explicación
  </article>
  <aside class="profile-card profile-nav">
    .pager          → Portada · Anterior · Siguiente · Bitácora
  </aside>
</main>
```

Reglas de oro:

- Cada `<li>` de `.meta-grid` lleva un número automático (`01`, `02`, `03`) que dibuja el CSS: no hay que escribirlo.
- Texto de “completar”: poné la clase `pending` (borde punteado) y **sacala** cuando el dato sea real.
- Tu foto va en `.profile-photo` con `width="800" height="800"` y, si querés, una clase más. Si preferís no usar foto, dejá el `div.avatar.avatar-fallback` con tus iniciales: es válido y está bien visto.
- La guía de estilos completa (paleta, tipografía, componentes y breakpoints) está en el [README](README.md).

## Idea general (30 segundos)

1. Bajás una copia del proyecto (clone).
2. Creás una **rama** (una copia de trabajo con nombre).
3. Cambiás archivos y guardás.
4. Hacés **commit** (foto del cambio).
5. Subís la rama y abrís un **Pull Request** (pedido de revisión).
6. Cuando lo aceptan, entra a `main`.

Nunca trabajes directo en `main`.

## Primera vez en tu computadora

### 1. Instalar Git

En Windows: [https://git-scm.com/download/win](https://git-scm.com/download/win). Next, Next, Finish.

Abrí **Git Bash** o la terminal de VS Code.

### 2. Decirle a Git quién sos (una sola vez en esa PC)

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "el-mail-de-tu-github@ejemplo.com"
```

El mail tiene que ser el de tu cuenta de GitHub (o el mail privado que GitHub te da en Settings → Emails).

### 3. Clonar este repositorio

En GitHub, botón verde **Code** → copiá la URL HTTPS.

```bash
cd Documents
git clone PEGAR-ACA-LA-URL
cd pITzzaYbirrAPI
```

Si el clon pide usuario y contraseña: no uses la contraseña de GitHub. Usá un **Personal Access Token** (GitHub → Settings → Developer settings → Tokens), o instalá GitHub Desktop, que es más visual: [https://desktop.github.com](https://desktop.github.com).

## Cada vez que vayas a cambiar algo

```bash
git checkout main
git pull
git checkout -b feature/perfil-guillermo
```

Cambiá `feature/perfil-guillermo` por tu caso:

- `feature/perfil-sonia`
- `feature/foto-esteban`
- `docs/bitacora-florencia`
- `fix/enlace-roto`
- `style/mejora-botones` (si el cambio es sólo de CSS, y avisás en el PR)

## Sumar un perfil nuevo (paso a paso)

1. Copiá `template-perfil.html` a `nombre-apellido.html` (minúsculas, sin espacios).
2. Poné tu foto en `img/` cuadrada de 800 × 800 px y menos de 500 KB. Si es rectangular, el afiche la recorta.
3. Cargá ciudad, edad, cuatro habilidades, tres pelis y tres discos.
4. Agregá tu interacción en `js/perfiles.js` con tu clave de `data-profile` (ejemplo abajo).
5. Probá en 400 / 900 / 1200 px y sumá tu entrada en `bitacora.html`.

```html
<img
  src="img/nombre-apellido.webp"
  alt="Imagen de perfil de Nombre Apellido"
  width="800"
  height="800"
/>
```

### Sumar tu propia interacción

1. Elegí una clave corta, por ejemplo `nombre`.
2. En tu HTML el `<body>` lleva `data-profile="nombre"` y el botón `id="btn-perfil"`.
3. En `js/perfiles.js` agregala a `acciones` (ejemplo con discos):

```js
/* Esteban: suma una birra al contador. */
function estebanBirras() {
  const numero = document.getElementById("birras-esteban");
  if (!numero) return;
  numero.textContent = Number(numero.textContent) + 1;
}

const acciones = {
  // …las de tus compañeros…
  esteban: estebanBirras
};
```

4. Si tu idea necesita un estilo nuevo (como el contador de birras o la lluvia de emojis), avisá: el CSS es compartido.
5. Probá el botón en el navegador antes de subir el cambio. Si querés otro estado visual, pedilo: el CSS es compartido.

## Guardar el cambio (commit)

```bash
git status
git add nombre-apellido.html img/nombre-apellido.webp
```

Revisá que `git status` **no** muestre archivos que no querés (por ejemplo `_archivo/`). Si aparece algo raro, no sigas: preguntá.

```bash
git commit -m "feat: completar perfil de nombre"
```

Reglas del mensaje: minúsculas después de `feat:` / `fix:` / `docs:` / `style:`, en español, sin punto final. Más ejemplos en [GIT-GUIDE.md](GIT-GUIDE.md).

## Subir y abrir el Pull Request

```bash
git push -u origin HEAD
```

GitHub te muestra un enlace. Entrá, botón **Compare & pull request**, título claro, y en el texto:

- Qué cambiaste.
- Que miraste el perfil en el navegador (y en qué ancho de pantalla).
- Captura si podés.

Pedí revisión a alguien del grupo. No fusiones tu propio PR a `main` si acordamos que otra persona revisa.

En GitHub Desktop: Branch → New branch → cambiás archivos → Commit → Push origin → Create Pull Request.

## Agregar una entrada a la bitácora (una por cambio relevante)

En `bitacora.html`, al final de `<div class="log-feed">`, copiá este bloque y completalo:

```html
<article class="log-entry">
  <div class="log-head">
    <time datetime="2026-09-20">20 sep 2026</time>
    <h3>Tu título corto</h3>
    <span class="log-cat">tu-categoria</span>
  </div>
  <div class="log-body">
    <p class="log-part log-decision"><strong>Decisión</strong><span>Qué hiciste y por qué.</span></p>
    <p class="log-part log-dificultad"><strong>Dificultad</strong><span>Qué te costó y por qué.</span></p>
    <p class="log-part log-resolucion"><strong>Resolución</strong><span>Cómo lo resolviste.</span></p>
  </div>
</article>
```

- La fecha del atributo `datetime` va en formato `AAAA-MM-DD`.
- El `<span class="log-cat">` es una etiqueta corta libre: `diseño`, `javascript`, `imágenes`, `documentación`, `repositorio`.
- Una entrada por cambio relevante. Sin esto, el PR está incompleto.

```bash
git commit -m "docs: agregar entrada de bitacora de Nombre"
```

## Errores frecuentes (y cómo salir)

### “Subí todo a main sin querer”

No borres el repositorio. Avisá al grupo. Si el cambio es chico y todavía no hay más commits encima, se puede dejar y seguir. Si rompiste algo, otra persona puede revertir con un commit nuevo. **No uses** `git push --force` en `main`.

### “Me pide autenticación y falla”

HTTPS + token, o GitHub Desktop. No pegues el token en el chat ni en el README.

### “La imagen no se ve”

- ¿El archivo está en `img/`?
- ¿El nombre en el HTML es **exactamente** igual, incluyendo `.webp`, `.jpg` o `.png`?
- Windows no distingue mayúsculas; GitHub sí. Usá todo minúsculas y sin espacios: `nombre-apellido.webp`.
- ¿La imagen está recortada cuadrada? Si es rectangular, se ve cortada dentro del afiche.

### “El enlace está roto”

Probalo haciendo clic en local. Las rutas son relativas: `index.html`, `css/styles.css`, `img/sonia-andrada.webp`. Nunca `C:\Users\...`.

### “Toqué el CSS y ahora se ve distinto en todas las páginas”

Es esperable: `css/styles.css` es compartido. Avisá en el PR y pedí que otra persona lo revise. Si querés volver atrás **antes** de commitear:

```bash
git checkout -- css/styles.css
```

Si ya lo commiteaste, no reescribas la historia: pedí ayuda y hacé un commit nuevo que corrija.

### “git pull me dice conflicto”

Git marcó el archivo con `<<<<<<<`. Abrí el archivo, dejá el texto correcto, borrá las marcas, guardá:

```bash
git add archivo-corregido.html
git commit -m "fix: resolver conflicto en perfil"
```

Si el conflicto te asusta: no sigas editando a ciegas. Pedí ayuda y mandá captura del archivo.

### “Commité un archivo que no iba”

Si **todavía no** hiciste push:

```bash
git reset HEAD archivo.txt
```

Eso saca el archivo del commit siguiente, no lo borra de tu disco.

Si **ya** hiciste push, no reescribas la historia: hacé un commit nuevo que saque el archivo.

### “No sé si estoy en la rama correcta”

```bash
git branch
```

La rama actual tiene un `*`. Si dice `main`, salí:

```bash
git checkout -b feature/mi-cambio
```

## Probar antes de pedir el PR

1. Abrí tu HTML en el navegador y tocá el botón de tu perfil.
2. Clic en Portada, Integrantes, Recomendador, Bitácora, Anterior y Siguiente.
3. Achicá la ventana hasta 400 px y agrandala hasta 1200 px. Nada se tiene que salir a los costados y las fotos tienen que verse bien.
4. Abrí la consola del navegador (F12). No tiene que haber errores en rojo.
5. Si tenés la carpeta interna `context/`, podés correr:

```bash
node context/verificar-sitio.mjs   # enlaces, anclas, imágenes e ids
node context/probar-js.mjs         # la lógica JS con un DOM simulado
```
