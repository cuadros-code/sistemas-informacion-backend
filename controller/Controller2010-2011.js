
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = process.env.DB_STRING;
// const url = 'mongodb://localhost:27017';

const obtenerResultados = (req, res) => {

    let respuesta = []
    let labels = []

    MongoClient.connect(url, { useUnifiedTopology: true }, async (err, client) => {
        assert.strictEqual(null, err);
        console.log("Connected successfully to server");

        const db = client.db();
        // const db = client.db('si');

        const collection = db.collection('si')
        // const collection = db.collection('data-si')

        const total = await collection.countDocuments()

        if (req.body.AÑO && Object.keys(req.body).length === 1) {
            let consultaTotal = req.body.AÑO === 'todos' ? {} : { 'AÑO': req.body.AÑO }
            const totalYear = await collection.countDocuments(consultaTotal)
            respuesta.push(totalYear)
            labels.push('total registros consultados')
            return res.json({
                ok: true,
                labels,
                respuesta,
                total,
            })
        }

        console.log(req.body, '1')
        if (req.body.AÑO === 'todos') {
            console.log('todos')
            delete req.body['AÑO']

            const totalYear = await collection.countDocuments()
            respuesta.push(totalYear)
            labels.push('# registros consultados')

        } else {
            const totalYear = await collection.countDocuments({ 'AÑO': req.body.AÑO })
            respuesta.push(totalYear)
            labels.push('# registros consultados')
        }

        let consultaYes = req.body
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