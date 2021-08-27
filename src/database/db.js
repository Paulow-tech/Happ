function execute(db){
   return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `)
}

const Database = require('sqlite-async')
const openedDb = Database.open(__dirname + '/database.sqlite')

openedDb.then(execute)
module.exports = openedDb