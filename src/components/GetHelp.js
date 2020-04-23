import React, { useEffect } from "react"

// Gatsby
import { StaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"

// Styles
import { StyledGrid } from "../styles/StyledGrid"

const GetHelp = () => {
  
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://services.cognitoforms.com/s/bbN8iw1MJUqjPe6aHn-_rw"
    document.body.appendChild(script)
    script.addEventListener("load", () => {
      console.log("loaded");
    })
  }, [])

  // useEffect(() => {
  //   try {
  //     Cognito.load("forms", { id: "71" });
  //     // Cognito.setCss(
  //     //   ".cognito button {border-radius: 0 !important;text-transform: uppercase !important background-color: red !important;}"
  //     // );
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }, [])

  return (
    <StaticQuery
      query={getHelpQuery}
      render={data => {
        const contentBlock1 = data.getHelp.contentBlocks[0]
        const contentBlock2 = data.getHelp.contentBlocks[1]

        return (
          <StyledGrid className="main-content">
            <HelmetDatoCms></HelmetDatoCms>
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
              <div className="cognito"></div>
            </div>
          </StyledGrid>
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
      cognitoFormEmbedNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default GetHelp
