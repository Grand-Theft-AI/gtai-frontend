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
    <h1 className='font-header text-center'>MY CARS</h1>
  </div>

  <div className='flex flex-col items-center justify-center p-20'></div>
  <div className='flex flex-col items-end justify-center'>
    <div className='text-[40px] font-tertiary text-white mb-2'>
      {InView ? (
        <CountUp start={0} end={amountOfStolenCars} duration={3} />
      ) : null}
    </div>
    <div className='font-header text-xl tracking-[2px] text-center'>
      Amount of Cars <br />
      Stolen
    </div>
    <div className='text-[40px] font-tertiary text-green-600 mb-2 pt-5'>
      {InView ? (
        <CountUp
          prefix='$'
          start={0}
          end={costOfStolenCars}
          duration={3}
          formattingFn={(value) => `${value >= 0 ? '+' : ''}$${(value / 1000).toFixed(1)}K`}
          className='glowing-numbers'
        />
      ) : null}
    </div>
    <div className='font-header text-xl tracking-[2px] text-center'>
      Total Net Worth <br /> of Cars Stolen
    </div>
  </div>

  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
    {myCars.map((car) => (
      <CarCard
        key={car.id}
        totalCarsStolen={amountOfStolenCars}
        netWorth={costOfStolenCars}
        {...car}
      />
    ))}
  </div>
</Container>

  )
}

export default MyCars
