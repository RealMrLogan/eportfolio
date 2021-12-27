const Heading = ({ sub, children }) => {
  return (
    <div className="uppercase">
      <h1 className="font-oswald text-6xl">{children}</h1>
      <h2 className="text-3xl text-carrot dark:text-dodger">{sub}</h2>
    </div>
  )
}

export { Heading }