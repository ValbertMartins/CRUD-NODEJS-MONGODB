# crud Nodejs+express+mongodb



## Installation



```bash
npm update
```

## Usage 
No diretório config, entre no arquivo dbconnect.js e linke seu banco de dados mongoDB em mongoose.connect('seu banco de dados aqui')

```javascript

const mongoose = require('mongoose')


const dbconnect = async () => {
    try {
        await mongoose.connect('seu banco de dados aqui')
        console.log('mongoose connected')
    } catch (error) {
        console.log(error)
    }
}


module.exports = dbconnect
```

## requisições


Para utilização de requisições via o arquivo indexado no diretório raiz,  request.http , instale a 
<https://github.com/Huachao/vscode-restclient>.