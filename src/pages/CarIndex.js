import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap'

import mockCar1 from '../assets/mockCar1.jpg'

const CarIndex = () => {
  return (
    <>
      <div className='card-container'>
        <div className='card-background'>
          <h1 className='font-header'>VIEW CARS</h1>
          <br />

          <Card className='custom-card'>
            <CardBody>
              <CardTitle tag='h5'>A CAR GOES HERE</CardTitle>
              <CardText tag='h4'>Details here.</CardText>
              <CardText>
                <small className='smaller-card-text'>
                  Click Now to Aquire!
                </small>
              </CardText>
            </CardBody>
            <CardImg
              alt='Card image cap'
              bottom
              src={mockCar1}
              style={{
                height: 180,
              }}
              width='100%'
            />
          </Card>
          <Card className='custom-card'>
            <CardBody>
              <CardTitle tag='h5'>A CAR GOES HERE</CardTitle>
              <CardText tag='h4'>Details here.</CardText>
              <CardText>
                <small className='smaller-card-text'>Click to Aquire!</small>
              </CardText>
            </CardBody>
            <CardImg
              alt='Card image cap'
              bottom
              src='https://picsum.photos/900/180'
              style={{
                height: 180,
              }}
              width='100%'
            />
          </Card>
          <Card className='custom-card'>
            <CardBody>
              <CardTitle tag='h5'>A CAR GOES HERE</CardTitle>
              <CardText tag='h4'>Details here.</CardText>
              <CardText>
                <small className='smaller-card-text'>Click to Aquire!</small>
              </CardText>
            </CardBody>
            <CardImg
              alt='Card image cap'
              bottom
              src='https://picsum.photos/900/180'
              style={{
                height: 180,
              }}
              width='100%'
            />
          </Card>
        </div>
      </div>
    </>
  )
}

export default CarIndex
