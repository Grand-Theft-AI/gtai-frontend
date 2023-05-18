import Container from '../components/Container'
import mockCars from '../mockCars'
import { Link } from 'react-router-dom'
// import { Distance } from '../components/icons/Distance'
// import { BankNotes } from '../components/icons/BankNotes'
import { Distance, BankNotes } from '../components/icons'

const CarIndex = () => {
  return (
    <Container className='flex flex-col'>
      <h1 className='font-header text-center'>VIEW CARS</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {mockCars.map(
          ({ id, make, model, year, mileage, image, price, description }) => (
            <Link to={`/carshow/${id}`} className='no-underline'>
              <div className='custom-card text-white bg-black rounded-md overflow-hidden custom-card'>
                <div className='p-3'>
                  <h2 className='font-header text-lg'>
                    {year} {make} {model}
                  </h2>
                  <h3 className='flex gap-2 items-center text-sm'>
                    <Distance /> {mileage}
                  </h3>
                  <h3 className='flex gap-2 items-center text-sm'>
                    <BankNotes />{' '}
                    {price.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </h3>
                  <p className='line-clamp-3 text-sm'>{description}</p>
                  <span className='text-yellow-300'>Click Now to Aquire!</span>
                </div>

                <img
                  src={image}
                  alt={`${year} ${make} ${model}`}
                  className='object-cover object-center h-64 w-full'
                />
              </div>
            </Link>
          )
        )}
      </div>
    </Container>
  )
}

export default CarIndex
