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
    <div className='p-4 border-solid border-[1px] rounded-lg border-gray-300 text-zinc-700 hover:border-red-800'>
        <div className="pb-2 mb-2 border-b-[1px]">
          <div className="text-2xl font-semibold">
            {title}
          </div>
          <div>
            {description}
          </div>
        </div>

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

        <div className="pt-2 mt-2 border-t-[1px]">
          <>
            Publicado em: {published}
          </>
        </div>
    </div>
  )
}