import { Link } from 'react-router-dom'
import { Distance, BankNotes } from '../components/icons'

const CarCard = ({
  id,
  make,
  model,
  year,
  mileage,
  image,
  price,
  description,
}) => {
  return (
    <Link to={`/carshow/${id}`} className='no-underline' key={id}>
      <div className='custom-card text-white bg-black/50 backdrop-blur rounded-md overflow-hidden custom-card'>
        <div className='p-3'>
          <h2 className='text-lg font-koll'>
            {year} {make} {model}
          </h2>
          <h3 className='flex gap-2 items-center text-sm'>
            <Distance /> {mileage.toLocaleString()}
          </h3>
          <h3 className='flex gap-2 items-center text-sm'>
            <BankNotes /> $
            {price.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </h3>
          <p className='line-clamp-3 text-sm text-white/70'>{description}</p>
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
}

export default CarCard
