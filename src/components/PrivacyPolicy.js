import React from "react"

import { StaticQuery, graphql } from "gatsby"

import { StyledGrid } from "../styles/StyledGrid"

const PrivacyPolicy = () => {
  return (
    <StaticQuery
      query={privacyQuery}
      render={data => {
        const privacy = data.privacy.contentBlocks
        const callOut = data.privacy.contentBlocks
        console.log(callOut.callOut)

        const hasCallout = () => {
          if (data.privacy.contentBlocks.callout) {
            return <p className="intro">{privacy.callOut}</p>
          }
        }

        return (
          <StyledGrid className="main-content">
            {privacy.map(p => (
              <div className="box" key={p.id}>
                <h1 className="heading">{p.heading}</h1>
                {hasCallout()}
                <div
                  dangerouslySetInnerHTML={{
                    __html: p.bodyNode.childMarkdownRemark.html,
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

export const privacyQuery = graphql`
  query {
    privacy: datoCmsPrivacy {
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

export default PrivacyPolicy
