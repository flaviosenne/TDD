const express = require('express')


const app = express()

app.get('/', (req, res) => {
    res.status(200).send('oi')
})

app.get('/cor/:pessoa', (req, res) => {
    let pessoa = req.params.pessoa

    if(pessoa == 'joao'){
        return res.json({cor: 'black'})
    }

})

module.exports = app
