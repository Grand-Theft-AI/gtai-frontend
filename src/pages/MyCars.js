import { Container, CarCard } from '../components'
import CountUp from 'react-countup'
import { InView } from 'react-intersection-observer'

const Stat = ({ value, children, formattingFn, className }) => {
  return (
    <div className='flex gap-6 sm:gap-10 bg-black/50 backdrop-blur rounded-md p-4 flex-col sm:flex-row'>
      <div className=''>
        {InView ? (
          <CountUp
            start={0}
            end={value}
            duration={3}
            className={`text-[40px] font-tertiary ${className}`}
            formattingFn={formattingFn}
          />
        ) : null}
      </div>
      <div className='font-header text-xl tracking-[2px]'>{children}</div>
    </div>
  )
}

const MyCars = ({ cars, current_user }) => {
  const myCars = cars?.filter((car) => current_user?.id === car.user_id)
  const amountOfStolenCars = myCars.length
  const costOfStolenCars = myCars
    .map((car) => car.price)
    .reduce((a, b) => a + b, 0)

  return (
    <Container className='flex flex-col'>
      <h1 className='font-header text-center'>MY CARS</h1>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 my-10'>
        <Stat value={amountOfStolenCars}>
          Amount of Cars <br />
          Stolen
        </Stat>

        <Stat
          value={costOfStolenCars}
          formattingFn={(value) => `$${(value / 1000).toFixed(1)}K`}
          className='glowing-numbers text-green-600' // Add a class name for styling
        >
          Total Net Worth of <br />
          Cars Stolen
        </Stat>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {myCars.map((car) => (
          <CarCard {...car} key={car.id} />
        ))}
      </div>
    </Container>
  )
}

export default MyCars
