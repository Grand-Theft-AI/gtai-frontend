import { Card, CardBody, CardText, CardImg } from 'reactstrap'
import { Container } from '../components'
import { team } from '../constants'

const AboutUs = () => {
  return (
    <Container>
      <h1 className='font-header text-center mb-10'>About The Team</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {team.map(({ name, title, quote, linkedin, image, description }) => (
          <Card
            className='custom-card2 no-underline'
            tag='a'
            href={linkedin}
            target='_blank'
            rel='noopener noreferrer'
          >
            <CardBody>
              <h2 className='text-xl text-white font-koll text-center'>
                {name}
              </h2>
              <h3 className='text-center text-base text-white'>{title} says</h3>
              <CardText className='text-center'>
                <small className='smaller-card-text'>"{quote}"</small>
                <br />
                <small className='smaller-card-text2'>{description}</small>
              </CardText>
            </CardBody>
            <CardImg
              className='object-cover'
              alt='Card image cap'
              bottom
              src={image}
              style={{
                height: 310,
              }}
              width='100%'
            />
          </Card>
        ))}
      </div>
    </Container>
  )
}

export default AboutUs
