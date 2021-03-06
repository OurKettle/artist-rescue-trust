import React from "react"

import { StaticQuery, graphql } from "gatsby"

import { StyledGrid } from "../styles/StyledGrid"

const PrivacyPolicy = () => {
  return (
    <StaticQuery
      query={privacyQuery}
      render={data => {
        const privacy = data.privacy.contentBlocks

        return (
          <StyledGrid className="main-content">
            {privacy.map(p => (
              <div className="box" key={p.id}>
                <h1 className="heading">{p.heading}</h1>
                {p.callOut ? <p className="intro">{p.callOut}</p> : ""}
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
