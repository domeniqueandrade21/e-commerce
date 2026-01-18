🚀 TechStore – E-commerce Web con Node.js

Bienvenido a TechStore, un proyecto de e-commerce web desarrollado como práctica de aprendizaje utilizando Node.js y Express.
La aplicación permite visualizar productos tecnológicos y filtrarlos por categorías como Computadores y Periféricos, mostrando la información de manera dinámica y responsiva.

Este proyecto está enfocado en comprender el flujo backend → vistas → usuario, aplicando buenas prácticas básicas de desarrollo web.

🛠️ Tecnologías Utilizadas

Backend: Node.js + Express

Motor de vistas: EJS (Embedded JavaScript Templates)

Frontend: Bootstrap 5

Entorno de desarrollo: Nodemon

Gestión de paquetes: npm

🌟 Funcionalidades Principales

📦 Listado dinámico de productos desde el servidor.

🗂️ Filtrado por categorías mediante rutas dinámicas:

/categoria/computadores

/categoria/perifericos

🖼️ Imágenes reales de productos cargadas desde URLs externas.

🎨 Diseño responsivo adaptable a dispositivos móviles y escritorio.

⚡ Recarga automática del servidor durante el desarrollo con Nodemon.

📂 Estructura del Proyecto
.
├── app.js               # Servidor principal y definición de rutas
├── package.json         # Dependencias y scripts del proyecto
├── public/              # Archivos estáticos (CSS, JS, imágenes)
└── views/
    └── index.ejs        # Vista principal que muestra los productos