import { Link } from 'gatsby'
import logo from '../../images/logo.svg'

export const Header = () => {
  const onClick = () => {
    document.documentElement.classList.toggle('dark')
  }
  return (
    <header className="flex py-6 gap-8 font-oswald">
      {/* <Link to='/'>Home</Link>
      <Link to='/'>Work Experience</Link>
      <Link to='/'>Projects</Link>
      <Link to='/'>Skills</Link>
      <Link to='/'>Contact</Link> */}
      <button onClick={onClick}>Toggle Dark Mode</button>
    </header>
  )
}
