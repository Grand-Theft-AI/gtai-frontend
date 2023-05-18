import { useId } from "react"

const LabeledInput = ({ label, type='text', ...rest }) => {
  const id = useId()

  return (
    <div className='flex flex-col'>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} {...rest} className='bg-transparent border-white border' />
    </div>
  )
}

export default LabeledInput
