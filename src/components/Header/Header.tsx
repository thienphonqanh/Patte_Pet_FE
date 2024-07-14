import { useState } from 'react'
import { Link } from 'react-router-dom'
import path from 'src/constants/path'
import useMatchRoute from 'src/hooks/useMatchRoute'
import Popover from '../Popover'

const navigation = [
  { id: 1, name: 'Trang chủ', href: path.home },
  { id: 2, name: 'Giới thiệu', href: path.about },
  { id: 3, name: 'Dịch vụ', href: path.service, children: ['Danh sách dịch vụ'] },
  { id: 4, name: 'Cửa hàng', href: path.shop },
  { id: 5, name: 'Blog', href: path.blog },
  { id: 6, name: 'Liên hệ', href: path.contact }
]

const HeaderTop = () => {
  return (
    <div className='container py-2 hidden xl:block'>
      <div className='grid grid-cols-12 text-dark'>
        <div className='col-span-2 flex flex-row justify-center items-center'>
          <div className='text-[#fe5716]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5'
              role='img'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
              />
            </svg>
          </div>
          <span className='ml-2 hover:text-[#fe5716] transition duration-300 cursor-pointer'>
            support.patte@gmail.com
          </span>
        </div>
        <div className='col-span-2 flex flex-row justify-center items-center'>
          <div className='text-[#fe5716]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5'
              role='img'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3'
              />
            </svg>
          </div>
          <span className='ml-2 hover:text-[#fe5716] transition duration-300 cursor-pointer'>+0235 999 0000</span>
        </div>
        <div className='col-span-8 place-self-end  flex flex-row justify-center items-center'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='w-5 h-5'
              role='img'
              aria-hidden='true'
            >
              <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z' />
            </svg>
          </div>
          <Link to={path.login}>
            <span className='ml-2 hover:text-[#fe5716] transition duration-300 cursor-pointer'>
              Đăng nhập / Đăng ký
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

const NavBar = () => {
  /**
   * @description: Xử lý event cho menu nav-drawer
   */
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <nav className='container xl:px-4 lg:px-4 md:px-6 sm:px-6 xs:px-12 py-3 bg-white' aria-label='Main Navigation'>
      <div className='grid grid-cols-12 items-center'>
        <div className='col-span-2 place-self-center'>
          <Link to={path.home} className='outline-none' aria-label='Home Page'>
            <div className='xl:w-44 lg:w-40 md:w-36 sm:w-36 xs:w-32'>
              <img src='src/assets/img/logo.png' className='w-full h-full' alt='logo' />
            </div>
          </Link>
        </div>
        <div className='col-span-8 px-16 h-full'>
          <ul className='hidden xl:flex justify-around font-semibold h-full'>
            {navigation.map((item) => {
              if (item.children) {
                return (
                  <Popover
                    as={'li'}
                    key={item.id}
                    className={`${useMatchRoute(item.href) ? 'navbar-active' : ''} flex items-center focus-visible:outline-none transition duration-300 hover:cursor-pointer hover:text-[#fe5617]`}
                    renderPopover={
                      <div className='max-w-[200px] rounded-sm border border-gray-200 bg-white text-sm shadow-lg'>
                        <ul className='p-3'>
                          {item.children.map((child) => (
                            <li key={child} className='py-2 hover:text-[#fe5617] transition duration-300'>
                              <Link to={path.service} className='outline-none'>
                                {child}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    }
                  >
                    <Link to={item.href} className='outline-none'>
                      {item.name}
                    </Link>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-4 h-4 ml-1'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                    </svg>
                  </Popover>
                )
              }
              return (
                <li
                  key={item.id}
                  className={`${useMatchRoute(item.href) ? 'navbar-active' : ''} flex items-center transition duration-300 hover:cursor-pointer hover:text-[#fe5617]`}
                  aria-current={useMatchRoute(item.href) ? 'page' : undefined}
                >
                  <Link to={item.href} className='outline-none'>
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='col-span-2 flex justify-center items-center'>
          <div className='mx-2 xl:hidden block' onClick={toggleMenu}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-8 h-8'
              role='img'
              aria-hidden='true'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
            </svg>
          </div>
          <div className='hidden xl:flex justify-center items-center'>
            <div className='mx-2 cursor-pointer hover:text-[#fe5716] transition duration-300'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
                role='img'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                />
              </svg>
            </div>
            <div className='border-r-2 border-r-black h-4'></div>
            <div className='mx-2 cursor-pointer hover:text-[#fe5716] transition duration-300'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
                role='img'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
                />
              </svg>
            </div>
          </div>
          <div className='relative ml-2 bg-[#fe5716] border-2 border-[#fe5716] p-3 text-white rounded-full hover:bg-white hover:cursor-pointer hover:text-black transition duration-300'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
              role='img'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
              />
            </svg>
            <div className='absolute flex justify-center text-white bg-black text-sm w-5 h-5 rounded-full top-0 right-0'>
              1
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className='fixed inset-0 bg-transparent bg-opacity-50 z-40'>
          <div className='fixed top-0 left-0 lg:w-[35vw] md:w-[45vw] sm:w-[55vw] xs:w-full h-full bg-[#940c69] shadow-lg z-50'>
            <div className='p-4 flex justify-end'>
              <button onClick={toggleMenu} className='text-white'>
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
                    d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                  />
                </svg>
              </button>
            </div>
            <ul className='flex flex-col text-white lg:text-2xl md:text-xl sm:text-xl xs:text-lg'>
              <Link to={path.home} className='outline-none px-8 py-4' aria-label='Home Page'>
                <img src='src/assets/img/logo-w.png' className='w-44 h-auto' alt='logo' />
              </Link>
              {navigation.map((item) => (
                <li key={item.name} className='px-8 py-4'>
                  <Link to={item.href} onClick={toggleMenu} className='outline-none'>
                    {item.name}
                  </Link>
                </li>
              ))}
              <div className='flex px-6 py-8'>
                <div className='w-14 h-14 bg-[#fe5617] p-3 rounded-full mx-2'>
                  <img src='src/assets/img/facebook-icon-svg.svg' alt='logo-facebook' />
                </div>
                <div className='w-14 h-14 bg-[#fe5617] p-3 rounded-full mx-2'>
                  <img src='src/assets/img/twitter-icon-svg.svg' alt='logo-facebook' />
                </div>
                <div className='w-14 h-14 bg-[#fe5617] p-3 rounded-full mx-2'>
                  <img src='src/assets/img/instagram-icon-svg.svg' alt='logo-facebook' />
                </div>
              </div>
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}

export default function Header() {
  return (
    <header className='fixed top-0 left-0 w-full h-auto z-50'>
      <HeaderTop />
      <NavBar />
    </header>
  )
}
