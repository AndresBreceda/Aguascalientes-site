## Aguascalientes site
Proyecto React + TypeScript + Vit

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalado en tu sistema:

- Node.js (versión 16.0 o superior)
- npm (normalmente viene con Node.js)
- Git

## Instalación

1. Clona el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd [NOMBRE_DEL_PROYECTO]
```

2. Instala las dependencias:
```bash
npm install
```

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Esto iniciará el servidor en `http://localhost:5173` con Hot Module Replacement (HMR) activado.

## Construcción para Producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Los archivos generados se encontrarán en el directorio `dist/`.

## Configuración de ESLint

El proyecto incluye una configuración de ESLint para TypeScript y React. Para habilitar reglas de lint con reconocimiento de tipos:

1. Configura `parserOptions` en tu archivo de configuración:

```javascript
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

2. Actualiza la configuración de ESLint con soporte para React:

```javascript
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  settings: { react: { version: '18.3' } },
  plugins: {
    react,
  },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Plugins de Vite

El proyecto utiliza los siguientes plugins oficiales de Vite:

- `@vitejs/plugin-react`: Utiliza Babel para Fast Refresh
- `@vitejs/plugin-react-swc`: Utiliza SWC para Fast Refresh

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run lint`: Ejecuta el linter
- `npm run preview`: Previsualiza la versión de producción localmente

## Estructura del Proyecto

```
├── src/               # Código fuente
├── public/            # Archivos estáticos
├── dist/             # Build de producción
├── tsconfig.json     # Configuración de TypeScript
├── vite.config.ts    # Configuración de Vite
└── package.json      # Dependencias y scripts
```

## Tecnologías Principales

- React 18
- TypeScript
- Vite
- ESLint
