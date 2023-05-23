import Marquee from 'react-fast-marquee'
import { myHumps } from '../constants'

const colors = [
  'text-blue-400',
  'text-green-400',
  'text-purple-400',
  'text-red-400',
  'text-yellow-400',
  'text-indigo-400',
  'text-pink-400',
]

const MyHumps = () => {
  return (
    <Marquee className='py-5 my-5 bg-black/50 backdrop-blur flex items-center' gradient gradientColor={[0, 0, 0]}>
      {myHumps.map((line) => {
        const randomIndex = Math.floor(Math.random() * colors.length)
          return (

        <span className={`px-10 ${colors[randomIndex]}`}>{line}</span>
          )
      })}
    </Marquee>
  )
}

export default MyHumps
