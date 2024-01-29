const express = require('express');
const app = express();
const cors = require('cors');

const PORT = 3000;
// Rutas

// Middlewares para cliente
// Opciones avanzadas de configuración de CORS
const corsOptions = {
  origin: 'http://localhost:5173', // Dominios autorizados
  methods: '*', // Métodos permitidos
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
app.use(express.json());

// Uso de rutas

app.listen(PORT, () => {
  console.log('Server Listen');
});
