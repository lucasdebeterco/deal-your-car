import { Post } from './components/post'
import './styles/main.css'

function App() {
  return (

    <div className='container mx-auto flex flex-col items-center my-20'>
      <h1 className="flex align-middle text-4xl text-red-700 font-bold">Deal Your Car</h1>

      <div className='w-full grid gap-5 grid-cols-4 mt-20'>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default App
