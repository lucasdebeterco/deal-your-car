interface PostProps {
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

export function Post({title, description, published, price, state, model, manufacturer, year, km}: PostProps) {
  return (
    <div className='border-solid border-[1px] rounded-lg border-gray-300 text-zinc-700 hover:border-red-800 shadow-md overflow-hidden'>
        <div className="p-4 mb-2 border-b-[1px] bg-red-700 text-white">
          <div className="text-2xl font-semibold">
            {title}
          </div>
          <div className="h-11">
            {description}
          </div>
        </div>

        <div className="p-4 text-lg">
          <div>
            R$ {price}
          </div>

          <div>
            Estado: {state}
          </div>

          <div>
            Marca: {manufacturer}
          </div>

          <div>
            Modelo: {model}
          </div>

          <div>
            year: {year}
          </div>

          <div>
            {km}Km
          </div>
        </div>
        

        <div className="p-4 mt-2 border-t-[1px] font-semibold">
          <>
            Publicado em: {published}
          </>
        </div>
    </div>
  )
}