import { useId } from "react"

const LabeledInput = ({ label, type='text', ...rest }) => {
  const id = useId()

  return (
    <div className='flex flex-col'>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} {...rest} className='pt-2 pb-1 px-2 w-full flex-1 block border-b border-white/50 outline-none focus:bg-white/20 bg-white/0 rounded-t-md transition-colors' />
    </div>
  )
}

export default LabeledInput
