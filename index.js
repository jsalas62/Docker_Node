const express = require('express');
const app = express();
const port = 3000; 

app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send('Bienvenido a la aplicación de Express!');
});

// Ruta /clientes
app.get('/clientes', (req, res) => {
  const clientes = [
    { id: 1, nombre: 'Cliente 1' },
    { id: 2, nombre: 'Cliente 2' },
    { id: 3, nombre: 'Cliente 3' }
  ];
  res.json(clientes);
});

// Ruta /productos
app.get('/productos', (req, res) => {
  const productos = [
    { id: 1, nombre: 'Producto 1' },
    { id: 2, nombre: 'Producto 2' },
    { id: 3, nombre: 'Producto 3' }
  ];
  res.json(productos);
});

app.listen(port, () => {
  console.log(`App escuchando en http://localhost:${port}`);
});
