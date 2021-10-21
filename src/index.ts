import express from 'express'
import cors from 'cors'

const PORT: number = Number(process.env.PORT) || 5000

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Home
app.get('/', function (req, res) {
  res.set('Content-Type', 'text/html')
  res.send(
    Buffer.from(
      '<html><head><title>Node.js Starter</title></head><body><p>Node.js Starter</p></body></html>'
    )
  )
})

app.get('/hi', (req, res) => {
  res.json({ message: 'Hi! Welcome to the Node.js starter template.' })
})

// Start server
app.listen(PORT, () =>
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at port ${PORT}`)
)
