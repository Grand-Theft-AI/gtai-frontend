import { useState } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap'

const items = [
  {
    src: 'https://media.tenor.com/vO0HWChhK9YAAAAC/lambo.gif',
    altText: 'Slide 1',
  },
  {
    src: 'https://gifdb.com/images/high/neon-car-cyberpunk-art-sc2jgh69hg0utton.webp',
    altText: 'Slide 2',
  },
  {
    src: 'https://gifdb.com/images/high/neon-car-synthwave-drive-loop-43ljtbdmd15bzat5.webp',
    altText: 'Slide 3',
  },
  {
    src: 'https://gifdb.com/images/high/neon-car-pink-drive-palm-trees-0e091onaqfxszovk.gif',
    altText: 'Slide 4',
  },
]

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const onExiting = () => {
    setAnimating(true)
  }

  const onExited = () => {
    setAnimating(false)
  }

  const next = () => {
    if (animating) return

    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1

    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return

    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1

    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex) => {
    if (animating) return

    setActiveIndex(newIndex)
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem onExiting={onExiting} onExited={onExited} key={item.src}>
        <div className='carousel-wrapper'>
          <img
            src={item.src}
            alt={item.altText}
            className='carousel'
            style={{ maxHeight: '60vh', width: '100%', objectFit: 'cover' }}
          />
        </div>
      </CarouselItem>
    )
  })

  return (
    <Carousel
      className='custom-carousel-background'
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction='prev'
        directionText='Previous'
        onClickHandler={previous}
      />
      <CarouselControl
        direction='next'
        directionText='Next'
        onClickHandler={next}
      />
    </Carousel>
  )
}

export default Slider
