const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Acme Web App</title>
    </head>
    <body>
      <p>Hola mundo, bootcamp <strong>Arquitectura en la nube - nivel intermedio</strong>.</p>
    </body>
    </html>
  `)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

