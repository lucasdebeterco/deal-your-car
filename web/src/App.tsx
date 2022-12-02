import { Post } from './components/Post'
import './styles/main.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import {MagnifyingGlassPlus} from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
import { CreatePostModal } from './components/CreatePostModal';

interface Post {
  id: number;
  title: string
  description: string
  published: Date
  price: number
  state: string
  model: string  
  manufacturer: string
  year: number
  km: number
}

function App() {
  const [posts, setPosts] = useState<Post[]>([])


  useEffect(() => {
    axios(`http://localhost:3333/posts`)
    .then(response => {
      setPosts(response.data)
    })
  }, [])

  return (
    <div className='container mx-auto flex flex-col items-center my-20'>
      <h1 className="flex align-middle text-4xl text-red-700 font-bold">Deal Your Car</h1>
      
      <Dialog.Root>
        <Dialog.Trigger className='mt-6 py-3 px-4 text-lg bg-red-700 hover:bg-red-800 text-white rounded flex items-center gap-2'>
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>

        <CreatePostModal />
      </Dialog.Root>


      <div className='w-full grid gap-5 grid-cols-4 mt-20'>
        {posts.map(post => {
          return (
            <Post 
              key={post.id}
              title={post.title}
              description={post.description}
              published={post.published}
              price={post.price}
              state={post.state}
              model={post.model}
              manufacturer={post.manufacturer}
              year={post.year}
              km={post.km}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
