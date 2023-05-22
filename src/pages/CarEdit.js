import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import LabeledInput from '../components/LabeledInput'
import stateLabelValues from '../constants/stateLabelValues'
import Container from '../components/Container'
import Button from '../components/Button'

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
      <h1 className='font-header text-center'>Edit A Car</h1>

      <form className='flex flex-col gap-2' onSubmit={(e) => handleSubmit(e)}>
        <LabeledInput
          label='Make'
          value={make}
          onChange={(e) => setMake(e.target.value)}
        />
        <LabeledInput
          label='Model'
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <LabeledInput
          label='Year'
          type='number'
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <LabeledInput
          label='Mileage'
          type='number'
          value={mileage}
          onChange={(e) => setMileage(e.target.value)}
        />
        <LabeledInput
          label='Image'
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <LabeledInput
          label='Price'
          type='number'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <LabeledInput
          label='Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <LabeledInput
          label='Street'
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <LabeledInput
          label='City'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <label htmlFor='state'>State</label>

        <select
          name='state'
          id='state'
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          {stateLabelValues.map((state) => (
            <option value={state.value} key={state.value}>
              {state.label}
            </option>
          ))}
        </select>

        <LabeledInput
          label='Zip'
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />

        <Button type='submit'>Update Car</Button>
        <Button
          onClick={() => {
            deleteCar(id)
          }}
          type='button'
        >
          Delete Car
        </Button>
      </form>
    </Container>
  )
}

export default CarEdit
