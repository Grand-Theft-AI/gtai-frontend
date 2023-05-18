import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap'
import mockCars from '../mockCars'

import mockCar1 from '../assets/mockCar1.jpg'

const CarIndex = () => {
  return (
    <>
      <div className='card-container'>
        <div className='card-background'>
          <h1 className='font-header'>VIEW CARS</h1>
          <br />

          {mockCars.map(({ id, make, model, year, mileage, image, price, zip, city, state, street, description }) => (
            <Card className='custom-card'>
              <CardBody>
                <CardTitle tag='h5'>
                  {year} {make} {model}
                </CardTitle>
                <CardText tag='h6'>Miles: {mileage}</CardText>
                <CardText tag='p'>{description}</CardText>
                <CardText>
                  <small className='smaller-card-text'>
                    Click Now to Aquire!
                  </small>
                </CardText>
              </CardBody>
              <CardImg
                alt='Card image cap'
                bottom
                src={image}
                className='object-cover object-center'
                style={{
                  height: 180,
                }}
                width='100%'
              />
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}

export default CarIndex
