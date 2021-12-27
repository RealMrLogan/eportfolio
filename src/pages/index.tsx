import React from 'react'
import { graphql } from 'gatsby'
import { Header, Heading, Company, Body, Link } from '../components'

const Index = ({ data: query }) => {
  const content = query.allSitePage.nodes
  const images = query.allFile.edges.map(({ node: { childImageSharp: { gatsbyImageData } } }) => ({ name: gatsbyImageData.images.fallback.src, src: gatsbyImageData }))

  const pages = ['home', 'work', 'projects', 'skills']
  const data = Object.fromEntries(
    content
      .filter(({ path }) => pages.includes(path.substring(1)))
      .map(({ path, pageContext }) => [path.substring(1), pageContext])
  )

  console.log({ data, images, query })

  return (
    <main className="max-w-5xl m-auto px-6 font-raleway bg-platinum dark:bg-charcoal text-charcoal dark:text-platinum ">
      <Header />
      <Heading sub='Web Developer'>Logan Saunders</Heading>

      <div className='mt-7' />
      {/* picture */}
      <div className='mt-7' />

      <h3 className='text-3xl font-oswald'>about me</h3>
      <div className='bg-carrot dark:bg-dodger w-12 h-2 rounded' />
      <Body>{data.home['about-me']}</Body>

      <div className='mt-7' />

      <Company logo={images.filter(({ name }) => name.includes(data.work[0].logoImageName))[0]} superHeading='Work Experience' name={data.work[0].company} />
      <Body>{data.work[0].positions[0].description}</Body>
      <Link to='/work'>Read More</Link>
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
    allFile(
      filter: {sourceInstanceName: {eq: "images"}, extension: {regex: "/(jpg)/"}}
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(formats: [AUTO, WEBP], quality: 90)
          }
        }
      }
    }
  }
`
export default Index
export { query }
