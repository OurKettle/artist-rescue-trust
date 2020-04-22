import React from "react"

// Gatsby
import { StaticQuery, graphql } from "gatsby"

// Styles
import { StyledGrid } from "../styles/StyledGrid"

const Resources = () => {
  return (
    <StaticQuery
      query={resourcesQuery}
      render={data => {
        const resources = data.resources

        return (
          <StyledGrid className="main-content">
            <div className="box">
              <h1 className="heading">{resources.heading}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: resources.bodyNode.childMarkdownRemark.html,
                }}
              />
            </div>
          </StyledGrid>
        )
      }}
    />
  )
}

export const resourcesQuery = graphql`
  query {
    resources: datoCmsResource {
      heading
      bodyNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default Resources
