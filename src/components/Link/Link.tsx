import { Link as GatsbyLink } from 'gatsby'

const Link = ({
  children, to = '', className,
}) => {
  const classes = 'inline-block'.concat(' ', className)
  const props = {
    className: classes,
    to,
    href: to,
    children,
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
