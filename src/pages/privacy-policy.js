import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PrivacyPolicy from "../components/PrivacyPolicy"

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const image = data.socialImage.fluid

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Privacy Policy" image={image} />
      <PrivacyPolicy></PrivacyPolicy>
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
