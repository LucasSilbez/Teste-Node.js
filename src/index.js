const express = require('express')

const app = express()

app.get('/teste', (request, response)=> {
  return response.json({ mensagem: 'Isso é apenas um teste!'})
})

app.listen(3333)