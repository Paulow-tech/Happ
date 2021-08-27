const Database = require("./database/db.js")
const saveOrphanage = require("./database/saveOrphanages.js")

module.exports = {
    index(req, res) {
        const city = req.query.city
        res.render('index', { city })
    },
    async orphanage(req, res) {
        const id = req.query.id
        try {
            const db = await Database
            const results = await db.all(`SELECT * FROM orphanages WHERE id = "${id}";`)
            let orphanage = results[0]

            orphanage.images = orphanage.images.split(',')
            orphanage.firstImage = orphanage.images[0]
            orphanage.open_on_weekends = orphanage.open_on_weekends == "0" ? false : true

            res.render('orphanage', { orphanage })
        } catch (err) {
            console.log(err)
            res.send('Erro no banco de dados')
        }
    },
    async orphanages(req, res) {
        try {
            const db = await Database
            const orphanages = await db.all(`SELECT * FROM orphanages;`)
            res.render('orphanages', { orphanages })
        } catch (err) {
            console.log(err)
            res.send('Erro no banco de dados')
        }
    },
    createOrphanage(req, res) {
        res.render('create-orphanage')
    },
    async saveOrphanage(req, res) {
        const fields = req.body
        // if (Object.values(fields).includes(''))
        try {
            const db = await Database
            await saveOrphanage(db, fields)
            res.redirect('/orphanages')
        } catch (err) {
            res.send('Erro no banco de dados')
            console.log(err)
        }
    }
}