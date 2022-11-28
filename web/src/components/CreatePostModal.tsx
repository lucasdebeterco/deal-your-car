import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';
import axios from 'axios';
import { Input } from './form/Input';
import { FormEvent } from 'react';

export function CreatePostModal() {

    async function handleCreatePost(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        try {
            await axios.post(`http://localhost:3333/posts`, {
                title: data.title,
                description: data.description,
                price: Number(data.price),
                state: data.state,
                model: data.model,
                manufacturer: data.manufacturer,
                year: Number(data.year),
                km: Number(data.km),
            })
            alert('Post criado com sucesso!')
        } catch(e) {
            console.log(e)
            alert('Erro ao criar Post!')
        }
    }

    return (
        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

          <Dialog.Content className='fixed bg-[#fff] py-8 px-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[580px] shadow-lg shadow-black/25'>
            <Dialog.Title className='text-3xl font-semibold text-center text-red-700' >Publique um anúncio</Dialog.Title>
            
            <form onSubmit={handleCreatePost} className='mt-8 flex flex-col gap-4'>

              <div className='flex flex-col gap-2'>
                <label htmlFor="title">Título</label>
                <Input name= 'title' id='title' placeholder='Título do anúncio' />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="description">Descrição</label>
                <Input name= 'description' id='description' placeholder='Descrição do anúncio' />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="price">Preço</label>
                <Input type='number' name= 'price' id='price' placeholder='Preço do veículo' />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="state">Estado</label>
                <Input name= 'state' id='state' placeholder='Estado onde está o carro' />
              </div>

              <div className='grid grid-cols-2 gap-6'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="model">Modelo</label>
                  <Input name= 'model' id='model' placeholder='Modelo do veículo' />
                </div>
                
                <div className='flex flex-col gap-2'>
                  <label htmlFor="manufacturer">Fabricante</label>
                  <Input name= 'manufacturer' id='manufacturer' placeholder='Fabricante do veículo' />
                </div>
              </div>

              <div className='grid grid-cols-2 gap-6'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="year">Ano</label>
                  <Input type='number' name= 'year' id='year' placeholder='Ano do veículo' />
                </div>

                <div className='flex flex-col gap-2'>
                  <label htmlFor="km">Kilometragem</label>
                  <Input type='number' name= 'km' id='km' placeholder='Kilometragem do veículo' />
                </div>
              </div>

              <footer className='mt-4 flex justify-end gap-4'>
                <Dialog.Close
                  type='button' 
                  className='bg-zinc-200 px-5 h-12 rounded-md font-semibold hover:bg-zinc-300'
                >
                    Cancelar
                </Dialog.Close>
                <button 
                  type="submit"
                  className='bg-red-700 text-white flex items-center gap-3 px-5 h-12 rounded-md font-semibold hover:bg-red-800'
                >
                  <GameController size={24} />
                  Publicar anúncio
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
    )
}