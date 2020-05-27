import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { StyledGrid } from "../styles/StyledGrid"

import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import StripeForm from "./StripeForm"
import { StyledStripeForm } from "../styles/StyledStripeForm"

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

const GiveHelp = () => {
  return (
    <StaticQuery
      query={giveHelpQuery}
      render={data => {
        const contentBlock1 = data.giveHelp.contentBlocks[0]

        return (
          <StyledGrid className="main-content">
            <div className="box a">
              <h1 className="heading">{contentBlock1.heading}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: contentBlock1.bodyNode.childMarkdownRemark.html,
                }}
              />
            </div>

            <div className="box b">
              <StyledStripeForm>
                <Elements stripe={stripePromise}>
                  <StripeForm />
                </Elements>
              </StyledStripeForm>
            </div>

            <div className="bix c">
              <div className="footer">
                <div
                  dangerouslySetInnerHTML={{
                    __html: contentBlock1.footerNode.childMarkdownRemark.html,
                  }}
                />
              </div>
            </div>
          </StyledGrid>
        )
      }}
    />
  )
}

export const giveHelpQuery = graphql`
  query {
    giveHelp: datoCmsGiveHelp {
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
          footerNode {
            childMarkdownRemark {
              html
            }
          }
        }
      }
      donorboxEmbedNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default GiveHelp
