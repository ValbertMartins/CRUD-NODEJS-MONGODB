const mongoose = require('mongoose')
require('dotenv').config()

const dbconnect = async () => {
    try {
        await mongoose.connect(`mongodb://${process.env.DB_USER}`)
        console.log('mongoose connected')
    } catch (error) {
        console.log(error)
    }
}


module.exports = dbconnect