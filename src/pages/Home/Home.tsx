import { Link } from 'react-router-dom'
import Carousel from 'src/components/Carousel'
import { productCategories, productList, productSpecialDiscount } from 'src/constants/productsData'
import path from 'src/constants/path'
import Accordion from 'src/components/Accordion'
import { accordionFaq } from 'src/constants/accordion'
import { useState } from 'react'
const defaultCarouselSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: 'linear'
}

const fullStar = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
    className='mx-[2px] h-4 w-4 text-[#fe5617]'
  >
    <path
      fillRule='evenodd'
      d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
      clipRule='evenodd'
    />
  </svg>
)

const defaultStar = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='currentColor'
    className='mx-[2px] h-4 w-4 text-gray-700'
  >
    <path
      fillRule='evenodd'
      d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
      clipRule='evenodd'
    />
  </svg>
)

const ProductList = () => (
  <>
    {productList.map((product, index) => {
      let colSpanClass = 'xl:col-span-3 lg:col-span-3 sm:col-span-6 xs:col-span-12'
      if (index < 3) {
        colSpanClass += ' md:col-span-4'
      } else {
        colSpanClass += ' md:col-span-6'
      }
      const hasDiscount = product.price !== product.salePrice
      const discountPercentage = hasDiscount
        ? Math.floor((Number(product.salePrice) / Number(product.price)) * 100 - 100) + '%'
        : ''
      return (
        <div key={product.id} className={`group ${colSpanClass} self-start`}>
          <div className='relative flex justify-center bg-white p-10 shadow-sm'>
            <img src={product.image} alt='anh' className='h-full w-full' />
            <ul className='absolute bottom-[3%] right-[3%] flex bg-yellow-300 p-1'>
              <li>{fullStar}</li>
              <li>{fullStar}</li>
              <li>{fullStar}</li>
              <li>{fullStar}</li>
              <li>{defaultStar}</li>
            </ul>
            <div className='absolute bottom-0 flex w-full items-center justify-center bg-white pb-3 opacity-0 transition duration-500 group-hover:opacity-100'>
              <button className='cursor-pointer bg-[#fe5617] px-5 py-3 text-xl font-bold text-white transition duration-500 hover:bg-[#940c69]'>
                Add to Cart
              </button>
              <div className='mx-1 cursor-pointer bg-yellow-300 p-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
                  />
                </svg>
              </div>
            </div>
            {hasDiscount && (
              <div className='absolute right-[3%] top-[3%] flex h-14 w-14 items-center justify-center rounded-full bg-[#3DE332] font-semibold tracking-wider text-white'>
                {discountPercentage}
              </div>
            )}
          </div>
          <p className='pb-1 pt-4 text-sm font-bold text-[#8D8D8D]'>{product.category}</p>
          <Link to={path.shop}>
            <h3 className='text-md cursor-pointer font-bold transition duration-300 hover:text-[#fe5617] xl:text-xl'>
              {product.title}
            </h3>
          </Link>
          <div className='flex items-center'>
            {hasDiscount && (
              <h2 className='mr-2 pt-2 text-xl font-bold text-[#828282] line-through'>{product.price}</h2>
            )}
            <h2 className='pt-2 text-2xl font-bold text-[#fe5617]'>${product.salePrice}</h2>
          </div>
        </div>
      )
    })}
  </>
)

