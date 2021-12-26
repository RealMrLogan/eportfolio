import { graphql, Link, PageProps } from 'gatsby'

const Template = ({ data: { allSitePage: { edges: { 0: { node: { pageContext } } } } } }) => {
  return (
    <div>Projects:
      <pre>{JSON.stringify(pageContext, null, 2)}</pre>
    </div>
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
  }
`
export default Template
export { query }
