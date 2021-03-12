
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';


const obtenerResultados = (req, res) => {

    console.log(req.body.AÑO);

    let respuesta = []
    let labels = []

    MongoClient.connect(url, { useUnifiedTopology: true }, async (err, client) => {
        assert.strictEqual(null, err);
        console.log("Connected successfully to server");

        const db = client.db('si');

        const collection = db.collection('data-si')

        const total = await collection.countDocuments()

        if (req.body.AÑO) {
            let consultaTotal = req.body.AÑO === 'todos' ? {} : { 'AÑO': req.body.AÑO }
            const totalYear = await collection.countDocuments(consultaTotal)
            respuesta.push(totalYear)
            labels.push('# registros consultados')
        }

        let consultaYes = req.body
        console.log(consultaYes);
        const yes = await collection.countDocuments(consultaYes)
        respuesta.push(yes)
        labels.push('Si Adquirieron')
        respuesta.push(respuesta[0] - yes)
        labels.push('no Adquirieron')


        res.json({
            ok: true,
            labels,
            respuesta,
            total,
        })

    })
}



module.exports = {
    obtenerResultados
}