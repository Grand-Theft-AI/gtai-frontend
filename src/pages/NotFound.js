import wrongRoute from "../assets/wrongRoute.png"





const NotFound = () => {
    return (
      <nav className="not-found-page">
        <img src={wrongRoute} alt="Page Not Found" className="not-found-image" />
      </nav>
    )
  }
  
  export default NotFound