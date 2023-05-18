import { useState } from 'react'
import LabeledInput from '../components/LabeledInput'

const stateLabelValues = [
  { label: 'Alabama', value: 'AL' },
  { label: 'Alaska', value: 'AK' },
  { label: 'American Samoa', value: 'AS' },
  { label: 'Arizona', value: 'AZ' },
  { label: 'Arkansas', value: 'AR' },
  { label: 'California', value: 'CA' },
  { label: 'Colorado', value: 'CO' },
  { label: 'Connecticut', value: 'CT' },
  { label: 'Delaware', value: 'DE' },
  { label: 'District of Columbia', value: 'DC' },
  { label: 'Florida', value: 'FL' },
  { label: 'Georgia', value: 'GA' },
  { label: 'Guam', value: 'GU' },
  { label: 'Hawaii', value: 'HI' },
  { label: 'Idaho', value: 'ID' },
  { label: 'Illinois', value: 'IL' },
  { label: 'Indiana', value: 'IN' },
  { label: 'Iowa', value: 'IA' },
  { label: 'Kansas', value: 'KS' },
  { label: 'Kentucky', value: 'KY' },
  { label: 'Louisiana', value: 'LA' },
  { label: 'Maine', value: 'ME' },
  { label: 'Maryland', value: 'MD' },
  { label: 'Massachusetts', value: 'MA' },
  { label: 'Michigan', value: 'MI' },
  { label: 'Minnesota', value: 'MN' },
  { label: 'Mississippi', value: 'MS' },
  { label: 'Missouri', value: 'MO' },
  { label: 'Montana', value: 'MT' },
  { label: 'Nebraska', value: 'NE' },
  { label: 'Nevada', value: 'NV' },
  { label: 'New Hampshire', value: 'NH' },
  { label: 'New Jersey', value: 'NJ' },
  { label: 'New Mexico', value: 'NM' },
  { label: 'New York', value: 'NY' },
  { label: 'North Carolina', value: 'NC' },
  { label: 'North Dakota', value: 'ND' },
  { label: 'Ohio', value: 'OH' },
  { label: 'Oklahoma', value: 'OK' },
  { label: 'Oregon', value: 'OR' },
  { label: 'Pennsylvania', value: 'PA' },
  { label: 'Puerto Rico', value: 'PR' },
  { label: 'Rhode Island', value: 'RI' },
  { label: 'South Carolina', value: 'SC' },
  { label: 'South Dakota', value: 'SD' },
  { label: 'Tennessee', value: 'TN' },
  { label: 'Texas', value: 'TX' },
  { label: 'Utah', value: 'UT' },
  { label: 'Vermont', value: 'VT' },
  { label: 'Virgin Islands', value: 'VI' },
  { label: 'Virginia', value: 'VA' },
  { label: 'Washington', value: 'WA' },
  { label: 'West Virginia', value: 'WV' },
  { label: 'Wisconsin', value: 'WI' },
  { label: 'Wyoming', value: 'WY' },
]

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
