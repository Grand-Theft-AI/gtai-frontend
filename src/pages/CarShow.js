import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  Container,
  Distance,
  BankNotes,
  MapPin,
  Button,
  Left,
  Close,
  Edit,
} from '../components'

const CarShow = ({ cars, current_user, updateCar }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  let selectedCar = cars?.find((car) => car.id === +id)

  return (
    <Container>
      <Link
        to='/carindex'
        className='mt-10 bg-white/5 hover:bg-white/20 transition-colors px-4 py-2.5 text-white no-underline backdrop-blur rounded-md flex w-fit gap-2 items-center'
      >
        <Left />
        <span className='mt-1'>Back</span>
      </Link>
      {selectedCar && (
        <>
          <div className='text-white bg-black/50 backdrop-blur rounded-md overflow-hidden flex flex-col my-10'>
            <img
              src={selectedCar.image}
              alt={`${selectedCar.year} ${selectedCar.make} ${selectedCar.model}`}
              className='object-cover object-center h-full w-full max-h-[600px]'
            />

            <div className='p-3 lg:col-span-2'>
              <h1 className='font-header text-lg mb-5 mt-3'>
                {selectedCar.year} {selectedCar.make} {selectedCar.model}
              </h1>

              <p className='flex gap-2 items-center text-sm text-red-400'>
                <Distance /> Miles: {selectedCar.mileage.toLocaleString()}
              </p>
              <p className='flex gap-2 items-center text-sm text-green-400'>
                <BankNotes /> Price:{' '}
                {selectedCar.price.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </p>
              {current_user && (
                <p className='flex gap-2 items-center text-sm text-purple-400'>
                  <MapPin /> {selectedCar.street} {selectedCar.city} {selectedCar.state} {selectedCar.zip}
                </p>
              )}
              <p className='text-sm'>{selectedCar.description}</p>
              {current_user && (
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                  <Button
                    icon={<Edit />}
                    onClick={(_) => navigate(`/caredit/${id}`)}
                  >
                    Edit Car
                  </Button>
                  <Button
                    color='danger'
                    onClick={() => {
                      updateCar({
                        id: selectedCar?.id,
                        make: selectedCar?.make,
                        model: selectedCar?.model,
                        year: selectedCar?.year,
                        mileage: selectedCar?.mileage,
                        image: selectedCar?.image,
                        price: selectedCar?.price,
                        description: selectedCar?.description,
                        street: selectedCar?.street,
                        city: selectedCar?.city,
                        state: selectedCar?.state,
                        zip: selectedCar?.zip,
                        user_id: current_user.id,
                      })
                      navigate('/mycars')
                    }}
                    icon={<Close />}
                  >
                    Steal Car
                  </Button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </Container>
  )
}

export default CarShow
