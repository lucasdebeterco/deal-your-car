import cors from 'cors';
import express from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())
app.use(cors())

app.get('/posts', async (request, response) => {
  const posts = await prisma.post.findMany()

  return response.send(
    posts
  )
})

app.get('/states', async (request, response) => {
  const states = await prisma.state.findMany()

  return response.send(
    states
  )
})

app.listen(3333)