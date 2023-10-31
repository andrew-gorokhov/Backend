const express = require('express')
const userRoter = require('./routes/userRouter')
const PORT  = process.env.PORT || 8080

const app  = express()

app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT,() => console.log(`Сервер запущен на порту ${PORT}`))