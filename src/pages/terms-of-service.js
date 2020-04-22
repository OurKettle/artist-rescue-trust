import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TOS from "../components/TermsOfService"

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const image = data.socialImage.fluid

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Terms of Service" image={image} />
      <TOS></TOS>
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
    socialImage: datoCmsAsset(filename: { eq: "social-card.jpg" }) {
      fluid {
        ...GatsbyDatoCmsFluid
      }
    }
  }
`

export default IndexPage
