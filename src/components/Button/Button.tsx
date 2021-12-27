import { Link as GatsbyLink } from 'gatsby'

const Button = ({ children, emphasis = 'medium', onClick = null }) => {
  const emphasisStyles = {
    medium: 'border-carrot dark:border-dodger border-2'
  }

  return (
    <button className={'rounded-lg py-1 px-2 w-fit'.concat(' ', emphasisStyles[emphasis])} onClick={onClick}>{children}</button>
  )
}

export { Button }
