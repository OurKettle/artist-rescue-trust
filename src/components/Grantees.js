import React from "react"

// Gatsby
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Pagination from "../components/Pagination"

// Styles
import { StyledGrid } from "../styles/StyledGrid"
import { StyledGrantees } from "../styles/StyledGrantees"

const Grantees = ({ grantees, location, pageContext }) => {
  const { previous, next } = pageContext

  const renderPagination = () => {
    if (location.pathname.includes("our-grantees")) {
      return (
        <Pagination
          previous={next}
          next={previous}
          type="our-grantees"
          page="Grantee"
        />
      )
    }
  }

  return (
    <StaticQuery
      query={granteesQuery}
      render={data => {
        // const contentBlock = data.ourGrantees
        const { questions } = grantees
        const { links } = grantees
        console.log(links)
        // const { image } = grantees

        return (
          <StyledGrantees>
            <StyledGrid className="main-content">
              {/* <div className="box a">
                <h1 className="heading">{contentBlock.heading}</h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: contentBlock.bodyNode.childMarkdownRemark.html,
                  }}
                />
                <hr></hr>
              </div> */}
              <div className="box b">
                <div className="grantee">
                  <div className="image">
                    <Img
                      key={grantees.id}
                      fluid={grantees.image.fluid}
                      duration={1000}
                    />
                  </div>

                  <h2 className="name">{grantees.name}</h2>
                  <p className="title">{grantees.title}</p>
                  <p className="bio">{grantees.bio}</p>
                  {questions.map(block => (
                    <div className="question-block">
                      <p className="question">{block.question}</p>
                      <div
                        className="answer"
                        dangerouslySetInnerHTML={{
                          __html: block.answerNode.childMarkdownRemark.html,
                        }}
                      />
                    </div>
                  ))}
                  <div className="footer">
                    <a
                      key={grantees.id}
                      href={grantees.mainUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="button">See Website</div>
                    </a>

                    <div
                      className="social-networks"
                    >
                      {links.map(block => (
                        <a
                          href={block.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {block.icon &&
                            <img
                              src={`https://www.datocms-assets.com/${block.icon.path}`}
                              alt=""
                            />
                          }
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="pagination">{renderPagination()}</div>
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
  }
`

export default Grantees
