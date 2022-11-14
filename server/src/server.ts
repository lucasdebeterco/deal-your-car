import express from 'express';
const app = express()

app.get('/cars', (request, response) => {
  return response.send({
    "teste": 1234
  })
})

app.listen(3333)