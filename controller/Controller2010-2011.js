
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

const getRegistration = (req, res) => {


    MongoClient.connect(url, { useUnifiedTopology: true }, async (err, client) => {
        assert.strictEqual(null, err);
        console.log("Connected successfully to server");

        const db = client.db('sistemas-informaticos');

        const collection = await db.collection('2010-2011')

        const total = await collection.countDocuments()

        const yesContain = await collection.countDocuments({'I1R1C1': '1'})
        const notContain = await collection.countDocuments({'I1R1C1': '2'})

        res.json({
            ok: true,
            total,
            yesContain,
            notContain
        })

    });

}

module.exports = {
    getRegistration
}