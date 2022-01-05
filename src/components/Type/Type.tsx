const Body = ({ children }) => (
  <p className="py-3 tracking-wide">{children}</p>
)

const Caption = ({ children }) => (
  <span className="text-xs block">{children}</span>
)

const H1 = ({ children }) => (
  <h1 className="font-oswald text-6xl uppercase">{children}</h1>
)
const H2 = ({ children }) => (
  <h2 className="text-3xl text-carrot dark:text-dodger uppercase">{children}</h2>
)
const H3 = ({ children }) => (
  <h3 className="text-3xl font-oswald">{children}</h3>
)
const H4 = ({ children }) => (
  <h4 className="uppercase font-oswald text-xl">{children}</h4>
)

const Heading = ({ sub, children }) => (
  <>
    <H1>{children}</H1>
    <H2>{sub}</H2>
  </>
)

export {
  Body, Heading, Caption, H1, H2, H3, H4,
}
