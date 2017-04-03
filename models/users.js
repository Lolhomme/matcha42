let connection = require('../config/database.js')

class User {
    static create (content, cb) {
        connection.query('insert into user set content = ?, created_at = ?', [content, new Date()], (err, result) => {
            if (err) throw err
            cb(result)
        })
    }
}

module.exports = User