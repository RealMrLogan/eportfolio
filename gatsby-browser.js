import 'fontsource-oswald/latin.css'
import 'fontsource-raleway/latin.css'
import './src/styles/global.css'
import { Header } from './src/components'

const wrapPageElement = ({ element, props }) => (
  <>
    <Header />
    <main className="max-w-5xl m-auto p-6 font-raleway bg-platinum dark:bg-charcoal text-charcoal dark:text-platinum">
      {element}
    </main>
  </>
)

export { wrapPageElement }
