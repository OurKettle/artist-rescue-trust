import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grantees from "../components/Grantees"

const IndexPage = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title
  const image = data.socialImage.fluid
  const grantees = data.grantees

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Our Grantees - Artist Rescue Trust" image={image} />
      <Grantees
        grantees={grantees}
        location={location}
        pageContext={pageContext}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String) {
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
    grantees: datoCmsGrantee(slug: { eq: $slug }) {
      id
      image {
        fluid(maxWidth: 300) {
          ...GatsbyDatoCmsFluid
        }
      }
      name
      title
      bio
      mainUrl
      questions {
        ... on DatoCmsQuestion {
          question
          answerNode {
            childMarkdownRemark {
              html
            }
          }
        }
      }
      links {
        ... on DatoCmsLink {
          id
          name
          url
          icon {
            path
          }
        }
      }
    }
  }
`

export default IndexPage
