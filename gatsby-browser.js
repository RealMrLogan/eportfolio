import 'fontsource-oswald/latin.css'
import 'fontsource-raleway/latin.css'
import './src/styles/global.css'
import { Header } from './src/components'

const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <Header />
      {element}
    </>
  )
}

export { wrapPageElement }