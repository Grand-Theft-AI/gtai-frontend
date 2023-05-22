import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap'


const AboutUs = () => {
  return (
    <>
    <h1 className='font-header text-center'>About The Team</h1>
          <br />
      <div className='card-container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className='card-background'>
        <a href='https://www.linkedin.com/in/nikkidunlap/' target='_blank' rel='noopener noreferrer'>
          <Card className='custom-card2'>
            
            <CardBody>
              <CardTitle tag='h5'>Nikki Dunlap</CardTitle>
              <CardText tag='h4'>Design Lead says</CardText>
              <CardText>
                <small className='smaller-card-text'>
                  "I feel like this could look better."
                </small>
                <br/>
                <small className='smaller-card-text2'>
                  Nikki really enjoys working on front-end development. Her dream job in tech is to design VST's for Image-Line.
                </small>
              </CardText>
            </CardBody>
            <CardImg
              alt='Card image cap'
              bottom
              src='https://media.licdn.com/dms/image/D5603AQGNjDqs3AsRiw/profile-displayphoto-shrink_800_800/0/1681834083841?e=1690416000&v=beta&t=SOIzIkDb90q8fC6-ZmvOJZipZuXmV1ksS1Ymf9-nFFw'
              style={{
                height: 310,
              }}
              width='100%'
            />
          </Card>
          </a>
          <a href='https://www.linkedin.com/in/raymondkneipp/' target='_blank' rel='noopener noreferrer'>
          <Card className='custom-card2'>
            <CardBody>
              <CardTitle tag='h5'>Ray Kneipp</CardTitle>
              <CardText tag='h4'>Tech Lead says</CardText>
              <CardText>
                <small className='smaller-card-text'>"Uhhhhh..."</small>
                <br/>
                <small className='smaller-card-text2'>Ray takes pleasure in working on  development. His dream job in tech is to bakadabakada.</small>
              </CardText>
            </CardBody>
            <CardImg
              alt='Card image cap'
              bottom
              src='https://media.licdn.com/dms/image/D5603AQH7TY0MOllXNA/profile-displayphoto-shrink_800_800/0/1667320867883?e=1690416000&v=beta&t=_58-LRfq39y2BaibrmLQ2xDV_87_-9T6eVAc9fs6hW0'
              style={{
                height: 310,
              }}
              width='100%'
            />
          </Card>
          </a>
          <a href='https://www.linkedin.com/in/greg-ostertag/' target='_blank' rel='noopener noreferrer'>
          <Card className='custom-card2'>
            <CardBody>
              <CardTitle tag='h5'>Greg Ostertag</CardTitle>
              <CardText tag='h4'>Project Manager says</CardText>
              <CardText>
                <small className='smaller-card-text'>"Please hire me!"</small>
                <br/>
                <small className='smaller-card-text2'>Greg likes working on bakadabakada development. His dream job in tech is to bakadabakada.</small>
            
              </CardText>
            </CardBody>
            <CardImg
              alt='Card image cap'
              bottom
              src='https://media.licdn.com/dms/image/D4E03AQH2lSy0BZcFUQ/profile-displayphoto-shrink_800_800/0/1681246348521?e=1690416000&v=beta&t=jQsIpmDslqaOr4qqnAQBv1U0ye3bCQaXASi6gBDYKn0'
              style={{
                height: 310,
              }}
              width='100%'
            />
          </Card>
          </a>
          <a href='https://www.linkedin.com/in/apolonioortiz/' target='_blank' rel='noopener noreferrer'>
          <Card className='custom-card2'>
            <CardBody>
              <CardTitle tag='h5'>Apolonio Ortiz</CardTitle>
              <CardText tag='h4'>Product Manager</CardText>
              <CardText>
                <small className='smaller-card-text'>"Hello" *British Accent*</small>
                <br/>
                <small className='smaller-card-text2'>Apolonio enjoys working on bakadabakada development. His dream job in tech is to bakadabakada.</small>
              </CardText>
            </CardBody>
            <CardImg
              alt='Card image cap'
              bottom
              src='https://media.licdn.com/dms/image/D5635AQHclT2Iibn1Sg/profile-framedphoto-shrink_800_800/0/1682375613448?e=1685397600&v=beta&t=zwnSUNha-ALu-U0c_xcMY8z4TcRzqgdV_ifcoFAuAqI'
              style={{
                height: 310,
              }}
              width='100%'
            />
          </Card>
          </a>
        </div>
      </div>
    </>
  )
}

export default AboutUs
