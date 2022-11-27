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
    <div className='p-4 border-solid border-[1px] rounded-lg border-gray-300 text-zinc-700'>
        <>
        <div className="text-2xl font-semibold">{title}</div>

        <div>
          {description}
        </div>

        <hr></hr>

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
        
        <hr></hr>

        Publicado em: {published}
        </>
    </div>
  )
}