const path = require('path')
// import dependence
const express = require('express')
// initialing the express
const server = express()
const pages = require('./pages')

server
    // use req.body
    .use(express.urlencoded({ extended: true }))
    // using static files
    .use(express.static('public'))
    // configure template engines
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')
    // app routes
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

// Power on the server
server.listen(5500, () => {
    console.log(`Server running in port:${5500}`)
})