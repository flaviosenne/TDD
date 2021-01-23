const supertest = require('supertest')
const app = require('../src/index')

const request = supertest(app)

test('A aplicação deve rodar na porta 3000', async()=> {
        request.get('/').then(result => {

            return expect(result.statusCode).toEqual(200)
        })
})

test('Deve retornar vermelho como cor favorita', async()=> {
    request.get('/cor/joao').then(res => expect(res.body.cor).toEqual('black'))
})