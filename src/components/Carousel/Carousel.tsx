import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface CarouselSettings {
  dots?: boolean
  infinite?: boolean
  speed?: number
  slidesToShow: number
  slidesToScroll: number
  autoplay?: boolean
  autoplaySpeed?: number
  cssEase?: string
  arrows?: boolean
  [key: string]: any
}

interface Props {
  children: React.ReactNode
  className?: string
  settings?: CarouselSettings
}

function Carousel({ children, className = '', settings }: Props) {
  const defaultSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear'
  }
  const carouselSettings = { ...defaultSettings, ...settings }
  return (
    <div className={`mx-auto ${className}`}>
      <Slider {...carouselSettings}>{children}</Slider>
    </div>
  )
}

export default Carousel
