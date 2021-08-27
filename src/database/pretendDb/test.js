const Database = require('../db.js')
const saveOrphanage = require('../saveOrphanages.js')
const fakedata = require('./fakedata')

Database.then(async db => {
  let orphanage

  // insert data in the table
  await saveOrphanage(db, fakedata[0])
  await saveOrphanage(db, fakedata[1])

  // select all data from table
  orphanage = await db.all(`SELECT * FROM orphanages;`)

  // select only one orphanage by id
  // orphanage = await db.all(`SELECT * FROM orphanages WHERE id = 4;`)

  // delete data
  // await db.run(`DELETE FROM orphanages WHERE id = '4'`)

  console.log(orphanage)
})