import { graphql, Link, PageProps } from 'gatsby'

const Template = ({ data }) => {
  console.log({ data })
  return (
    <div>Template
      <pre>{JSON.stringify(data, null, 2)}</pre>
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
