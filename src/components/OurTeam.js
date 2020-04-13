import React from "react"

// Gatsby
import { StaticQuery, graphql } from "gatsby"

// Styles
import { StyledGrid } from "../styles/StyledGrid"

const OurTeam = () => {
  return (
    <StaticQuery
      query={ourTeamQuery}
      render={data => {
        const contentBlock1 = data.ourTeam.contentBlocks[0]
        const contentBlock2 = data.ourTeam.contentBlocks[1]
        const contentBlock3 = data.ourTeam.contentBlocks[2]

        return (
          <StyledGrid className="main-content">
            <div className="box a">
              <h1 className="heading">{contentBlock1.heading}</h1>
              <p className="intro small">{contentBlock1.callOut}</p>
              <hr></hr>
            </div>
            <div className="box b">
              <h1 className="heading">{contentBlock2.heading}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: contentBlock2.bodyNode.childMarkdownRemark.html,
                }}
              />
            </div>
            <div className="box c">
              <h1 className="heading">{contentBlock3.heading}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: contentBlock3.bodyNode.childMarkdownRemark.html,
                }}
              />
            </div>
          </StyledGrid>
        )
      }}
    />
  )
}

export const ourTeamQuery = graphql`
  query {
    ourTeam: datoCmsOurTeam {
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
        }
      }
    }
  }
`

export default OurTeam
