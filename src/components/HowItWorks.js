import React from "react"

// Gatsby
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Styles
import { StyledHow } from "../styles/StyledHow"

const HowItWorks = () => {
  return (
    <StaticQuery
      query={homeQuery}
      render={data => {
        const h1 = data.howImages.images[0]
        const h2 = data.howImages.images[1]
        const h3 = data.howImages.images[2]
        const contentBlock1 = data.how.contentBlocks[0]
        const contentBlock2 = data.how.contentBlocks[1]

        return (
          <StyledHow className="main-content">
            <div className="box a">
              <Img className="image" fluid={h1.image} duration={1000} />
            </div>
            <div className="box b">
              <Img fluid={h3.image} duration={1000} />
            </div>
            <div className="box c"></div>
            <div className="box d"></div>
            <div className="box e">
              <h1 className="heading">{contentBlock1.heading}</h1>
              <p className="intro small">{contentBlock1.callOut}</p>
              <div
                dangerouslySetInnerHTML={{
                  __html: contentBlock1.bodyNode.childMarkdownRemark.html,
                }}
              />
            </div>
            <div className="box f">
              <p className="intro small">{contentBlock2.callOut}</p>
              <div
                dangerouslySetInnerHTML={{
                  __html: contentBlock2.bodyNode.childMarkdownRemark.html,
                }}
              />
              <p className="footer">
                <div
                  dangerouslySetInnerHTML={{
                    __html: contentBlock2.footerNode.childMarkdownRemark.html,
                  }}
                />
              </p>
            </div>
            <div className="box g"></div>
            <div className="box h"></div>
            <div className="box i">
              <Img fluid={h2.image} duration={1000} />
            </div>
          </StyledHow>
        )
      }}
    />
  )
}

export const homeQuery = graphql`
  query {
    how: datoCmsHow {
      contentBlocks {
        ... on DatoCmsContentBlock {
          id
          heading
          callOut
          bodyNode {
            childMarkdownRemark {
              html
            }
          }
          footerNode {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }

    howImages: datoCmsHow {
      images {
        image: fluid(maxWidth: 400) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`

export default HowItWorks
