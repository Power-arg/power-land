<h1 align="center"> Power Land</h1> 

Una moderna plataforma de e-commerce especializada en suplementos deportivos y productos de nutrición. Power Land ofrece una experiencia de compra intuitiva y accesible, con un catálogo completo de marcas reconocidas en el mundo del fitness.

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![React](https://img.shields.io/badge/React-18-blue.svg)
![Vite](https://img.shields.io/badge/Vite-Latest-purple.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC.svg)

## ✨ Características

- **📦 Catálogo Extenso** - Amplio surtido de suplementos deportivos de marcas reconocidas 
- **🛒 Carrito Persistente**: Sistema de carrito con gestión de estado mediante Context API
- **📱 Interfaz Responsiva**: Diseño mobile-first optimizado para todos los dispositivos
- **🎯 Componentes Accesibles**: Interfaz de usuario accesible construida con Shadcn/ui y Radix UI
- **📊 Rendimiento Optimizado**: Construcción con Vite para desarrollo y compilación ultra-rápidos
- **🖋️ TypeScript**: Código completamente tipado para mayor seguridad y mantenibilidad
- **🖼️ Diseño Moderno**: Estilos con Tailwind CSS para una interfaz limpia y profesional

## 🛠️ Tecnologías

### Frontend

| Tecnología | Versión | Descripción |
|-----------|---------|------------|
| **React** | 18+ | Librería de UI para construcción de interfaces |
| **Vite** | Latest | Herramienta de compilación ultra-rápida |
| **TypeScript** | 5+ | Lenguaje tipado que compila a JavaScript |
| **Tailwind CSS** | 3+ | Framework de CSS utilitario |
| **React Router** | 6+ | Router para navegación SPA |
| **React Hook Form** | 7+ | Gestión eficiente de formularios |
| **React Query** | 5+ | Gestión de datos y caché del servidor |

### UI & Componentes

- **Shadcn/ui**: Biblioteca de componentes de alta calidad
- **Radix UI**: Componentes primitivos accesibles
- **Sonner**: Notificaciones tipo toast elegantes
- **Date-fns**: Librería de manipulación de fechas

## 📦 Requisitos Previos

Asegúrate de tener instaladas las siguientes versiones:

- **Node.js**: v16 o superior
- **npm**: v7 o superior (o yarn/pnpm como alternativa)
- **Git**: Para clonar el repositorio

## 🚀 Instalación

```bash
# Clonar el Repositorio
git clone <repo>
cd power-land

# Instalar Dependencias
npm install
```

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm run dev
## Inicia el servidor de desarrollo en `http://localhost:5173`. Los cambios se reflejan automáticamente.

# Construccion
npm run build
## Compila la aplicación para producción en la carpeta `dist`.

# Preview de Producción
npm run preview
## Visualiza localmente cómo se vería la aplicación en producción.

# Linting
npm run lint
## Verifica el código en busca de errores y estilos inconsistentes.

# Despliegue en GitHub Pages
npm run deploy
## Compila y despliega automáticamente en GitHub Pages.
```

## 📁 Estructura del Proyecto

```
power-land/
├── src/
│   ├── assets/              # Archivos estáticos (imágenes de productos)
│   │   └── products/        # Imágenes de suplementos
│   ├── components/          # Componentes React reutilizables
│   │   ├── ui/             # Componentes de Shadcn/ui
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProductsSection.tsx
│   │   ├── ProductCard.tsx
│   │   ├── FloatingCart.tsx
│   │   ├── NavLink.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── context/            # Contextos de React
│   │   └── CartContext.tsx  # Gestión del carrito
│   ├── hooks/              # Hooks personalizados
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/                # Utilidades
│   │   └── utils.ts
│   ├── pages/              # Páginas de la aplicación
│   │   ├── Index.tsx       # Página principal
│   │   └── NotFound.tsx    # Página 404
│   ├── data/               # Datos estáticos
│   │   └── products.ts     # Catálogo de productos
│   ├── App.tsx             # Componente raíz
│   ├── main.tsx            # Punto de entrada
│   ├── index.css           # Estilos globales
│   └── vite-env.d.ts       # Tipos de Vite
├── public/                 # Archivos públicos
├── package.json            # Dependencias del proyecto
├── vite.config.ts          # Configuración de Vite
├── tailwind.config.ts      # Configuración de Tailwind
├── tsconfig.json           # Configuración de TypeScript
├── components.json         # Configuración de Shadcn/ui
└── README.md              # Este archivo
```

## 🌐 Despliegue

### GitHub Pages

El proyecto está configurado para despliegue automático en GitHub Pages:
`npm run deploy`

### Vercel

1. Conecta tu repositorio a [Vercel](https://vercel.com)
2. Vercel detectará automáticamente que es un proyecto Vite
3. Las compilaciones y despliegues se harán automáticamente en cada push

### Netlify

1. Conecta tu repositorio a [Netlify](https://netlify.com)
2. Configura:
   - Build command: `npm run build`
   - Publish directory: `dist`

---

<h3 align="center">Última actualización: Marzo 2026</h3>