import { CarCard, Container } from '../components'

const CarIndex = ({ cars }) => {
  return (
    <Container className='flex flex-col'>
      <h1 className='font-header text-center'>VIEW CARS</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {cars.map((car) => (
          <CarCard {...car} />
        ))}
      </div>
    </Container>
  )
}

export default CarIndex
