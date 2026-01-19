// 1. Importar la librería para crear aplicaciones Web
const express = require('express');

// 2. Crear una instacia de express (aplicación principal)
const app = express();

// 3. Definir un puerto sobre el cual funciona nuestra app
const PORT = 3000;

// --- CONFIGURACIÓN ---
// Establecer EJS como motor de vistas
app.set('view engine', 'ejs');

// Establecer la carpeta publica con elementos estáticos
app.use(express.static('public'));

// Simular una lista de productos
const listaProductos = [
    {
        nombre: "Laptop Pro",
        precio: 850,
        categoria: "computadores",
        imagen: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
    },
    {
        nombre: "PC Desktop Gamer",
        precio: 1200,
        categoria: "computadores",
        imagen: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
    },
    {
        nombre: "Audifonos Sony",
        precio: 125,
        categoria: "perifericos",
        imagen: "https://images.unsplash.com/photo-1583394838336-acd977736f90"
    },
    {
        nombre: "Mouse ergonómico",
        precio: 50,
        categoria: "perifericos",
        imagen: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7"
    },
    {
        nombre: "Teclado Mecánico",
        precio: 80,
        categoria: "perifericos",
        imagen: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae"
    }
];



// -- RUTAS --
app.get('/', (req, res) => {
    // Renderizar la plantilla con los datos proporcionados
    res.render('index', { 
        productos: listaProductos, 
        titulo: "Todos los Productos" 
    }); 
});

// Ruta dinámica para categorías
app.get('/categoria/:nombreCategoria', (req, res) => {
    const cat = req.params.nombreCategoria;
    
    // Filtramos el arreglo según la categoría de la URL
    const productosFiltrados = listaProductos.filter(
        p => p.categoria === cat);
    
    res.render('index', { 
        productos: productosFiltrados, 
        titulo: cat.charAt(0).toUpperCase() + cat.slice(1) // Para poner la primera letra en mayúscula
    });
});

// 5. Encender el servidor
app.listen(PORT, () =>{
    console.log(`>>> Servidor corriendo en http://localhost:${PORT}`);
    console.log(`>>> Presione Ctrl + c para detener`);
});
