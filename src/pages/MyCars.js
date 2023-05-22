import { Container, CarCard } from '../components'
import CountUp from 'react-countup'
import { InView } from 'react-intersection-observer'

const MyCars = ({ cars, current_user }) => {
  const myCars = cars?.filter((car) => current_user?.id === car.user_id)
  const amountOfStolenCars = myCars.length
  const costOfStolenCars = myCars
    .map((car) => car.price)
    .reduce((a, b) => a + b, 0)

  return (
    <Container className='flex flex-col'>
      <div>
        <h1 className='font-header'>MY CARS</h1>
      </div>

      <div className='flex flex-col items-center justify-center'></div>
      <div className='flex gap-x-6 sm:gap-x-10 m-40'>
        <div className='text-[40px] font-tertiary text-white mb-2'>
          {InView ? (
            <CountUp start={0} end={amountOfStolenCars} duration={3} />
          ) : null}
        </div>
        <div className='font-header text-sm tracking-[2px]'>
          Amount of Cars <br />
          Stolen
        </div>
      </div>

      <div className='flex gap-x-6 sm:gap-x-10 m-40'>
        <div className='text-[40px] font-tertiary text-white mb-2'>
          {InView ? (
            <CountUp
              prefix='$'
              start={0}
              end={costOfStolenCars}
              duration={3}
              formattingFn={(value) => `$${(value / 1000).toFixed(1)}K`}
            />
          ) : null}
        </div>
        <div className='font-header text-sm tracking-[2px]'>
          Total Net Worth of <br />
          Cars Stolen
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {myCars.map((car) => (
          <CarCard {...car} />
        ))}
      </div>
    </Container>
  )
}

export default MyCars
