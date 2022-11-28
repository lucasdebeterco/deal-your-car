import cors from 'cors';
import express, { request, response } from 'express';
import { PrismaClient } from '@prisma/client'


const app = express()

app.use(express.json())
app.use(cors())

const prisma = new PrismaClient()

app.get('/posts', async (request, response) => {
  const posts = await prisma.post.findMany()

  return response.send(
    posts
  )
})

app.post('/posts', async (request, response) => {
  const body: any = request.body;

  const post = await prisma.post.create({
    data: {
        title: body.title,
        description: body.description,
        published: body.published,
        price: body.price,
        state: body.state,
        model: body.model,
        manufacturer: body.manufacturer,
        year: body.year,
        km: body.km,

    }
  })
})

app.listen(3333)