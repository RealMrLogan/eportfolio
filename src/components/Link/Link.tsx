import { Link as GatsbyLink } from 'gatsby'

const Link = ({ children, emphasis = 'medium', to = '' }) => {
  const emphasisStyles = {
    medium: 'border-carrot dark:border-dodger border-2'
  }
  const className = 'rounded-lg py-1 px-2'.concat(' ', emphasisStyles[emphasis])
  const props = {
    className,
    to,
    href: to,
    children
  }

  const isRelativeLink = !to.includes('https')

  // TODO: add icon to left or right
  return isRelativeLink ? (
    <GatsbyLink {...props} />
  ) : (
    <a {...props} />
  )
}

export { Link }
