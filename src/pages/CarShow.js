import { useParams, NavLink, Link } from 'react-router-dom'
import {
  Container,
  Distance,
  BankNotes,
  MapPin,
  Cal,
  Button,
  Left,
} from '../components'

const CarShow = ({ cars, current_user, updateCar }) => {
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
  } = selectedCar

  return (
    <Container>
      <Link to='/carindex' className='mt-10 bg-white/5 hover:bg-white/20 transition-colors px-4 py-2.5 text-white no-underline backdrop-blur rounded-md flex w-fit gap-2 items-center'><Left /><span className='mt-1'>Back</span></Link>
      {selectedCar && (
        <>
          <div className='text-white bg-black/50 backdrop-blur rounded-md overflow-hidden flex flex-col my-10'>
            <img
              src={image}
              alt={`${year} ${make} ${model}`}
              className='object-cover object-center h-full w-full max-h-[600px]'
            />

            <div className='p-3 lg:col-span-2'>
              <h1 className='font-header text-lg mb-5 mt-3'>
                {year} {make} {model}
              </h1>

              <p className='flex gap-2 items-center text-sm text-red-400'>
                <Distance /> Miles: {mileage.toLocaleString()}
              </p>
              <p className='flex gap-2 items-center text-sm text-green-400'>
                <BankNotes /> Price:{' '}
                {price.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </p>
              {current_user && (
                <p className='flex gap-2 items-center text-sm text-purple-400'>
                  <MapPin /> {street} {city} {state} {zip}
                </p>
              )}
              <p className='text-sm'>{description}</p>
              {current_user && (
                <>
                  <NavLink
                    to={`/caredit/${id}`}
                    className='text-black bg-blue-400 no-underline pt-2 pb-1 px-8 rounded-md hover:bg-blue-300 transition-colors'
                  >
                    Edit Car
                  </NavLink>
                  <Button
                    onClick={() => {
                      updateCar({
                        id,
                        make,
                        model,
                        year,
                        mileage,
                        image,
                        price,
                        description,
                        street,
                        city,
                        state,
                        zip,
                        user_id: current_user.id,
                      })
                    }}
                  >
                    Steal Car
                  </Button>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </Container>
  )
}

export default CarShow
