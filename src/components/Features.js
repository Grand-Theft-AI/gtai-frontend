import Container from './Container'

const appFeatures = [
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-12 h-12'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
    ),
    heading: 'Effortlessly List Your Car',
    description:
      'List your car with ease. Provide vehicle information and photos to reach potential buyers.',
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-12 h-12'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
        />
      </svg>
    ),
    heading: 'Showcase Your Car with a Photo',
    description:
      'Grab attention with stunning car photos. Upload multiple high-quality images to stand out.',
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-12 h-12'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
        />
      </svg>
    ),
    heading: 'Safe and Convenient Communication',
    description:
      'Communicate securely with potential buyers. Ask questions, negotiate prices, and arrange test drives within the app.',
  },
]

const Features = () => {
  return (
    <Container>
      <h2 className='font-header text-4xl text-center my-5'>Features</h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        {appFeatures.map((feature) => (
          <div
            className='shadow-md shadow-black flex flex-col gap-2 p-4 text-center bg-black/50 backdrop-blur rounded-md items-center'
            key={feature.heading}
          >
            {feature.icon}
            <h3 className='font-koll text-lg flex-1 flex items-center justify-center'>{feature.heading}</h3>
            <p className='font-sans text-sm'>{feature.description}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Features
