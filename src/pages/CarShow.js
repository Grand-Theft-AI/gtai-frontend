import { useParams, NavLink } from 'react-router-dom'
import { Container, Distance, BankNotes, MapPin, Cal } from '../components'

const CarShow = ({ cars, current_user }) => {
  const { id } = useParams()
  let selectedCar = cars?.find((car) => car.id === +id)
  const {
    make,
    model,
    year,
    mileage,
    image,
    description,
    price,
    street,
    city,
    state,
    zip,
    created_at,
  } = selectedCar

  const date = new Date(created_at)
  const yr = date.getFullYear()
  const month = ('0' + (date.getMonth() + 1)).slice(-2)
  const day = ('0' + date.getDate()).slice(-2)

  const formattedDate = `${yr}-${month}-${day}`

  return (
    <Container>
      {selectedCar && (
        <>
          <div className='text-white bg-black/50 backdrop-blur rounded-md overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <img
              src={image}
              alt={`${year} ${make} ${model}`}
              className='object-cover object-center h-full w-full'
            />

            <div className='p-3 lg:col-span-2'>
              <h1 className='font-header text-lg mb-4'>
                {year} {make} {model}
              </h1>

              <h2 className='flex gap-2 items-center text-sm text-red-400'>
                <Distance /> Miles: {mileage}
              </h2>
              <h2 className='flex gap-2 items-center text-sm text-green-400'>
                <BankNotes /> Price:{' '}
                {price.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </h2>
              {current_user && (
                <h2 className='flex gap-2 items-center text-sm text-purple-400'>
                  <MapPin /> {street} {city} {state} {zip}
                </h2>
              )}
              <h2 className='flex gap-2 items-center text-sm text-blue-400'>
                <Cal /> Listed: {formattedDate}
              </h2>
              <p className='text-sm'>{description}</p>
              {current_user && (
                <NavLink
                  to={`/caredit/${id}`}
                  className='text-black bg-blue-400 no-underline pt-2 pb-1 px-8 rounded-md hover:bg-blue-300 transition-colors'
                >
                  Edit Car
                </NavLink>
              )}
            </div>
          </div>
        </>
      )}
    </Container>
  )
}

export default CarShow
