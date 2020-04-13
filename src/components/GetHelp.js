import React from "react"

// Gatsby
import { StaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"

// Styles
import { StyledGetHelp } from "../styles/StyledGetHelp"

const GetHelp = () => {
  return (
    <StaticQuery
      query={getHelpQuery}
      render={data => {
        const contentBlock1 = data.getHelp.contentBlocks[0]
        const contentBlock2 = data.getHelp.contentBlocks[1]

        return (
          <StyledGetHelp className="main-content">
            <HelmetDatoCms>
              <script src="https://services.cognitoforms.com/scripts/embed.js"></script>
            </HelmetDatoCms>
            <div className="box a">
              <h1 className="heading">{contentBlock1.heading}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: contentBlock1.bodyNode.childMarkdownRemark.html,
                }}
              />
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
              <iframe
                src="https://services.cognitoforms.com/f/bbN8iw1MJUqjPe6aHn-_rw?id=71"
                title="Get Help Application"
                frameBorder="0"
                scrolling="yes"
                seamless="seamless"
                height="2618"
                width="100%"
              ></iframe>
            </div>
          </StyledGetHelp>
        )
      }}
    />
  )
}

export const getHelpQuery = graphql`
  query {
    getHelp: datoCmsGetHelp {
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

export default GetHelp
