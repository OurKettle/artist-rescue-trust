import React from "react"

// Gatsby
import { StaticQuery, graphql } from "gatsby"

// Styles
import { StyledTeam } from "../styles/StyledTeam"

const OurTeam = () => {
  return (
    <StaticQuery
      query={ourTeamQuery}
      render={data => {
        const contentBlock1 = data.how.contentBlocks[0]
        const contentBlock2 = data.how.contentBlocks[1]
        const contentBlock3 = data.how.contentBlocks[2]

        return (
          <StyledTeam className="main-content">
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
          </StyledTeam>
        )
      }}
    />
  )
}

export const ourTeamQuery = graphql`
  query {
    how: datoCmsOurTeam {
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
