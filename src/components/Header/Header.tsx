import { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import logo from '../../images/logo.svg'
import { Button } from '../index'

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(true)
  const breakpoint = 768
  useEffect(() => {
    if (window.screen.availWidth <= breakpoint) setIsMobile(true)
    else setIsMobile(false)
  }, [])

  return isMobile
}

const NavButton = ({ onClick }) => {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-carrot dark:fill-dodger fixed top-4 right-4' onClick={onClick}>
      <path fillRule="evenodd" clipRule="evenodd" fillOpacity="0.5" d="M35 0C43.2843 0 50 6.71573 50 15V35C50 43.2843 43.2843 50 35 50H15C6.71573 50 0 43.2843 0 35V15C0 6.71573 6.71573 0 15 0H35ZM13 15.5C13 14.6716 13.6716 14 14.5 14H36.5C37.3284 14 38 14.6716 38 15.5C38 16.3284 37.3284 17 36.5 17H14.5C13.6716 17 13 16.3284 13 15.5ZM14.5 22C13.6716 22 13 22.6716 13 23.5C13 24.3284 13.6716 25 14.5 25H36.5C37.3284 25 38 24.3284 38 23.5C38 22.6716 37.3284 22 36.5 22H14.5ZM13 31.5C13 30.6716 13.6716 30 14.5 30H36.5C37.3284 30 38 30.6716 38 31.5C38 32.3284 37.3284 33 36.5 33H14.5C13.6716 33 13 32.3284 13 31.5Z" />
    </svg>
  )
}

const SideNav = ({ isOpen, setIsOpen }) => {
  const linkClasses = 'uppercase py-4 px-6 text-3xl tracking-wide'
  const activeClasses = 'bg-platinum dark:bg-charcoal text-carrot dark:text-dodger'
  const closeNav = () => setIsOpen(false)

  return (
    <div className={`w-full h-screen grid grid-cols-[1fr_3fr] fixed transition-all z-10 ${isOpen ? 'left-0 right-auto' : 'right-full left-auto'}`
    }>
      <button className='w-full h-full bg-platinum dark:bg-charcoal' onClick={closeNav} />
      <header className='flex flex-col font-oswald bg-charcoal dark:bg-platinum text-platinum dark:text-charcoal pt-6'>
        <Link className={linkClasses} activeClassName={activeClasses} onClick={closeNav} to='/'>Home</Link>
        <Link className={linkClasses} activeClassName={activeClasses} onClick={closeNav} to='/work'>Work Experience</Link>
        <Link className={linkClasses} activeClassName={activeClasses} onClick={closeNav} to='/projects'>Projects</Link>
        <Link className={linkClasses} activeClassName={activeClasses} onClick={closeNav} to='/skills'>Skills</Link>
        <Link className={linkClasses} activeClassName={activeClasses} onClick={closeNav} to='/contact'>Contact</Link>
        <div className='py-4 px-6'>
          <Button onClick={() => document.documentElement.classList.toggle('dark')}>Toggle Theme</Button>
        </div>
      </header>
    </div>
  )
}

export const Header = () => {
  const isMobile = useIsMobile()
  const [isOpen, setIsOpen] = useState(false)

  return (
    isMobile ? (
      <>
        <NavButton onClick={() => setIsOpen(true)} />
        <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
      </>
    ) : (
      <header className="flex py-6 gap-8 font-oswald">
        {/* <Link to='/'>Home</Link>
      <Link to='/'>Work Experience</Link>
      <Link to='/'>Projects</Link>
      <Link to='/'>Skills</Link>
      <Link to='/'>Contact</Link> */}
      </header>
    )
  )
}
