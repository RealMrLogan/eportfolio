import React from 'react'
import { graphql } from 'gatsby'
import {
  Heading, Company, Body, Link, Project, Skills, Portrait, H3, ArrowRight, Button,
} from '../components'

const Index = ({ data: query }) => {
  const content = query.allSitePage.nodes
  const images = query.allFile.edges.map(
    ({ node: { childImageSharp: { gatsbyImageData } } }) => ({ name: gatsbyImageData.images.fallback.src, src: gatsbyImageData }),
  )

  const pages = ['home', 'work', 'projects', 'skills']
  const data = Object.fromEntries(
    content
      .filter(({ path }) => pages.includes(path.substring(1)))
      .map(({ path, pageContext }) => [path.substring(1), pageContext]),
  )

  return (
    <>
      <Heading sub="Web Developer">Logan Saunders</Heading>

      <div className="mt-10" />
      <Portrait img={images.filter(({ name }) => name.includes('portrait'))[0]} />
      <div className="mt-14" />

      <H3>about me</H3>
      <div className="bg-carrot dark:bg-dodger w-12 h-1.5 rounded-full" />
      <Body>{data.home['about-me']}</Body>

      <div className="mt-14" />

      <Company logo={images.filter(({ name }) => name.includes(data.work[0].logoImageName))[0]} superHeading="Work Experience" name={data.work[0].company} />
      <Body>{data.work[0].positions[0].description}</Body>
      <Button to="/work" RightIcon={ArrowRight}>Read More</Button>

      <div className="mt-14" />

      <Project img={images.filter(({ name }) => name.includes(data.projects[0].screenshots[0]))[0]} superHeading="Personal Project" name={data.projects[0].name} />
      <Body>{data.projects[0].description}</Body>
      <Button to="/projects" RightIcon={ArrowRight}>Read More</Button>

      <div className="mt-14" />

      <Skills logos={images.filter(({ name }) => data.skills.some(({ logo }) => name.includes(logo)))} superHeading="Tools and" name="Skills" />
      <Button to="/skills" RightIcon={ArrowRight}>Read More</Button>
    </>
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
