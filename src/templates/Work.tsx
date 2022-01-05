import { graphql } from 'gatsby'
import { Children } from 'react'
import {
  Heading, Company, Body, Caption, H4, Callout, Button,
} from '../components'

const Dot = () => (
  <div className="rounded-full w-6 h-6 bg-carrot dark:bg-dodger" />
)

const Line = () => (
  <div className="bg-carrot dark:bg-dodger w-1 h-full mt-2 m-auto" />
)

const Timeline = ({ children }) => (
  <div className="grid grid-cols-[auto_auto] gap-2">
    {Children.map(children, (Child, index) => (
      <>
        <div className="overflow-hidden px-4">
          <Dot />
          {index !== children.length - 1 && <Line />}
        </div>
        <div>
          {Child}
        </div>
      </>
    ))}
  </div>
)

const getTimeAtCompany = (d1: Date, d2: Date): string => {
  const monthsAtCompany = ((d2.getFullYear() - d1.getFullYear()) * 12)
    - d1.getMonth() + d2.getMonth()
  const years = Math.floor(monthsAtCompany / 12)
  const months = monthsAtCompany % 12
  return `${years} year${years > 1 ? 's' : ''}, ${months} month${months > 1 ? 's' : ''}`
}

const Work = ({ data: query }) => {
  const [{ node: { pageContext } }] = query.allSitePage.edges
  const images = query.allFile.edges.map(
    ({ node: { childImageSharp: { gatsbyImageData } } }) => ({ name: gatsbyImageData.images.fallback.src, src: gatsbyImageData }),
  )

  return (
    <>
      <Heading sub="Since 2018">Work Experience</Heading>

      <div className="mb-8" />

      {Children.toArray(
        pageContext.map(({ company, logoImageName, positions }, index) => {
          const firstDate = new Date(parseInt(positions.at(-1)['employment-begin'], 10))
          const lastDate = new Date(parseInt(positions[0]['employment-end'], 10) || Date.now())

          const timeAtCompany = getTimeAtCompany(firstDate, lastDate)

          return (
            <>
              <Company
                logo={images.filter(({ name }) => name.includes(logoImageName))[0]}
                superHeading={timeAtCompany}
                name={company}
              />

              <div className="mb-4" />

              <Timeline>
                {Children.toArray(
                  positions.map(({
                    position, description, 'employment-begin': begin, 'employment-end': end,
                  }) => {
                    const beginDate = new Date(parseInt(begin, 10))
                    const endDate = new Date(parseInt(end, 10))
                    const shortMonthName = new Intl.DateTimeFormat('en-US', { month: 'short' }).format

                    const beginning = `${shortMonthName(beginDate)} ${beginDate.getFullYear()}`
                    const ending = endDate.toString() === 'Invalid Date' ? 'Present' : `${shortMonthName(endDate)} ${endDate.getFullYear()}`
                    return (
                      <>
                        <H4>{position}</H4>
                        <Caption>{`${beginning} to ${ending}`}</Caption>
                        <Body>{description}</Body>
                      </>
                    )
                  }),
                )}
              </Timeline>

              {index === 0 && (
                <Callout>
                  <Body>
                    All this is also on my
                    {' '}
                    <Button emphasis="inline" to="https://www.linkedin.com/in/logan-saunders-441bb2177">LinkedIn</Button>
                    !
                  </Body>
                </Callout>
              )}
            </>
          )
        }),
      )}
    </>
  )
}

const query = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          pageContext
        }
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
export default Work
export { query }
