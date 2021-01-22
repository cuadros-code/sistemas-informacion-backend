const express = require('express')
const { getRegistration } = require('./controller/Controller2010-2011')
const app = express()

const PORT = process.env.PORT || 4001

app.use( express.json() )


app.get('/si', getRegistration)


app.listen( PORT , () => {
    console.log(`server on port ${PORT}`);
})