const ProductSpecialDiscount = () => (
  <>
    {productSpecialDiscount.map((product) => {
      const discountPercentage = 100 - Math.floor((Number(product.salePrice) / Number(product.price)) * 100) + '%'
      return (
        <div
          key={product.id}
          className='mx-auto h-auto w-full place-self-start bg-[#940c69] p-5 xs:col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-9 xl:col-span-9'
        >
          <div className='grid grid-cols-5 gap-6'>
            <div className='xs:col-span-5 sm:col-span-5 md:col-span-2 lg:col-span-2 xl:col-span-2'>
              <div className='relative flex items-center justify-center bg-white px-10 py-20'>
                <img src={product.image} alt='anh' />
                <h3 className='special-text-clip-path absolute left-0 top-0 translate-y-[-100%] bg-[#FA441d] py-3 pl-6 pr-12 text-lg font-bold text-white md:pl-5 md:pr-10'>
                  Deal of the Week
                </h3>
                <ul className='absolute bottom-[3%] right-[3%] flex bg-yellow-300 p-1'>
                  <li>{fullStar}</li>
                  <li>{fullStar}</li>
                  <li>{fullStar}</li>
                  <li>{fullStar}</li>
                  <li>{fullStar}</li>
                </ul>
              </div>
            </div>
            <div className='text-white xs:col-span-5 sm:col-span-5 md:col-span-3 lg:col-span-3 xl:col-span-3'>
              <p className='pb-2 text-sm font-bold xs:pt-2 sm:pt-2 md:pt-4 lg:pt-5 xl:pt-5'>{product.category}</p>
              <h3 className='cursor-pointer font-bold leading-10 transition duration-300 hover:text-[#fe5617] xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl'>
                {product.title}
              </h3>
              <div className='mt-3 flex items-center'>
                <h2 className='mr-2 text-lg font-bold text-white/85 line-through'>${product.price}</h2>
                <h2 className='font-bold text-white xs:text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl'>
                  ${product.salePrice}
                </h2>
                <p className='ml-8 self-center underline xs:text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg'>
                  up to {discountPercentage} off
                </p>
              </div>
              <div className='mt-4 flex'>
                <button className='cursor-pointer border-[3px] border-[#fe5617] bg-[#FA441D] px-5 py-3 text-lg font-bold text-white transition-all duration-500 hover:bg-transparent hover:text-[#fe5617]'>
                  Add to Cart
                </button>
                <div className='mx-1 cursor-pointer bg-yellow-300 p-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-5 w-5 text-black'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })}
  </>
)

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(1)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <div>
      <div
        className='relative h-auto w-full bg-[#fff8e5] bg-bottom bg-no-repeat xs:pt-32 sm:pt-32 md:pt-28 lg:pt-24 xl:pt-40'
        style={{ backgroundImage: 'url("src/assets/img/background.png")' }}
      >
        <div className='container xs:px-6 sm:px-20 md:px-20 lg:px-20 xl:p-0'>
          <div className='relative z-10 grid grid-cols-12 items-center xs:text-center sm:text-center md:text-center lg:text-start xl:text-start'>
            <div className='text-black xs:col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-5 xl:col-span-5'>
              <h1 className='xs:text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[76px]'>
                Take a Good Care of Pets
              </h1>
              <h3 className='py-4 leading-9 xs:text-xl sm:text-xl md:text-xl lg:text-xl xl:text-2xl'>
                We are your local dog home boarding service giving you complete
              </h3>
              <Link to={path.contact}>
                <button className='mt-2 rounded-full border-[3px] border-[#FA441D] bg-[#FA441D] px-10 py-4 font-bold text-white outline-none transition-all duration-300 hover:bg-transparent hover:text-[#fe5716]'>
                  Get Appointment
                </button>
              </Link>
            </div>
            <div className='relative flex justify-center xs:col-span-12 xs:pt-[40px] sm:col-span-12 sm:pt-[40px] md:col-span-12 md:pt-[30px] lg:col-span-7 lg:pt-[80px] xl:col-span-7 xl:pt-[80px]'>
              <img
                src='src/assets/img/slide-2.png'
                alt='bg'
                className='xs:w-[80%] sm:w-[42%] md:w-[35%] lg:w-[55%] xl:w-[60%]'
              />
              <img
                src='src/assets/img/hero-shaps.png'
                alt='bg'
                className='absolute bottom-[37px] right-[5%] hidden xl:block'
              />
            </div>
          </div>
          <img
            src='src/assets/img/hero-shaps-1.png'
            alt='icon-bg'
            className='absolute right-[6%] xs:hidden sm:top-[45%] sm:block md:top-[42%] md:block lg:top-[24%] lg:block xl:top-[24%] xl:block'
          />
          <img
            src='src/assets/img/dabal-foot-1.png'
            alt='icon-bg'
            className='absolute left-[47%] top-[51%] xs:hidden sm:block md:block lg:block xl:block'
          />
          <img
            src='src/assets/img/hero-shaps-1.png'
            alt='icon-bg'
            className='absolute left-0 top-[41%] hidden rotate-[78deg] xl:block'
          />
        </div>
      </div>
      <div className='container h-auto w-full bg-white pb-12 pt-32'>
        <div className='grid grid-cols-12 items-center gap-4 text-black md:px-4 lg:p-0 xl:p-0'>
          <div className='mb-6 text-center xs:col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4'>
            <div className='flex flex-col items-center justify-center'>
              <div className='relative mb-10'>
                <img src='src/assets/img/we-provide-1.jpg' alt='anh' className='h-full w-full rounded-full' />
                <div className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]'>
                  <svg width='326' height='326' viewBox='0 0 673 673' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M9.82698 416.603C-19.0352 298.701 18.5108 173.372 107.497 90.7633L110.607 96.5197C24.3117 177.199 -12.311 298.935 15.0502 413.781L9.82698 416.603ZM89.893 565.433C172.674 654.828 298.511 692.463 416.766 663.224L414.077 658.245C298.613 686.363 175.954 649.666 94.9055 562.725L89.893 565.433ZM656.842 259.141C685.039 374.21 648.825 496.492 562.625 577.656L565.413 582.817C654.501 499.935 691.9 374.187 662.536 256.065L656.842 259.141ZM581.945 107.518C499.236 18.8371 373.997 -18.4724 256.228 10.5134L259.436 16.4515C373.888 -10.991 495.248 25.1518 576.04 110.708L581.945 107.518Z'
                      fill='#fedc4f'
                    ></path>
                  </svg>
                </div>
              </div>
              <h3 className='font-bold xs:text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl'>
                Find a Dog Sitter
              </h3>
              <p className='lg:text-md md:text-md sm:text-md xs:text-md py-4 leading-7 text-black/75 xs:px-12 sm:px-20 md:px-4 lg:px-4 xl:px-0 xl:text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
              </p>
            </div>
          </div>
          <div className='mb-6 text-center xs:col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4'>
            <div className='flex flex-col items-center justify-center'>
              <div className='relative mb-10'>
                <img src='src/assets/img/we-provide-2.jpg' alt='anh' className='h-full w-full rounded-full' />
                <div className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]'>
                  <svg width='326' height='326' viewBox='0 0 673 673' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M9.82698 416.603C-19.0352 298.701 18.5108 173.372 107.497 90.7633L110.607 96.5197C24.3117 177.199 -12.311 298.935 15.0502 413.781L9.82698 416.603ZM89.893 565.433C172.674 654.828 298.511 692.463 416.766 663.224L414.077 658.245C298.613 686.363 175.954 649.666 94.9055 562.725L89.893 565.433ZM656.842 259.141C685.039 374.21 648.825 496.492 562.625 577.656L565.413 582.817C654.501 499.935 691.9 374.187 662.536 256.065L656.842 259.141ZM581.945 107.518C499.236 18.8371 373.997 -18.4724 256.228 10.5134L259.436 16.4515C373.888 -10.991 495.248 25.1518 576.04 110.708L581.945 107.518Z'
                      fill='#fb5e3c'
                    ></path>
                  </svg>
                </div>
              </div>
              <h3 className='font-bold xs:text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl'>
                Become Dog Sitter
              </h3>
              <p className='lg:text-md md:text-md sm:text-md xs:text-md py-4 leading-7 text-black/75 xs:px-12 sm:px-20 md:px-4 lg:px-4 xl:px-0 xl:text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
              </p>
            </div>
          </div>
          <div className='mb-6 text-center xs:col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4'>
            <div className='flex flex-col items-center justify-center'>
              <div className='relative mb-10'>
                <img src='src/assets/img/we-provide-3.jpg' alt='anh' className='h-full w-full rounded-full' />
                <div className='absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]'>
                  <svg width='326' height='326' viewBox='0 0 673 673' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M9.82698 416.603C-19.0352 298.701 18.5108 173.372 107.497 90.7633L110.607 96.5197C24.3117 177.199 -12.311 298.935 15.0502 413.781L9.82698 416.603ZM89.893 565.433C172.674 654.828 298.511 692.463 416.766 663.224L414.077 658.245C298.613 686.363 175.954 649.666 94.9055 562.725L89.893 565.433ZM656.842 259.141C685.039 374.21 648.825 496.492 562.625 577.656L565.413 582.817C654.501 499.935 691.9 374.187 662.536 256.065L656.842 259.141ZM581.945 107.518C499.236 18.8371 373.997 -18.4724 256.228 10.5134L259.436 16.4515C373.888 -10.991 495.248 25.1518 576.04 110.708L581.945 107.518Z'
                      fill='#fedc4f'
                    ></path>
                  </svg>
                </div>
              </div>
              <h3 className='font-bold xs:text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl'>
                Start a franchise
              </h3>
              <p className='lg:text-md md:text-md sm:text-md xs:text-md py-4 leading-7 text-black/75 xs:px-12 sm:px-20 md:px-4 lg:px-4 xl:px-0 xl:text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container h-auto w-full bg-white py-8 xs:px-4 sm:px-16 md:px-20 lg:px-10 xl:px-0'>
        <div className='grid grid-cols-12 items-center gap-8 text-black'>
          <div className='xs:col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-6'>
            <h1 className='xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
              Welcome to The Pet Care Company
            </h1>
            <p className='xs:text-md sm:text-md md:text-md lg:text-md py-8 leading-7 text-black/70 xl:text-lg'>
              Lorem ipsum dolor sit amet,consectetur adipiscing elit do eiusmod tempor incididunt ut labore et.Lorem
              ipsumsit amet, consectetur adipiscing elit, sed do eiusmod teincididunt ut laamet,consectetur adipiscing
              elibore et.
            </p>
            <div className='grid grid-cols-2 gap-6'>
              <div className='xs:col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1'>
                <div className='relative'>
                  <div className='h-[120px] w-[120px] rounded-full bg-[#940c69] p-7'>
                    <img src='src/assets/img/welcome-to-1.png' alt='anh' className='h-full w-full' />
                  </div>
                  <div className='absolute left-0 top-0 translate-x-[-7%] translate-y-[-7%]'>
                    <svg width='138' height='138' viewBox='0 0 673 673' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M9.82698 416.603C-19.0352 298.701 18.5108 173.372 107.497 90.7633L110.607 96.5197C24.3117 177.199 -12.311 298.935 15.0502 413.781L9.82698 416.603ZM89.893 565.433C172.674 654.828 298.511 692.463 416.766 663.224L414.077 658.245C298.613 686.363 175.954 649.666 94.9055 562.725L89.893 565.433ZM656.842 259.141C685.039 374.21 648.825 496.492 562.625 577.656L565.413 582.817C654.501 499.935 691.9 374.187 662.536 256.065L656.842 259.141ZM581.945 107.518C499.236 18.8371 373.997 -18.4724 256.228 10.5134L259.436 16.4515C373.888 -10.991 495.248 25.1518 576.04 110.708L581.945 107.518Z'
                        fill='#940c69'
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className='mt-6 text-2xl font-bold capitalize'>Pet Grooming</h3>
                <p className='xs:text-md sm:text-md md:text-md lg:text-md py-2 leading-7 text-black/70 xl:text-lg'>
                  Lorem ipsum dolor sit amet ur adipiscing elit, sed do eiu incididunt ut labore et.
                </p>
              </div>
              <div className='xs:col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1'>
                <div className='relative'>
                  <div className='h-[120px] w-[120px] rounded-full bg-[#940c69] p-7'>
                    <img src='src/assets/img/welcome-to-2.png' alt='anh' className='h-full w-full' />
                  </div>
                  <div className='absolute left-0 top-0 translate-x-[-7%] translate-y-[-7%]'>
                    <svg width='138' height='138' viewBox='0 0 673 673' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M9.82698 416.603C-19.0352 298.701 18.5108 173.372 107.497 90.7633L110.607 96.5197C24.3117 177.199 -12.311 298.935 15.0502 413.781L9.82698 416.603ZM89.893 565.433C172.674 654.828 298.511 692.463 416.766 663.224L414.077 658.245C298.613 686.363 175.954 649.666 94.9055 562.725L89.893 565.433ZM656.842 259.141C685.039 374.21 648.825 496.492 562.625 577.656L565.413 582.817C654.501 499.935 691.9 374.187 662.536 256.065L656.842 259.141ZM581.945 107.518C499.236 18.8371 373.997 -18.4724 256.228 10.5134L259.436 16.4515C373.888 -10.991 495.248 25.1518 576.04 110.708L581.945 107.518Z'
                        fill='#940c69'
                      ></path>
                    </svg>
                  </div>
                </div>
                <h3 className='mt-6 text-2xl font-bold capitalize'>Dog Walking</h3>
                <p className='xs:text-md sm:text-md md:text-md lg:text-md py-2 leading-7 text-black/70 xl:text-lg'>
                  Lorem ipsum dolor sit amet ur adipiscing elit, sed do eiu incididunt ut labore et.
                </p>
              </div>
            </div>
          </div>
          <div className='xs:col-span-12 xs:mt-10 sm:col-span-12 sm:mt-16 md:col-span-12 md:mt-16 lg:col-span-6 lg:m-0 xl:col-span-6 xl:m-0'>
            <div className='relative'>
              <img
                src='src/assets/img/dog-walker-1.png'
                alt='anh'
                className='mx-auto md:h-[85%] md:w-[85%] lg:h-full lg:w-full xl:h-full xl:w-full'
              />
              <img
                src='src/assets/img/puppies.png'
                alt='anh'
                className='absolute top-0 xs:w-1/2 md:w-[45%] lg:w-3/5 xl:w-1/2'
              />
              <img src='src/assets/img/line.png' alt='anh' className='absolute bottom-0 xs:w-2/3 md:w-3/5 lg:w-3/4' />
              <img src='src/assets/img/dabal-foot.png' alt='anh' className='absolute bottom-0' />
              <img
                src='src/assets/img/haddi.png'
                alt='anh'
                className='absolute left-1/2 top-0 translate-y-[-50%] xs:w-1/4 md:w-1/6'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='container h-auto w-full px-10 pb-28 pt-20 text-center'>
        <img src='src/assets/img/heading-img.png' alt='anh' className='mx-auto' />
        <h5 className='py-2 font-semibold text-[#FA441D] xs:text-lg sm:text-lg md:text-lg lg:text-xl xl:text-xl'>
          FIND HEALTHY PRODUCT BY CATEGORY
        </h5>
        <h1 className='xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl'>Browse By Categories</h1>
        <Carousel
          className='mt-16'
          settings={{
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  ...defaultCarouselSettings,
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 768,
                settings: {
                  ...defaultCarouselSettings,
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 640,
                settings: {
                  ...defaultCarouselSettings,
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          }}
        >
          {productCategories.map((productCategory) => (
            <div
              key={productCategory.id}
              className='group relative flex flex-col items-center justify-center rounded-[65%] border-4 border-gray-100 py-8 transition duration-300 hover:border-[#fe5617]'
            >
              <div className='absolute -left-2 -top-10 h-14 w-20 rotate-[-30deg] rounded-[65%] bg-gray-100 transition duration-300 group-hover:bg-[#fe5617]'></div>
              <img src={productCategory.image} alt='anh' />
              <h3 className='cursor-pointer pt-5 text-xl font-bold transition duration-300 hover:text-[#fe5617]'>
                {productCategory.title}
              </h3>
            </div>
          ))}
        </Carousel>
      </div>
      <div
        className='h-auto w-full bg-[#f5f5f5] bg-no-repeat pb-20 pt-10'
        style={{ backgroundImage: 'url("src/assets/img/healthy-product.png")' }}
      >
        <div className='container text-center xs:w-[90%] sm:w-[85%] md:w-[90%] lg:w-[95%] xl:w-full'>
          <img src='src/assets/img/heading-img.png' alt='anh' className='mx-auto' />
          <h5 className='py-2 font-semibold text-[#FA441D] xs:text-lg sm:text-lg md:text-lg lg:text-xl xl:text-xl'>
            FIND HEALTHY PRODUCT
          </h5>
          <h1 className='xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl'>Healthy Products</h1>
          <div className='mt-14 grid grid-cols-12 items-center gap-x-6 gap-y-12 text-start'>
            <ProductList />
            <ProductSpecialDiscount />
          </div>
        </div>
      </div>
      <div className='container h-auto w-full bg-white px-6 pb-10 pt-28'>
        <div className='grid grid-cols-12 items-center text-center'>
          <div className='pb-16 xs:col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3'>
            <div className='flex items-center justify-center xs:flex-row sm:flex-col md:flex-col lg:flex-col xl:flex-col'>
              <img src='src/assets/img/fun-facts-1.png' alt='anh' />
              <div className='mx-5 flex flex-col'>
                <div className='mt-6 flex'>
                  <h1 className='text-black xs:text-[54px] sm:text-6xl md:text-6xl lg:text-7xl xl:text-[90px]'>100</h1>
                  <h1 className='text-[#fe5617] xs:text-[54px] sm:text-6xl md:text-6xl lg:text-7xl xl:text-[90px]'>
                    +
                  </h1>
                </div>
                <h3 className='text-[#666666] xs:text-lg sm:text-lg md:text-lg lg:text-xl xl:text-xl'>Client Served</h3>
              </div>
            </div>
          </div>
          <div className='pb-16 xs:col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3'>
            <div className='flex items-center justify-center xs:flex-row sm:flex-col md:flex-col lg:flex-col xl:flex-col'>
              <img src='src/assets/img/fun-facts-2.png' alt='anh' />
              <div className='mx-5 flex flex-col'>
                <div className='mt-6 flex'>
                  <h1 className='text-black xs:text-[54px] sm:text-6xl md:text-6xl lg:text-7xl xl:text-[90px]'>99</h1>
                  <h1 className='text-[#fe5617] xs:text-[54px] sm:text-6xl md:text-6xl lg:text-7xl xl:text-[90px]'>
                    %
                  </h1>
                </div>
                <h3 className='text-[#666666] xs:text-lg sm:text-lg md:text-lg lg:text-xl xl:text-xl'>Client Served</h3>
              </div>
            </div>
          </div>
          <div className='pb-16 xs:col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3'>
            <div className='flex items-center justify-center xs:flex-row sm:flex-col md:flex-col lg:flex-col xl:flex-col'>
              <img src='src/assets/img/fun-facts-3.png' alt='anh' />
              <div className='mx-5 flex flex-col'>
                <div className='mt-6 flex'>
                  <h1 className='text-black xs:text-[54px] sm:text-6xl md:text-6xl lg:text-7xl xl:text-[90px]'>2</h1>
                  <h1 className='text-[#fe5617] xs:text-[54px] sm:text-6xl md:text-6xl lg:text-7xl xl:text-[90px]'>
                    k
                  </h1>
                </div>
                <h3 className='text-[#666666] xs:text-lg sm:text-lg md:text-lg lg:text-xl xl:text-xl'>Client Served</h3>
              </div>
            </div>
          </div>
          <div className='pb-16 xs:col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3'>
            <div className='flex items-center justify-center xs:flex-row sm:flex-col md:flex-col lg:flex-col xl:flex-col'>
              <img src='src/assets/img/fun-facts-4.png' alt='anh' />
              <div className='mx-5 flex flex-col'>
                <div className='mt-6 flex'>
                  <h1 className='text-black xs:text-[54px] sm:text-6xl md:text-6xl lg:text-7xl xl:text-[90px]'>400</h1>
                  <h1 className='text-[#fe5617] xs:text-[54px] sm:text-6xl md:text-6xl lg:text-7xl xl:text-[90px]'>
                    +
                  </h1>
                </div>
                <h3 className='text-[#666666] xs:text-lg sm:text-lg md:text-lg lg:text-xl xl:text-xl'>Client Served</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container h-auto w-full bg-white pb-10 pt-10 text-center'>
        <img src='src/assets/img/heading-img.png' alt='anh' className='mx-auto' />
        <h5 className='py-2 font-semibold text-[#FA441D] xs:text-lg sm:text-lg md:text-lg lg:text-xl xl:text-xl'>
          MEET OUR EXPERTS
        </h5>
        <h1 className='xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl'>Best Working Team</h1>
        <div className='mx-auto mt-32 grid grid-cols-12 items-center gap-x-6 gap-y-20 xs:w-[65%] sm:w-[70%] md:w-[90%] lg:w-[95%] xl:w-full'>
          <div className='xs:col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4'>
            <div className='group relative flex flex-col items-center justify-center rounded-[65%] border-4 border-gray-100 py-16 transition duration-300 hover:border-[#fe5617]'>
              <div className='absolute -left-2 -top-6 h-14 w-20 rotate-[-30deg] rounded-[65%] bg-gray-100 transition duration-300 group-hover:bg-[#fe5617]'></div>
              <div className='mt-5 w-full px-14 text-start'>
                <p className='text-md font-bold text-[#fe5617]'>Veterinary Assistant</p>
                <h3 className='cursor-pointer font-bold transition duration-300 hover:text-[#fe5617] xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>
                  Gorjona Hiller
                </h3>
                <div className='mt-4 flex'>
                  <div className='mr-2 h-11 w-11 cursor-pointer rounded-full bg-[#FEDA46] p-3 transition duration-300 hover:bg-[#fe5617]'>
                    <img src='src/assets/img/facebook-icon-svg-dark.svg' alt='logo-facebook' />
                  </div>
                  <div className='h-11 w-11 cursor-pointer rounded-full bg-[#FEDA46] p-3 transition duration-300 hover:bg-[#fe5617]'>
                    <img src='src/assets/img/twitter-icon-svg-dark.svg' alt='logo-facebook' />
                  </div>
                </div>
              </div>
              <div className='absolute right-0 top-0 translate-x-[-5%] translate-y-[-50%]'>
                <div className='relative h-auto w-full'>
                  <img src='src/assets/img/team-1.jpg' alt='anh' className='h-36 w-36 rounded-full' />
                  <div className='absolute left-0 top-0 translate-x-[-5%] translate-y-[-5%]'>
                    <svg width='160' height='160' viewBox='0 0 673 673' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M9.82698 416.603C-19.0352 298.701 18.5108 173.372 107.497 90.7633L110.607 96.5197C24.3117 177.199 -12.311 298.935 15.0502 413.781L9.82698 416.603ZM89.893 565.433C172.674 654.828 298.511 692.463 416.766 663.224L414.077 658.245C298.613 686.363 175.954 649.666 94.9055 562.725L89.893 565.433ZM656.842 259.141C685.039 374.21 648.825 496.492 562.625 577.656L565.413 582.817C654.501 499.935 691.9 374.187 662.536 256.065L656.842 259.141ZM581.945 107.518C499.236 18.8371 373.997 -18.4724 256.228 10.5134L259.436 16.4515C373.888 -10.991 495.248 25.1518 576.04 110.708L581.945 107.518Z'
                        fill='#000'
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='xs:col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4'>
            <div className='group relative flex flex-col items-center justify-center rounded-[65%] border-4 border-gray-100 py-16 transition duration-300 hover:border-[#fe5617]'>
              <div className='absolute -left-2 -top-6 h-14 w-20 rotate-[-30deg] rounded-[65%] bg-gray-100 transition duration-300 group-hover:bg-[#fe5617]'></div>
              <div className='mt-5 w-full px-14 text-start'>
                <p className='text-md font-bold text-[#fe5617]'>Veterinary Assistant</p>
                <h3 className='cursor-pointer font-bold transition duration-300 hover:text-[#fe5617] xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>
                  Willimes Domson
                </h3>
                <div className='mt-4 flex'>
                  <div className='mr-2 h-11 w-11 cursor-pointer rounded-full bg-[#FEDA46] p-3 transition duration-300 hover:bg-[#fe5617]'>
                    <img src='src/assets/img/facebook-icon-svg-dark.svg' alt='logo-facebook' />
                  </div>
                  <div className='h-11 w-11 cursor-pointer rounded-full bg-[#FEDA46] p-3 transition duration-300 hover:bg-[#fe5617]'>
                    <img src='src/assets/img/twitter-icon-svg-dark.svg' alt='logo-facebook' />
                  </div>
                </div>
              </div>
              <div className='absolute right-0 top-0 translate-x-[-5%] translate-y-[-50%]'>
                <div className='relative h-auto w-full'>
                  <img src='src/assets/img/team-2.jpg' alt='anh' className='h-36 w-36 rounded-full' />
                  <div className='absolute left-0 top-0 translate-x-[-5%] translate-y-[-5%]'>
                    <svg width='160' height='160' viewBox='0 0 673 673' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M9.82698 416.603C-19.0352 298.701 18.5108 173.372 107.497 90.7633L110.607 96.5197C24.3117 177.199 -12.311 298.935 15.0502 413.781L9.82698 416.603ZM89.893 565.433C172.674 654.828 298.511 692.463 416.766 663.224L414.077 658.245C298.613 686.363 175.954 649.666 94.9055 562.725L89.893 565.433ZM656.842 259.141C685.039 374.21 648.825 496.492 562.625 577.656L565.413 582.817C654.501 499.935 691.9 374.187 662.536 256.065L656.842 259.141ZM581.945 107.518C499.236 18.8371 373.997 -18.4724 256.228 10.5134L259.436 16.4515C373.888 -10.991 495.248 25.1518 576.04 110.708L581.945 107.518Z'
                        fill='#000'
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='xs:col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4'>
            <div className='group relative flex flex-col items-center justify-center rounded-[65%] border-4 border-gray-100 py-16 transition duration-300 hover:border-[#fe5617]'>
              <div className='absolute -left-2 -top-6 h-14 w-20 rotate-[-30deg] rounded-[65%] bg-gray-100 transition duration-300 group-hover:bg-[#fe5617]'></div>
              <div className='mt-5 w-full px-14 text-start'>
                <p className='text-md font-bold text-[#fe5617]'>Veterinary Assistant</p>
                <h3 className='cursor-pointer font-bold transition duration-300 hover:text-[#fe5617] xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>
                  Thomas Walkar
                </h3>
                <div className='mt-4 flex'>
                  <div className='mr-2 h-11 w-11 cursor-pointer rounded-full bg-[#FEDA46] p-3 transition duration-300 hover:bg-[#fe5617]'>
                    <img src='src/assets/img/facebook-icon-svg-dark.svg' alt='logo-facebook' />
                  </div>
                  <div className='h-11 w-11 cursor-pointer rounded-full bg-[#FEDA46] p-3 transition duration-300 hover:bg-[#fe5617]'>
                    <img src='src/assets/img/twitter-icon-svg-dark.svg' alt='logo-facebook' />
                  </div>
                </div>
              </div>
              <div className='absolute right-0 top-0 translate-x-[-5%] translate-y-[-50%]'>
                <div className='relative h-auto w-full'>
                  <img src='src/assets/img/team-3.jpg' alt='anh' className='h-36 w-36 rounded-full' />
                  <div className='absolute left-0 top-0 translate-x-[-5%] translate-y-[-5%]'>
                    <svg width='160' height='160' viewBox='0 0 673 673' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M9.82698 416.603C-19.0352 298.701 18.5108 173.372 107.497 90.7633L110.607 96.5197C24.3117 177.199 -12.311 298.935 15.0502 413.781L9.82698 416.603ZM89.893 565.433C172.674 654.828 298.511 692.463 416.766 663.224L414.077 658.245C298.613 686.363 175.954 649.666 94.9055 562.725L89.893 565.433ZM656.842 259.141C685.039 374.21 648.825 496.492 562.625 577.656L565.413 582.817C654.501 499.935 691.9 374.187 662.536 256.065L656.842 259.141ZM581.945 107.518C499.236 18.8371 373.997 -18.4724 256.228 10.5134L259.436 16.4515C373.888 -10.991 495.248 25.1518 576.04 110.708L581.945 107.518Z'
                        fill='#000'
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className='h-full w-full bg-no-repeat xs:py-12 sm:py-12 md:py-14 lg:py-20 xl:py-32'
        style={{ backgroundImage: 'url("src/assets/img/client-b.jpg")' }}
      >
        <div className='container xs:w-[95%] sm:w-[85%] md:w-[80%] lg:w-[90%] xl:w-full'>
          <div className='grid grid-cols-12 items-start xs:gap-0 sm:gap-0 md:gap-0 lg:gap-10 xl:gap-12'>
            <div className='xs:col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-6'>
              <h5 className='py-2 font-semibold text-[#FA441D] xs:text-lg sm:text-lg md:text-lg lg:text-xl xl:text-xl'>
                LAUNDRY FAQ'S
              </h5>
              <h1 className='pb-8 xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl'>
                Pet Benefits of Membership
              </h1>
              <div className='w-full'>
                {accordionFaq.map((faq, index) => (
                  <Accordion
                    key={faq.id}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                    className='mt-4'
                    title={faq.title}
                  >
                    <p className='text-[#666666]'>{faq.content}</p>
                  </Accordion>
                ))}
              </div>
            </div>
            <div className='xs:hidden sm:hidden md:hidden lg:col-span-6 lg:block xl:col-span-6 xl:block'>
              <div className='relative grid h-full w-full grid-cols-2 items-center'>
                <div className='col-span-1'>
                  <img
                    src='src/assets/img/faq-1.jpg'
                    alt='anh'
                    className='mb-3 rounded-[50%] border-[10px] border-white xs:w-40 sm:w-48 md:w-52 lg:w-60 xl:w-60'
                  />
                  <img
                    src='src/assets/img/faq-3.jpg'
                    alt='anh'
                    className='mb-3 rounded-[50%] border-[10px] border-white xs:w-40 sm:w-48 md:w-52 lg:w-60 xl:w-60'
                  />
                  <img
                    src='src/assets/img/faq-5.jpg'
                    alt='anh'
                    className='mb-3 rounded-[50%] border-[10px] border-white xs:w-40 sm:w-48 md:w-52 lg:w-60 xl:w-60'
                  />
                </div>
                <div className='col-span-1'>
                  <img
                    src='src/assets/img/faq-2.jpg'
                    alt='anh'
                    className='mb-3 rounded-[50%] border-[10px] border-white xs:w-40 sm:w-48 md:w-52 lg:w-60 xl:w-60'
                  />
                  <img
                    src='src/assets/img/faq-4.jpg'
                    alt='anh'
                    className='mb-3 rounded-[50%] border-[10px] border-white xs:w-40 sm:w-48 md:w-52 lg:w-60 xl:w-60'
                  />
                </div>
                <img
                  src='src/assets/img/faq-shaps.png'
                  alt='anh'
                  className='absolute left-1/2 top-0 hidden translate-x-[-30%] translate-y-[-12%] xl:block'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container w-full bg-white pb-20 pt-12 text-center'>
        <img src='src/assets/img/heading-img.png' alt='anh' className='mx-auto' />
        <h5 className='py-2 font-semibold text-[#FA441D] xs:text-lg sm:text-lg md:text-lg lg:text-xl xl:text-xl'>
          BLOG AND NEWS
        </h5>
        <h1 className='xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl'>Recent Articles</h1>
        <div className='mx-auto mt-14 grid grid-cols-12 items-center gap-x-6 gap-y-10 xs:w-[98%] sm:w-[70%] md:w-[92%] lg:w-[92%] xl:w-full'>
          <div className='place-self-start xs:col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4'>
            <div className='relative overflow-hidden'>
              <img
                src='src/assets/img/blog-1.jpg'
                alt='anh'
                className='w-full shadow transition duration-300 hover:scale-110'
              />
              <span className='absolute left-3 top-3 cursor-pointer bg-[#FD441A] px-3 py-[1px] text-sm font-semibold text-white'>
                Animal Care
              </span>
            </div>
            <div className='mt-8 grid grid-cols-5 gap-14 text-start'>
              <div className='col-span-1'>
                <h2 className='font-bold text-[#fe5617] xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl'>
                  23
                </h2>
                <p className='text-[12px] font-bold'>May,2023</p>
              </div>
              <div className='col-span-4 border-l-[1px] border-gray-300 pl-4'>
                <h2 className='cursor-pointer text-[22px] font-bold transition duration-300 hover:text-[#fe5617]'>
                  The Best High Fiber Dog Food
                </h2>
                <p className='py-2 leading-7 text-[#444444]'>
                  Lorem ipsum dolor sit amet ur adipiscing elit, sed do eiuincididunut labore et.
                </p>
                <div className='mt-4 flex items-center'>
                  <img src='src/assets/img/man.jpg' alt='anh' className='rounded-full' />
                  <h3 className='text-md mx-3 font-bold'>Willimes Domson</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='place-self-start xs:col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4'>
            <div className='relative overflow-hidden'>
              <img
                src='src/assets/img/blog-2.jpg'
                alt='anh'
                className='w-full shadow transition duration-300 hover:scale-110'
              />
              <span className='absolute left-3 top-3 cursor-pointer bg-[#FD441A] px-3 py-[1px] text-sm font-semibold text-white'>
                Animal Care
              </span>
            </div>
            <div className='mt-8 grid grid-cols-5 gap-14 text-start'>
              <div className='col-span-1'>
                <h2 className='font-bold text-[#fe5617] xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl'>
                  23
                </h2>
                <p className='text-[12px] font-bold'>May,2023</p>
              </div>
              <div className='col-span-4 border-l-[1px] border-gray-300 pl-4'>
                <h2 className='cursor-pointer text-[22px] font-bold transition duration-300 hover:text-[#fe5617]'>
                  The Basic Necessities of Proper Pet Care
                </h2>
                <p className='py-2 leading-7 text-[#444444]'>
                  Lorem ipsum dolor sit amet ur adipiscing elit, sed do eiuincididunut labore et.
                </p>
                <div className='mt-4 flex items-center'>
                  <img src='src/assets/img/man.jpg' alt='anh' className='rounded-full' />
                  <h3 className='text-md mx-3 font-bold'>Willimes Domson</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='place-self-start xs:col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4'>
            <div className='relative overflow-hidden'>
              <img
                src='src/assets/img/blog-3.jpg'
                alt='anh'
                className='w-full shadow transition duration-300 hover:scale-110'
              />
              <span className='absolute left-3 top-3 cursor-pointer bg-[#FD441A] px-3 py-[1px] text-sm font-semibold text-white'>
                Animal Care
              </span>
            </div>
            <div className='mt-8 grid grid-cols-5 gap-14 text-start'>
              <div className='col-span-1'>
                <h2 className='font-bold text-[#fe5617] xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl'>
                  23
                </h2>
                <p className='text-[12px] font-bold'>May,2023</p>
              </div>
              <div className='col-span-4 border-l-[1px] border-gray-300 pl-4'>
                <h2 className='cursor-pointer text-[22px] font-bold transition duration-300 hover:text-[#fe5617]'>
                  Pets need care and attention
                </h2>
                <p className='py-2 leading-7 text-[#444444]'>
                  Lorem ipsum dolor sit amet ur adipiscing elit, sed do eiuincididunut labore et.
                </p>
                <div className='mt-4 flex items-center'>
                  <img src='src/assets/img/man.jpg' alt='anh' className='rounded-full' />
                  <h3 className='text-md mx-3 font-bold'>Willimes Domson</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-12 place-self-center'>
            <Link to={path.blog}>
              <button className='mt-8 cursor-pointer rounded-full bg-[#fe5617] px-8 py-4 text-lg font-bold text-white transition duration-500 hover:bg-[#940c69]'>
                View All News
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className='h-auto w-full bg-cover bg-no-repeat py-10'
        style={{ backgroundImage: 'url("src/assets/img/subscribe.jpg")' }}
      >
        <div className='container xs:w-full sm:w-[80%] md:w-[80%] lg:w-[92%] xl:w-full'>
          <div className='grid grid-cols-12 items-center gap-y-6 text-white'>
            <div className='xs:col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-6'>
              <div className='flex items-center'>
                <img src='src/assets/img/subscribe-icon.png' alt='anh' />
                <div className='mx-5'>
                  <h1 className='xs:text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl'>Subscribe Newsletter</h1>
                  <p className='lg:text-md md:text-md sm:text-md xs:text-md font-medium xl:text-lg'>
                    Get your paws on new offers every week!
                  </p>
                </div>
              </div>
            </div>
            <div className='xs:col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-6'>
              <form className='flex rounded-full bg-white text-black xs:p-1 sm:p-2 md:p-2 lg:p-2 xl:p-2'>
                <input
                  type='text'
                  className='sm:text-md w-full rounded-full py-4 outline-none xs:px-2 xs:text-sm sm:px-7 md:px-7 md:text-lg lg:px-7 lg:text-lg xl:px-7 xl:text-lg'
                  placeholder='Enter Your Email Address...'
                />
                <button
                  type='submit'
                  className='xl:text-md lg:text-md md:text-md sm:text-md cursor-pointer rounded-full border-2 border-[#FD441A] bg-[#fe5617] font-bold text-white transition duration-500 hover:bg-transparent hover:text-[#fe5617] xs:px-5 xs:py-0 xs:text-sm sm:px-9 sm:py-4 md:px-9 md:py-4 lg:px-9 lg:py-4 xl:px-9 xl:py-4'
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
