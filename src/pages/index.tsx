import React from 'react'
import { graphql } from 'gatsby'
import {
  Heading, Company, Body, Link, Project, Skills, Portrait
} from '../components'

const Index = ({ data: query }) => {
  console.log({ query })
  const content = query.allSitePage.nodes
  const images = query.allFile.edges.map(
    ({ node: { childImageSharp: { gatsbyImageData } } }) =>
      ({ name: gatsbyImageData.images.fallback.src, src: gatsbyImageData })
  )

  const pages = ['home', 'work', 'projects', 'skills']
  const data = Object.fromEntries(
    content
      .filter(({ path }) => pages.includes(path.substring(1)))
      .map(({ path, pageContext }) => [path.substring(1), pageContext]),
  )

  console.log({ data, images, query })

  return (
    <main className="max-w-5xl m-auto p-6 font-raleway bg-platinum dark:bg-charcoal text-charcoal dark:text-platinum">
      <Heading sub="Web Developer">Logan Saunders</Heading>

      <div className="mt-10" />
      <Portrait img={images.filter(({ name }) => name.includes('portrait'))[0]} />
      <div className="mt-14" />

      <h3 className="text-3xl font-oswald">about me</h3>
      <div className="bg-carrot dark:bg-dodger w-12 h-1.5 rounded-full" />
      <Body>{data.home['about-me']}</Body>

      <div className="mt-14" />

      <Company logo={images.filter(({ name }) => name.includes(data.work[0].logoImageName))[0]} superHeading="Work Experience" name={data.work[0].company} />
      <Body>{data.work[0].positions[0].description}</Body>
      <Link to="/work">Read More</Link>

      <div className="mt-14" />

      <Project img={images.filter(({ name }) => name.includes(data.projects[0].screenshots[0]))[0]} superHeading="Personal Project" name={data.projects[0].name} />
      <Body>{data.projects[0].description}</Body>
      <Link to="/projects">Read More</Link>

      <div className="mt-14" />

      <Skills logos={images.filter(({ name }) => data.skills.some(({ logo }) => name.includes(logo)))} superHeading="Tools and" name="Skills" />
      <Link to="/skills">Read More</Link>
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
      filter: {sourceInstanceName: {eq: "images"}, extension: {regex: "/(jpg)|(png)/"}}
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
