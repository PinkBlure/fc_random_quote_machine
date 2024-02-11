import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 3001;

// Middleware para permitir solicitudes de origen cruzado (CORS)
app.use(cors());

app.get('/', (req, res) => {
    res.send('¡Bienvenido a la API de citas aleatorias!');
});

// Ruta para manejar la solicitud a /api/quotes/random
app.get('/api/quotes/random', async (req, res) => {
  try {
    // Hacer la solicitud a la API quotable.io
    const response = await axios.get('https://api.quotable.io/quotes/random');
    // Devolver los datos recibidos desde la API
    res.status(200).json(response.data);
  } catch (error) {
    // Manejar cualquier error que ocurra
    res.status(500).json({ error: 'Ocurrió un error al obtener la cita aleatoria' });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});
