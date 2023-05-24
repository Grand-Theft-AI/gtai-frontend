const Button = ({ children, color, icon, ...rest }) => {
  const colorClass =
    color === 'danger'
      ? 'bg-gradient-to-br from-red-700 to-rose-500 hover:from-red-600 hover:to-rose-400'
      : 'bg-gradient-to-br from-blue-700 to-purple-600 hover:from-blue-600 hover:to-purple-600'
  return (
    <button
      {...rest}
      className={`${colorClass} pt-2 pb-1 px-4 rounded-md transition-colors flex items-center gap-2 justify-center`}
    >
      {icon && icon}
      {children}
    </button>
  )
}

export default Button
