import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const about = data.about

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <div>{about.jumbotron}</div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    about: datoCmsAbout {
      jumbotron
    }
  }
`

export default IndexPage
