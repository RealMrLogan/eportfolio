import React from 'react'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Header, Heading } from '../components'

const Index = ({ data: { allSitePage: { nodes } } }) => {
  const pages = ['home', 'work', 'projects', 'skills']
  const data = Object.fromEntries(
    nodes
      .filter(({ path }) => pages.includes(path.substring(1)))
      .map(({ path, pageContext }) => [path.substring(1), pageContext])
  )
  return (
    <main className="max-w-5xl m-auto px-6 font-sans dark:bg-charcoal dark:text-platinum text-charcoal">
      <Header />
      <Heading lower='Web Developer'>Logan Saunders</Heading>
      {/* picture */}
      <h3 className='text-2xl'>about me</h3>
      <div className='dark:bg-dodger w-12 h-2 rounded' />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  )
}

const query = graphql`
  query {
    allSitePage {
      nodes {
        pageContext
        path
      }
    }
  }
`
export default Index
export { query }
