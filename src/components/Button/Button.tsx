import { Link } from '../Link'

const Button = ({
  children, emphasis = 'medium', onClick = null, RightIcon = null, className = '', ...props
}) => {
  const emphasisStyles = {
    medium: 'border-carrot dark:border-dodger border-2 rounded-lg py-1 px-2 mt-1',
    inline: 'text-carrot dark:text-dodger',
  }

  const Children = (
    <div className="flex gap-1 font-medium">
      {children}
      {RightIcon && <RightIcon />}
    </div>
  )

  const classes = ''.concat(emphasisStyles[emphasis], ' ', className)

  return props.to ? (
    <Link className={classes} {...props}>
      {Children}
    </Link>
  ) : (
    <button type="button" className={classes} onClick={onClick}>
      {Children}
    </button>
  )
}

export { Button }
