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

app.listen(3333)