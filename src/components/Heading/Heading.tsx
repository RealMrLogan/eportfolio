const Heading = ({ lower, children }) => {
  return (
    <div className="uppercase">
      <h1 className="font-oswald text-6xl">{children}</h1>
      <h2 className="font-raleway text-3xl dark:text-dodger">{lower}</h2>
    </div>
  )
}

export { Heading }