# Guía corta de Git

Objetivo de la rúbrica: historial ordenado y participación de todo el equipo. Esta base la arma una persona; el resto suma con ramas y pull requests.

## Ramas

- `main`: lo que se entrega y se publica. No se edita en crudo.
- `feature/nombre-corto`: una funcionalidad o un perfil.
- `fix/nombre-corto`: un arreglo.
- `docs/nombre-corto`: solo documentación o bitácora.

Ejemplos: `feature/perfil-juan`, `feature/portada`, `fix/desborde-400px`.

Flujo:

```text
main
  └── feature/perfil-guillermo
        (commits)
        └── Pull Request hacia main
```

Una rama = un tema. No mezcles la foto de Guillermo con un rediseño del CSS.

## Conventional Commits (en español)

Formato: `tipo: descripción corta`

Tipos que vamos a usar:

- `feat:` algo nuevo que se ve o se usa
- `fix:` corrección
- `docs:` README, bitácora, guías
- `style:` solo CSS visual, sin cambiar HTML de contenido
- `chore:` .gitignore u orden menor

Ejemplos:

```text
feat: agregar javascript en portada
feat: completar perfil de sonia
fix: corregir desborde en 400px
fix: reparar enlace a bitacora en perfiles
docs: documentar url de vercel
docs: explicar uso de ia
```

- Imperativo o descriptivo corto, como en los ejemplos.
- Sin punto final.
- Un cambio por commit si se puede. No: `feat: todo el tp`.

## Primer volcado

El commit inicial puede ser la estructura completa del sitio. A partir de ahí, cada integrante suma commits propios. Eso es lo que la rúbrica lee como participación.

## Qué no hacer

- `git push --force` en `main`
- `--no-verify` (no hay que saltarse ganchos)
- Subir `.env`, carpetas `context/` o `promnt/`
- Commits en nombre de otra persona

## Comandos mínimos

```bash
git checkout main
git pull
git checkout -b feature/mi-tarea
# ...editar archivos...
git add archivo1 archivo2
git commit -m "feat: describir el cambio"
git push -u origin HEAD
```

Después: abrir el Pull Request en GitHub hacia `main`.

## Cambios de diseño (CSS compartido)

`css/styles.css` afecta a las 8 páginas. Si el cambio es de color, tipografía, sombras o espaciados:

1. Abrí una rama `style/nombre-corto` (por ejemplo `style/mejora-botones`).
2. Avisá en el PR **qué páginas miraste** (portada, bitácora y al menos dos perfiles).
3. No mezcles un cambio de diseño con la foto de tu perfil: son dos ramas distintas.

```text
style: agrandar fotos de la cartelera en escritorio
style: unificar alturas de tarjetas en 900px
fix: corregir espacio entre pIT y zza en el logo
```

## Finales de línea

El repositorio tiene un `.gitattributes` con `* text=auto eol=lf`. Eso significa que Git guarda los archivos con finales de línea LF (los que usa Linux y Vercel) aunque vos trabajes en Windows. No hace falta que configures nada ni que conviertas archivos a mano: **no** agregues reglas de `core.autocrlf` en tu copia.

Si ves un commit que dice que se modificaron 500 líneas y vos no tocaste nada, es un problema de finales de línea: avisá al grupo en vez de commitear.
