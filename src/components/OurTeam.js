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
        const team = data.ourTeam
        const teams = data.ourTeam.teamContentBlocks

        return (
          <StyledTeam>
            <StyledGrid className="main-content">
              <div className="box">
                <h1 className="heading">{team.heading}</h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: team.introNode.childMarkdownRemark.html,
                  }}
                />
                <hr></hr>
              </div>

              {teams.map(team => (
                <div className="box" key={team.id}>
                  <Img
                    className="team-logo"
                    fluid={team.logo.fluid}
                    duration={1000}
                    alt="Kettle Logo"
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: team.bodyNode.childMarkdownRemark.html,
                    }}
                  />
                </div>
              ))}
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
          logo {
            fluid(maxWidth: 400) {
              ...GatsbyDatoCmsFluid
            }
          }
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
