# pITzza y birrAPI

Somos cinco estudiantes que cocinamos código entre pizzas, birras y películas. Este sitio es nuestro TP1 de Frontend: la carta de presentación del equipo, con portada, perfiles, recomendador de noche y bitácora.

**Entrá por [index.html](index.html) y armate la noche: película + pizza + birra + un proyecto para programar en la semana.**

## El equipo

| Integrante | GitHub | Perfil |
| --- | --- | --- |
| Florencia Lelis Guzmán | [fguzman3026](https://github.com/fguzman3026) | [florencia-guzman.html](florencia-guzman.html) |
| Sonia Raquel Andrada | [Raqu28](https://github.com/Raqu28) | [sonia-andrada.html](sonia-andrada.html) |
| Eitel Hugo Belinzoni | [Apoteotico](https://github.com/Apoteotico) | [eitel-belinzoni.html](eitel-belinzoni.html) |
| Esteban Acosta | [otra-tecla](https://github.com/otra-tecla) | [esteban-acosta.html](esteban-acosta.html) |
| Guillermo Alberto Chacon | [GuiLeCha](https://github.com/GuiLeCha) | [guillermo-chacon.html](guillermo-chacon.html) |

Portafolios personales (PFO1): [Florencia](https://pfo-1-landing-page.vercel.app) · [Sonia](https://pfo1-portafolio-sonia.vercel.app/) · [Eitel](https://pfo1-eitel-belinzoni.vercel.app/) · [Esteban](https://portafolio-dun-two-32.vercel.app/) · [Guillermo](https://guillermo-chacon-pfo1.vercel.app/)

## Qué hay en el sitio

- **Portada** (`index.html`): quiénes somos, los cinco afiches y el recomendador *Armá tu noche*.
- **Perfiles**: foto, ciudad, edad, cuatro habilidades, tres películas y tres discos, más una interacción propia con JavaScript.
- **Bitácora** (`bitacora.html`): 13 entradas con qué decidimos, qué nos costó y cómo lo resolvimos.
- **Plantilla** (`template-perfil.html`): base para sumar un perfil nuevo sin romper el diseño.

## Cómo verlo

No hay que instalar nada. Abrí `index.html` en el navegador, o usá *Open with Live Server* en VS Code.

Probalo en 400 px, 900 px y 1200 px (F12 → responsive): no hay scroll horizontal y todo el texto queda dentro de su caja.

## Cómo está armado

```
index.html · bitacora.html · *-apellido.html (raíz)
css/   → normalize.css + styles.css (todo el diseño, mobile first)
js/    → main.js (portada) + perfiles.js (un gesto por perfil)
img/   → fotos .webp 800×800 + iconos SVG + capturas
```

**Diseño “Función de gala”:** marquesina oscura + papel crema + tomate y dorado birra. Títulos en [Fraunces](https://fonts.google.com/specimen/Fraunces), texto en [Outfit](https://fonts.google.com/specimen/Outfit). Paleta: tinta `#12100e` · crema `#fdf8f0` · tomate `#c8452c` · birra `#e8a72b` · albahaca `#3f7d5c` · código `#2b6f8f`.

## JavaScript (qué hace cada botón)

Portada — `js/main.js` → `recomendarNoche()`: sortea película + pizza/birra + proyecto y lo muestra en `#noche-resultado`.

## Estructura de archivos

```text
index.html · bitacora.html · template-perfil.html
florencia-guzman.html · sonia-andrada.html · eitel-belinzoni.html
esteban-acosta.html · guillermo-chacon.html
css/ (normalize + styles) · js/ (main + perfiles) · img/ (fotos + iconos)
README · CONTRIBUTING · GIT-GUIDE · AI-USAGE · LICENSE
```

## Guía de estilos (corta)

Una sola idea para las 8 páginas: marquesina oscura + papel crema, con tomate y dorado birra. Detalle largo de clases en `css/styles.css` (sección 01, tokens).

### Breakpoints

Mobile first: `400px` → dos columnas · `900px` → tres columnas y perfil en dos · `1200px` → cinco afiches en fila.

## JavaScript (detalle)

> Las imágenes de `img/capturas/` son dibujos de referencia, no fotos del navegador. Cambiarlas por capturas reales cuando se pueda.

| Perfil | Función | Efecto |
| --- | --- | --- |
| Florencia | `florenciaPelicula()` | Resalta una de sus 3 películas |
| Sonia | `soniaDisco()` | Abre la nota de un disco |
| Eitel | `eitelFrase()` | Rota una frase de equipo |
| Esteban | `estebanBirras()` | Suma una birra donada al contador |
| Guillermo | `guillermoLluvia()` | Llena la pantalla de 🍕 y 🍺 |

![Captura perfil Florencia](img/capturas/perfil-florencia.svg)
![Captura perfil Sonia](img/capturas/perfil-sonia.svg)
![Captura perfil Eitel](img/capturas/perfil-eitel.svg)
![Captura perfil Esteban](img/capturas/perfil-esteban.svg)
![Captura perfil Guillermo](img/capturas/perfil-guillermo.svg)

Para sumar la tuya: creá la función en `js/perfiles.js`, registrala en `acciones` con tu clave de `data-profile`. Detalle en [CONTRIBUTING.md](CONTRIBUTING.md).

## Tecnologías usadas

HTML, CSS y JavaScript, sin frameworks. Fuente monoespaciada para los rótulos del recomendador. Los nombres `GET /equipo/...` son un guiño al nombre del grupo: todo se resuelve sobre el DOM.

| Endpoint | Qué es de verdad |
| --- | --- |
| `GET /equipo/noche-recomendada` | Botón *Armar mi noche* (`js/main.js`) |
| `GET /equipo/perfil/{integrante}` | Las cinco páginas de perfil |
| `POST /equipo/bitacora` | `bitacora.html` |

## Accesibilidad

Salto al contenido, `aria-current` en el menú, foco dorado visible, botones de 48 px, `prefers-reduced-motion`, y textos alternativos en las fotos.

## Estado y pendientes

Todo lo pedido está: portada, 5 perfiles completos, JS en portada y en cada perfil, bitácora, 400/900/1200 sin desbordes y este README.

Falta, y lo hace el equipo al publicar:

1. Subir a GitHub y publicar en Vercel (Preset *Other*, raíz del repo), y pegar la URL acá: **URL:** `https://EL-PROYECTO.vercel.app`
2. Reemplazar las maquetas de `img/capturas/` por capturas reales del navegador.

## Para colaborar

Leé [CONTRIBUTING.md](CONTRIBUTING.md): ramas, commits en español y cómo sumar tu perfil. Los comandos mínimos de git están en [GIT-GUIDE.md](GIT-GUIDE.md).

## IA usada

Con ayuda de IA para maquetar, ordenar el CSS y redactar docs; los datos, fotos y decisiones son del equipo. Detalle en [AI-USAGE.md](AI-USAGE.md).

## Licencia

CC BY-NC 4.0: podés compartir y adaptar este trabajo dando crédito al equipo, sin uso comercial. Ver [LICENSE](LICENSE).
