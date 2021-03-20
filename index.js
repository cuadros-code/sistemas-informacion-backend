const express = require('express')
require('dotenv').config()
const { obtenerResultados } = require('./controller/Controller2010-2011')
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 4001
app.use(cors())
app.use(express.json())

app.post('/si', obtenerResultados)

app.listen(PORT, () => {
    console.log(`server on port ${PORT}`);
})
