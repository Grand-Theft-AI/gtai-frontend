import { useState } from 'react'
import { CarCard, Close, Container, LabeledInput } from '../components'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const CarIndex = ({ cars }) => {
  const [query, setQuery] = useState('')

  const [parent] = useAutoAnimate()
  const [closeButton] = useAutoAnimate()

  const filteredCars = cars?.filter(({ make, model, year }) =>
    `${make} ${model} ${year}`.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <Container className='flex flex-col'>
      <h1 className='font-header text-center mb-10'>VIEW CARS</h1>

      <div
        className='p-4 bg-black/50 rounded-md backdrop-blur max-w-screen-sm w-full mx-auto flex items-end gap-2'
        ref={closeButton}
      >
        <div className='flex-1'>
          <LabeledInput
            label='Search'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {query !== '' && (
          <button onClick={() => setQuery('')} className='bg-white/5 hover:bg-white/20 focus:bg-white/20 outline-none rounded-md h-[36px] w-[36px] flex items-center justify-center'>
            <Close />
          </button>
        )}
      </div>

      <div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'
        ref={parent}
      >
        {filteredCars?.length === 0 ? (
          <>
            <div className='bg-black/50 pt-10 pb-9 rounded-md backdrop-blur col-span-full text-center'>
              <p className='font-koll text-xl'>No Cars Found</p>
            </div>
          </>
        ) : (
          filteredCars?.map((car) => <CarCard {...car} key={car.id} />)
        )}
      </div>
    </Container>
  )
}

export default CarIndex
