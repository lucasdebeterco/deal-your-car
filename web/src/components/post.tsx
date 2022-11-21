interface PostProps {
  title: string
  price: number
}

export function Post(props: PostProps) {
  return (
    <div className='p-4 border-solid border-[1px] rounded-lg border-gray-300 text-zinc-700'>
        <div className="text-2xl font-semibold">{props.title}</div>
        <div>brand</div>
        <div>km</div>
        
        <div>R$ {props.price}</div>
    </div>
  )
}