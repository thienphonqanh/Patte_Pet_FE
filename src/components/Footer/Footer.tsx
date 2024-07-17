export default function Footer() {
  return (
    <footer
      className='relative w-full bg-[#f5f5f5] bg-cover bg-right bg-no-repeat'
      style={{ backgroundImage: 'url("src/assets/img/footer-1.png")' }}
    >
      <div className='absolute inset-0 bg-white bg-opacity-50'></div>
      <div className='container relative'>
        <div className='mx-auto grid grid-cols-12 items-start pb-12 pt-20 xs:w-[95%] xs:gap-y-5 sm:w-[80%] sm:gap-y-5 md:w-[70%] md:gap-y-5 lg:w-[95%] lg:gap-10 xl:w-full xl:gap-10'>
          <div className='text-start xs:col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-4'>
            <img src='src/assets/img/logo.png' alt='anh' />
            <p className='py-8 leading-7 text-[#444444]'>
              At vero eos et accusam justo duo dolo res et ea rebum. Stet clita kasd guber gren. Aenean sollici tudin
              lorem qsben elit clita.
            </p>
            <div className='mt-4 flex'>
              <div className='mx-1 h-11 w-11 cursor-pointer rounded-full bg-[#FEDA46] p-3 transition duration-300 hover:bg-[#FD441A]'>
                <img src='src/assets/img/facebook-icon-svg-dark.svg' alt='logo-facebook' />
              </div>
              <div className='mx-1 h-11 w-11 cursor-pointer rounded-full bg-[#FEDA46] p-3 transition duration-300 hover:bg-[#FD441A]'>
                <img src='src/assets/img/twitter-icon-svg-dark.svg' alt='logo-facebook' />
              </div>
              <div className='mx-1 h-11 w-11 cursor-pointer rounded-full bg-[#FEDA46] p-3 transition duration-300 hover:bg-[#FD441A]'>
                <img src='src/assets/img/instagram-icon-svg-dark.svg' alt='logo-facebook' />
              </div>
            </div>
          </div>
          <div className='xs:col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-4'>
            <h2 className='text-2xl font-bold'>Top Categories</h2>
            <div className='h-1 w-16 bg-[#FD441A]'></div>
            <ul className='mt-10'>
              <li className='flex items-center py-3'>
                <img src='src/assets/img/chevron-right-svg-icon.svg' className='h-5 w-5' alt='anh' />
                <span className='mx-2 cursor-pointer font-semibold text-[#444444] transition duration-300 hover:text-[#fe5617]'>
                  Dog Grooming
                </span>
              </li>
              <li className='flex items-center py-3'>
                <img src='src/assets/img/chevron-right-svg-icon.svg' className='h-5 w-5' alt='anh' />
                <span className='mx-2 cursor-pointer font-semibold text-[#444444] transition duration-300 hover:text-[#fe5617]'>
                  Dog Leads & Collars
                </span>
              </li>
              <li className='flex items-center py-3'>
                <img src='src/assets/img/chevron-right-svg-icon.svg' className='h-5 w-5' alt='anh' />
                <span className='mx-2 cursor-pointer font-semibold text-[#444444] transition duration-300 hover:text-[#fe5617]'>
                  Dog Shampoos & Conditioners
                </span>
              </li>
              <li className='flex items-center py-3'>
                <img src='src/assets/img/chevron-right-svg-icon.svg' className='h-5 w-5' alt='anh' />
                <span className='mx-2 cursor-pointer font-semibold text-[#444444] transition duration-300 hover:text-[#fe5617]'>
                  Pure Paws
                </span>
              </li>
              <li className='flex items-center py-3'>
                <img src='src/assets/img/chevron-right-svg-icon.svg' className='h-5 w-5' alt='anh' />
                <span className='mx-2 cursor-pointer font-semibold text-[#444444] transition duration-300 hover:text-[#fe5617]'>
                  Clippersg
                </span>
              </li>
            </ul>
          </div>
          <div className='xs:col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-4'>
            <h2 className='text-2xl font-bold'>Get in Touch</h2>
            <div className='h-1 w-16 bg-[#FD441A]'></div>
            <ul className='mt-10'>
              <li className='flex items-center py-2'>
                <div className='rounded-full bg-[#FEDA46] p-3'>
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
                      d='M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3'
                    />
                  </svg>
                </div>
                <span className='mx-2 cursor-pointer font-semibold text-[#444444] transition duration-300 hover:text-[#fe5617]'>
                  +0235 999 0000
                </span>
              </li>
              <li className='flex items-center py-2'>
                <div className='rounded-full bg-[#FEDA46] p-3'>
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
                      d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
                    />
                  </svg>
                </div>
                <span className='mx-2 cursor-pointer font-semibold text-[#444444] transition duration-300 hover:text-[#fe5617]'>
                  support.patte@gmail.com
                </span>
              </li>
              <li className='flex items-center py-2'>
                <div className='rounded-full bg-[#FEDA46] p-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='h-5 w-5'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
                    />
                  </svg>
                </div>
                <span className='mx-2 cursor-pointer font-semibold text-[#444444] transition duration-300 hover:text-[#fe5617]'>
                  Eighth Avenue 487, New York
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='absolute z-50 w-full bg-[#feda46] py-6 text-lg font-bold'>
        <div className='container xs:text-center sm:text-center md:text-center lg:text-center xl:text-start'>
          Patte Pet Care - Copyright 2023. Design by Kein
        </div>
      </div>
    </footer>
  )
}
