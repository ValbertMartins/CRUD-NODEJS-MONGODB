const express = require('express')
const router = express.Router()
const {readController , postController , updateController , deleteController} = require('../controllers/routerController')
//midlewares
    router.use(express.urlencoded({extended:false}))
    router.use(express.json())

//Routers

//read
router.get('/read', readController )
//create
router.post('/create', postController )
//update
router.put('/update', updateController )
//delete
router.delete('/delete', deleteController)



module.exports = router