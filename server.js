const express = require('express')
const app = express()
const admin = require('./routers/admin')
const dbconnect = require('./config/dbconnect')
//db connection
    dbconnect()
//midlewares
app.use('/admin', admin)







const PORT = 9090
app.listen(PORT, () => {
    console.log('running in port 9090')
})