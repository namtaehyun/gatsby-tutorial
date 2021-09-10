import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layouts/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => {
        const { title, date } = node.frontmatter;

        console.log(node);

        return (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>
                {title}
              </Link>
            </h2>
            <p>Posted: {date}</p>
          </article>
        )
    })}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date
          title
        }
        id
        slug
      }
    }
  }
`

export default BlogPage;