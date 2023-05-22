import Container from '../components/Container'
import CountUp from 'react-countup';
import { InView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'
import { Distance, BankNotes } from '../components/icons'



const MyCars = ({ cars, current_user }) => {

  const myCars = cars?.filter(
    (car) => current_user?.id === car.user_id
  )

  return (
    <Container className='flex flex-col'>
      
      <div><h1 className='font-header'>MY CARS</h1></div>

      <div className='flex flex-col items-center justify-center'>
      </div>
      <div className='flex gap-x-6 sm:gap-x-10 m-40'>
  
        <div className='text-[40px] font-tertiary text-white mb-2'>
          {InView ? <CountUp start={0} end={20} duration={3} /> : null}
        </div>
        <div className='font-header text-sm tracking-[2px]'>
          Amount of Cars <br />
          Stolen
        </div>
      </div>

      <div className='flex gap-x-6 sm:gap-x-10 m-40'>

        <div className='text-[40px] font-tertiary text-white mb-2'>
          {InView ? <CountUp prefix="$" start={0} end={200000} duration={3} formattingFn={(value) => `$${(value / 1000).toFixed(1)}K`} /> : null}
        </div>
        <div className='font-header text-sm tracking-[2px]'>
          Total Net Worth of  <br />
          Cars Stolen
        </div>
      </div>

      {myCars.map(
           
          ({ id, make, model, year, mileage, image, price, description }) => (
            <Link to={`/carshow/${id}`} className='no-underline' key={id}>
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

</Container>
  );
};

export default MyCars;