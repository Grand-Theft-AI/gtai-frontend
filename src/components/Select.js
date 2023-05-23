import { useId } from 'react'

const Select = ({ label, options, ...rest }) => {
  const id = useId()

  return (
    <div className='flex flex-col'>
      <label htmlFor={id}>{label}</label>

      <select
        id={id}
        {...rest}
        className='pt-2 pb-1 px-2 w-full flex-1 block outline-none focus:bg-white/20 bg-white/5 rounded-md'
      >
        {options.map(({ value, label }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
