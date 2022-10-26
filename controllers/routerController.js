const User = require('../models/User')


readController = async (req,res) => {
   try { 
        const response = await User.find()
        res.send(response)  
    }
    catch(error) {
        console.log(error)
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
        res.send(newUser)

    } catch(error) {
        console.log(error)
    }
}


updateController = async (req,res) => {
    const { id , ...rest} = req.body;
    
    try {
        const result = await User.findById(id)
        await User.updateOne( result , rest)
        res.send('Atualizado')
   
    } catch(error) {
        res.send('Não atualizado')
        console.log(error)
    }
    
}

deleteController =  async (req,res) => {
    try {
        const { id:_id } =  req.body;
        const response = await User.deleteOne({ _id })
        res.send(response)

    } catch(error){
        console.log(error)
    }

} 

module.exports = {readController , postController, updateController , deleteController}