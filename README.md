# FLOW — Visual Application Architect

FLOW es una herramienta para planificar visualmente el comportamiento de aplicaciones mediante workflows compuestos por nodos.

## Estado actual

La base inicial incluye una interfaz de trabajo visual con topbar, biblioteca de nodos, canvas central con cuadrícula, inspector vacío y panel inferior de ejecución. Estas regiones son actualmente visuales: no hay edición, selección, conexiones ni simulación implementadas.

## Tecnologías

- React, Vite, JavaScript y JSX
- CSS Modules y CSS global
- pnpm

## Instalación y ejecución

```bash
pnpm install
pnpm dev
```

Validaciones:

```bash
pnpm lint
pnpm build
```

## Estructura

```text
src/
├── components/
│   ├── executionpanel/
│   ├── label/
│   ├── nodecanvas/
│   ├── nodeinspector/
│   ├── nodelibrary/
│   └── topbar/
├── pages/home/
├── App.jsx
├── App.module.css
├── index.css
└── main.jsx
```

Cada componente reutilizable tiene su carpeta y su CSS Module. Las páginas viven en `src/pages/`, los estilos globales en `src/index.css` y los componentes utilizan named exports e imports relativos.

## Visión futura

Quedan pendientes el editor basado en nodos, drag & drop, conexiones, inspector editable, ejecución de workflows, undo/redo, persistencia, importación y ejemplos precargados. Estas funcionalidades no forman parte de la base inicial.
