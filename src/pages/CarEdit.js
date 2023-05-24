import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  LabeledInput,
  Container,
  Button,
  Select,
  Trash,
  Edit,
} from '../components'
import { stateLabelValues, carMakes } from '../constants'

const CarEdit = ({ updateCar, deleteCar, cars }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  let currentCar = cars?.find((car) => car.id === +id)

  const [make, setMake] = useState(currentCar.make)
  const [model, setModel] = useState(currentCar.model)
  const [year, setYear] = useState(currentCar.year)
  const [mileage, setMileage] = useState(currentCar.mileage)
  const [image, setImage] = useState(currentCar.image)
  const [price, setPrice] = useState(currentCar.price)
  const [description, setDescription] = useState(currentCar.description)
  const [street, setStreet] = useState(currentCar.street)
  const [city, setCity] = useState(currentCar.city)
  const [state, setState] = useState(currentCar.state)
  const [zip, setZip] = useState(currentCar.zip)

  const handleSubmit = (e) => {
    e.preventDefault()
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
    })
    navigate('/carindex')
  }

  return (
    <Container>
      <h1 className='font-header text-center mb-10'>Edit A Car</h1>

      <form
        className='flex flex-col gap-2 max-w-screen-sm m-auto backdrop-blur bg-black/50 rounded-md p-4'
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
          <Select
            label='Make'
            options={carMakes}
            value={make}
            onChange={(e) => setMake(e.target.value)}
            required
          />
          <LabeledInput
            label='Model'
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
          />
          <LabeledInput
            label='Year'
            type='number'
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <LabeledInput
          label='Mileage'
          type='number'
          value={mileage}
          onChange={(e) => setMileage(e.target.value)}
          required
        />
        <LabeledInput
          label='Image'
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <LabeledInput
          label='Price'
          type='number'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <LabeledInput
          label='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
          <LabeledInput
            label='Street'
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />
          <LabeledInput
            label='City'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />

          <Select
            label='State'
            options={stateLabelValues}
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />

          <LabeledInput
            label='Zip'
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            required
          />
        </div>

        <div className='grid gap-2 sm:grid-cols-2'>
          <Button
            color='danger'
            onClick={() => {
              deleteCar(id)
            }}
            type='button'
            icon={<Trash />}
          >
            Delete Car
          </Button>
          <Button type='submit' icon={<Edit />}>
            Update Car
          </Button>
        </div>
      </form>
    </Container>
  )
}

export default CarEdit
