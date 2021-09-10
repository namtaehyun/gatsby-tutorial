import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layouts/layout'

const BlogPost = ({ data }) => {
  const { frontmatter, body } = data.mdx;

  return (
    <Layout pageTitle={frontmatter.title}>
      <p>{frontmatter.date}</p>
      <MDXRenderer>
        {body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date
      }
      body
    }
  }
`

export default BlogPost