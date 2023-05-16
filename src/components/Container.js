const Container = ({ children, className }) => {
  return <div className={`container px-2 mx-auto ${className}`}>{children}</div>
}

export default Container
