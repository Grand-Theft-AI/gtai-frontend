import { useState } from 'react'
import LabeledInput from '../components/LabeledInput'
import stateLabelValues from '../constants/stateLabelValues'

const CarNew = ({addCar}) => {
  const [make, setMake] = useState('')
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
    addCar({
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
  }

  return (
    <>
      <h1>Add A Car</h1>

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
            <option value={state.value} key={state.value}>{state.label}</option>
          ))}
        </select>

        <LabeledInput
          label='Zip'
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />

        <button type='submit'>Add Car</button>
      </form>
    </>
  )
}

export default CarNew
