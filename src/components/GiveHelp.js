import React from "react"

// Gatsby
import { StaticQuery, graphql } from "gatsby"

// Styles
import { StyledGrid } from "../styles/StyledGrid"

// Stripe
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import StripeForm from "./StripeForm"
import { StyledStripeForm } from "../styles/StyledStripeForm"

const stripePromise = loadStripe("pk_test_kfhmKZBuex2hxS8FQ6t0xoTe003Xv8kQzG")

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
              <p className="footer">
                <div
                  dangerouslySetInnerHTML={{
                    __html: contentBlock1.footerNode.childMarkdownRemark.html,
                  }}
                />
              </p>
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
