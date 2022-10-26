const mongoose = require('mongoose')


const dbconnect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Clients')
        console.log('mongoose connected')
    } catch (error) {
        console.log(error)
    }
}


module.exports = dbconnect