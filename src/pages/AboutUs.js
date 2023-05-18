import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap'




const AboutUs = () => {
  return (
    <>
      <div className='card-container'>
        <div className='card-background'>
          <h1 className='font-header'>About The Team</h1>
          <br />

          <Card className='custom-card'>
            <CardBody>
              <CardTitle tag='h5'>Nikki Dunlap</CardTitle>
              <CardText tag='h4'>Design Lead</CardText>
              <CardText>
                <small className='smaller-card-text'>
                  Schpeel about Nikki
                </small>
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
              <CardTitle tag='h5'>Ray Kneipp</CardTitle>
              <CardText tag='h4'>Tech Lead</CardText>
              <CardText>
                <small className='smaller-card-text'>Schpeel about Ray</small>
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
              <CardTitle tag='h5'>Greg Ostertag</CardTitle>
              <CardText tag='h4'>Project Manager</CardText>
              <CardText>
                <small className='smaller-card-text'>Schpeel about Greg</small>
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
              <CardTitle tag='h5'>Apolonio Ortiz</CardTitle>
              <CardText tag='h4'>Product Manager</CardText>
              <CardText>
                <small className='smaller-card-text'>Schpeel about Apolonio</small>
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

export default AboutUs
