import { useParams, NavLink } from "react-router-dom"



const CarShow = ({ cars, current_user }) => {
  const { id } = useParams()
  let selectedCar = cars?.find((car) => car.id === +id)



  return (
    <>
      <pageheader>Your Car</pageheader>
      {selectedCar && (
        <>
          <img
            className="car-image"
            alt= "car pic"
            src= {selectedCar.image}
          />
          <h3>{selectedCar.make}</h3>
        </>
      )}

      {current_user && (
        <NavLink 
          to={`/caredit/${selectedCar.id}`}
          >
            Edit Car
          </NavLink>
      )}
    </>
  )
}

export default CarShow
