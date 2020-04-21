import React from "react"

// Gatsby
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// Styles
import { StyledGrid } from "../styles/StyledGrid"
import { StyledTeam } from "../styles/StyledTeam"

const OurTeam = () => {
  return (
    <StaticQuery
      query={ourTeamQuery}
      render={data => {
        // const kettleLogo = data.kettleLogo
        // const ocupopLogo = data.ocupopLogo
        // const yolLogo = data.yolLogo

        const team = data.ourTeam
        // const contentBlock1 = data.ourTeam.contentBlocks[0]
        // const contentBlock2 = data.ourTeam.contentBlocks[1]
        // const contentBlock3 = data.ourTeam.contentBlocks[2]
        // const contentBlock4 = data.ourTeam.contentBlocks[3]

        return (
          <StyledTeam>
            <StyledGrid className="main-content">
              <div className="box a">
                <h1 className="heading">{team.heading}</h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: team.introNode.childMarkdownRemark.html,
                  }}
                />
                <hr></hr>
              </div>
              {/* <div className="box b">
                <Img
                  className="team-logo"
                  fluid={kettleLogo.fluid}
                  duration={1000}
                  alt="Kettle Logo"
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: contentBlock2.bodyNode.childMarkdownRemark.html,
                  }}
                />
              </div>
              <div className="box c">
                <Img
                  className="team-logo"
                  fluid={ocupopLogo.fluid}
                  duration={1000}
                  alt="Ocupop Logo"
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: contentBlock3.bodyNode.childMarkdownRemark.html,
                  }}
                />
              </div>
              <div className="box d">
                <Img
                  className="team-logo"
                  fluid={yolLogo.fluid}
                  duration={1000}
                  alt="Yol Logo"
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: contentBlock4.bodyNode.childMarkdownRemark.html,
                  }}
                />
              </div> */}
            </StyledGrid>
          </StyledTeam>
        )
      }}
    />
  )
}

export const ourTeamQuery = graphql`
  query {
    ourTeam: datoCmsOurTeam {
      heading
      introNode {
        childMarkdownRemark {
          html
        }
      }
      teamContentBlocks {
        ... on DatoCmsTeamContentBlock {
          id
          # logo
          bodyNode {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    # kettleLogo: datoCmsAsset(filename: { eq: "kettle-logo.png" }) {
    #   fluid(maxWidth: 400, maxHeight: 181) {
    #     ...GatsbyDatoCmsFluid
    #   }
    # }
    # ocupopLogo: datoCmsAsset(filename: { eq: "ocupop-logo.png" }) {
    #   fluid(maxWidth: 400, maxHeight: 181) {
    #     ...GatsbyDatoCmsFluid
    #   }
    # }
    # yolLogo: datoCmsAsset(filename: { eq: "yol-logo.png" }) {
    #   fluid(maxWidth: 400, maxHeight: 181) {
    #     ...GatsbyDatoCmsFluid
    #   }
    # }
  }
`

export default OurTeam
