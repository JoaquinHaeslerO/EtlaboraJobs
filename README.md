# EtLabora - Landing Page

Landing page moderna y profesional para EtLabora, una agencia de reclutamiento que conecta talento español con oportunidades en Alemania y Holanda.

## Tecnologías utilizadas

- React
- TypeScript
- Tailwind CSS
- React Icons
- Vite

## Requisitos previos

- Node.js (versión 14 o superior)
- npm (incluido con Node.js)

## Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd etlabora
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre http://localhost:5173 en tu navegador

## Estructura del proyecto

```
etlabora/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── public/
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Características

- Diseño moderno y profesional
- Totalmente responsive
- Optimizado para SEO
- Componentes reutilizables
- Animaciones suaves
- Integración con Tailwind CSS para estilos consistentes

## Construcción para producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Los archivos generados estarán en el directorio `dist/`. 