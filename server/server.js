import express from 'express'
import axios from 'axios'
import cors from 'cors'
import https from 'https'

const app = express()
const PORT = 3001

// Middleware para permitir solicitudes de origen cruzado (CORS)
app.use(cors())
const httpsAgent = new https.Agent({ rejectUnauthorized: false })
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API de citas aleatorias!')
})

// Ruta para manejar la solicitud a /api/quotes/random
app.get('/api/quotes/random', async (req, res) => {
  try {
    // Hacer la solicitud a la API quotable.io
    console.log('Haciendo solicitud a la API quotable.io')
    const response = await axios.get('https://api.quotable.io/quotes/random', {
      httpsAgent,
    })
    // Devolver los datos recibidos desde la API
    res.status(200).json(response.data[0])
  } catch (error) {
    // Manejar cualquier error que ocurra
    console.error('Petó')
    res.status(500).json({
      error: `Ocurrió un error al obtener la cita aleatoria: ${error.message}`,
    })
  }
})

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en el puerto ${PORT}`)
})