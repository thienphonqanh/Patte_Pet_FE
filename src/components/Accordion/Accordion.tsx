interface AccordionProps {
  title: string
  children: React.ReactNode
  className?: string
  isOpen: boolean
  onToggle: () => void
}

export default function Accordion({ title, className, children, isOpen, onToggle }: AccordionProps) {
  return (
    <div className={className}>
      <button
        type='button'
        className={`${isOpen ? 'bg-[#FEDA46]' : 'bg-white'} md:text-md xs:text-md sm:text-md my-3 flex w-full items-center justify-between gap-3 rounded-full px-4 py-3 text-start font-bold shadow transition duration-300 focus-visible:outline-none md:text-lg lg:text-lg xl:text-[20px]`}
        onClick={onToggle}
      >
        <span className='flex items-center'>
          {!isOpen && (
            <div className='mr-4 rounded-full bg-[#FEDA46] transition duration-300'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-10 w-10 p-2'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
              </svg>
            </div>
          )}
          {isOpen && (
            <div className='mr-4 rounded-full bg-[#FA441D] transition duration-300'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-10 w-10 p-2'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M5 12h14' />
              </svg>
            </div>
          )}
          {title}
        </span>
        <svg
          data-accordion-icon
          className={`h-3 w-3 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 10 6'
        >
          <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5 5 1 1 5' />
        </svg>
      </button>
      <div className={`${isOpen ? 'block' : 'hidden'}`}>
        <div className='border-1 rounded-xl border border-gray-300 p-5 text-lg leading-7'>{children}</div>
      </div>
    </div>
  )
}
