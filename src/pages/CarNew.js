import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LabeledInput, Container, Button, Select, Plus } from '../components'
import { stateLabelValues, carMakes } from '../constants'

const CarNew = ({ createCar }) => {
  const navigate = useNavigate()
  const [make, setMake] = useState(carMakes[0].value)
  const [model, setModel] = useState('')
  const [year, setYear] = useState(2023)
  const [mileage, setMileage] = useState(0)
  const [image, setImage] = useState('')
  const [price, setPrice] = useState(60000)
  const [description, setDescription] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState(stateLabelValues[0].value)
  const [zip, setZip] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    createCar({
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
      <h1 className='font-header text-center mb-10'>New Listing</h1>

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

        <Button type='submit' icon={<Plus />} >Create Listing</Button>
      </form>
    </Container>
  )
}

export default CarNew
