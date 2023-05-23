import wrongRoute from '../assets/wrongRoute.png'
import { Container } from '../components'

const NotFound = () => {
  return (
    <Container>
      <img src={wrongRoute} alt='Page Not Found' className='w-full h-auto max-w-screen-md mx-auto' />
    </Container>
  )
}

export default NotFound
