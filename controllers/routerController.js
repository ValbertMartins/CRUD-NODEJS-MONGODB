const User = require('../models/User')


readController = async (req,res) => {
   try { 
       
        const response = await User.find()
        res.status(200).json(response)
        
    }
    catch(error) {
        console.log(error)
        res.status(404).json({})
    }
}

postController = async (req,res) => {
    const { name , country , age } = req.body;
    try {
        const newUser = await User.create({
            name,
            age,
            country
        })
        res.status(201).json(newUser)

    } catch(error) {
        console.log(error)
        res.status(400).json()
        
    }
}


updateController = async (req,res) => {
    const { id , ...rest} = req.body;
    
    try {
        const result = await User.findById(id)
        await User.updateOne( result , rest)
        res.status(202).json({"accepted":"true"})
   
    } catch(error) {
        res.status('Não atualizado')
        console.log(error)
        res.status(400).json()

    }
    
}

deleteController =  async (req,res) => {
    try {
        const { id:_id } =  req.body;
        
        const response = await User.deleteOne({_id})
        console.log(response)
        if(response.deletedCount == 0){ 
            return res.status(404).json({"message": "product doesn't exists"})
        }
        res.status(200).json(response)

    } catch(error){
        console.log(error)
        res.status(400).json()
    }

} 

module.exports = {readController , postController, updateController , deleteController}