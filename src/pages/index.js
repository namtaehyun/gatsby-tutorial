import * as React from 'react'
import Layout from '../components/layouts/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="선비"
        src="../images/sunbi.jpg"
      />
    </Layout>
  )
}

export default IndexPage;