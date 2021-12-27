import React from 'react'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Header, Heading, Company } from '../components'

const Index = ({ data: { allSitePage: { nodes } } }) => {
  const pages = ['home', 'work', 'projects', 'skills']
  const data = Object.fromEntries(
    nodes
      .filter(({ path }) => pages.includes(path.substring(1)))
      .map(({ path, pageContext }) => [path.substring(1), pageContext])
  )

  console.log({ data })

  return (
    <main className="max-w-5xl m-auto px-6 font-raleway dark:bg-charcoal dark:text-platinum text-charcoal">
      <Header />
      <Heading sub='Web Developer'>Logan Saunders</Heading>
      {/* picture */}
      <h3 className='text-3xl font-oswald'>about me</h3>
      <div className='dark:bg-dodger w-12 h-2 rounded' />
      <p>{data.home['about-me']}</p>
      <Company logo={data.work[0].logo} superHeading='Work Experience' name={data.work[0].company} />
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
