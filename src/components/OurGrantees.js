import React from 'react';

// Gatsby
import { StaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"

// Styles
import { StyledGrid } from "../styles/StyledGrid"
import { StyledGrantees } from "../styles/StyledGrantees"

const OurGrantees = () => {
  return (
    <StaticQuery
      query={granteesQuery}
      render={data => {
        const contentBlock = data.ourGrantees
        const grantees = data.grantees.nodes

        return (
          <StyledGrantees>
            <StyledGrid className="main-content">
              <div className="box">
                <h1 className="heading">{contentBlock.heading}</h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: contentBlock.bodyNode.childMarkdownRemark.html,
                  }}
                />
                <hr></hr>
              </div>
              <div className="grantee-grid">
                {grantees.map(grantee => {
                  // const { contentBlocks } = grantee
                  return (
                    <div className="grantee">
                      <div className="image">
                        <Img
                          key={grantee.id}
                          fluid={grantee.image.fluid}
                          duration={1000}
                        />
                      </div>
                      <h2 className="name">{grantee.name}</h2>
                      <p className="title">{grantee.title}</p>
                      <Link key={grantee.id} to={`/our-grantees/${grantee.slug}`}>
                        <div className="button">Read More</div>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </StyledGrid>
          </StyledGrantees>
        )
      }}
    />
  )
}

export const granteesQuery = graphql`
  query {
    ourGrantees: datoCmsOurGrantee {
      heading
      bodyNode {
        childMarkdownRemark {
          html
        }
      }
    }
    grantees: allDatoCmsGrantee {
      nodes {
        id
        slug
        image {
          fluid(maxWidth: 300) {
            ...GatsbyDatoCmsFluid
          }
        }
        name
        title
        questions {
          ... on DatoCmsQuestion {
            question
            answerNode {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  }
`

export default OurGrantees
