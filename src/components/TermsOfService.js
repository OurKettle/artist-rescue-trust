import React from "react"

import { StaticQuery, graphql } from "gatsby"

import { StyledGrid } from "../styles/StyledGrid"

const TermsOfService = () => {
  return (
    <StaticQuery
      query={termsOfServiceQuery}
      render={data => {
        const tos = data.tos.contentBlocks
        const callOut = data.tos.contentBlocks

        const hasCallout = () => {
          if (data.tos.contentBlocks.callout) {
            return <p className="intro">{tos.callOut}</p>
          }
        }

        return (
          <StyledGrid className="main-content">
            {tos.map(terms => (
              <div className="box" key={terms.id}>
                <h1 className="heading">{terms.heading}</h1>
                {hasCallout()}
                <div
                  dangerouslySetInnerHTML={{
                    __html: terms.bodyNode.childMarkdownRemark.html,
                  }}
                />
              </div>
            ))}
          </StyledGrid>
        )
      }}
    />
  )
}

export const termsOfServiceQuery = graphql`
  query {
    tos: datoCmsTermsOfService {
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

export default TermsOfService
