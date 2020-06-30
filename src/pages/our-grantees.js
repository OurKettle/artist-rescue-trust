import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import OurGrantees from "../components/OurGrantees"

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const image = data.socialImage.fluid

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Our Grantees - Artist Rescue Trust" image={image} />
        <OurGrantees />
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
