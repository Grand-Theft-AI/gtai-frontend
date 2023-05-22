const Button = ({children, ...rest}) => {
  return (
  <button {...rest} className='bg-blue-900 pt-2 pb-1 px-4 rounded-md'>{children}</button>
  )
}

export default Button
