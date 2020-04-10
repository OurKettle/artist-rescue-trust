import React from "react"

// Gatsby
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { HelmetDatoCms } from "gatsby-source-datocms"

// Styles
import { StyledHomePage } from "../styles/StyledHomePage"

const HomePage = () => {
  return (
    <StaticQuery
      query={homeQuery}
      render={data => {
        const h1 = data.h1
        const h2 = data.h2
        const h3 = data.h3
        const h4 = data.h4
        const h5 = data.h5

        const home = data.home
        const quote1 = data.home.quotes[0]
        const quote2 = data.home.quotes[1]
        const contentBlock1 = data.home.contentBlocks[0]
        const contentBlock2 = data.home.contentBlocks[1]
        const contentBlock3 = data.home.contentBlocks[2]

        return (
          <StyledHomePage className="main-content">
            <HelmetDatoCms>
              <script
                src="https://donorbox.org/widget.js"
                paypalExpress="false"
              ></script>
            </HelmetDatoCms>
            <div className="box a">
              <Img className="image" fluid={h1.image.fluid} duration={1000} />
            </div>
            <div className="box b">
              <blockquote className="right">
                <p>"{quote1.quote}"</p>
                <footer>
                  <span>{quote1.name},</span>
                  <br />
                  {quote1.title}
                </footer>
              </blockquote>
            </div>
            <div className="box c">
              <Img fluid={h3.image.fluid} duration={1000} />
            </div>
            <div className="box d">
              <Img fluid={h5.image.fluid} duration={1000} />
            </div>
            <div className="box e">
              <p className="intro">{home.mainIntro}</p>

              <h1 className="heading">{contentBlock1.heading}</h1>
              <p className="intro small">{contentBlock1.callOut}</p>
              <div
                dangerouslySetInnerHTML={{
                  __html: contentBlock1.bodyNode.childMarkdownRemark.html,
                }}
              />
            </div>
            <div className="box f">
              <h1 className="heading">{contentBlock2.heading}</h1>
              <p className="intro small">{contentBlock2.callOut}</p>
              <div
                dangerouslySetInnerHTML={{
                  __html: contentBlock2.bodyNode.childMarkdownRemark.html,
                }}
              />
            </div>
            <div className="box g">
              <h1 className="heading">{contentBlock3.heading}</h1>
              <p className="intro small">{contentBlock3.callOut}</p>
              <div className="icon-group">
                <div className="icon">
                  <i className="far fa-circle"></i>
                  <p>Musical Artists</p>
                </div>
                <div className="icon">
                  <i className="far fa-circle"></i>
                  <p>Visual Artists</p>
                </div>
                <div className="icon">
                  <i className="far fa-circle"></i>
                  <p>Literary Artists</p>
                </div>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: contentBlock3.bodyNode.childMarkdownRemark.html,
                }}
              />
            </div>
            <div className="box h donor-box">
              <div
                dangerouslySetInnerHTML={{
                  __html: home.donorboxEmbedNode.childMarkdownRemark.html,
                }}
              />
            </div>
            <div className="box i">
              <Img fluid={h2.image.fluid} duration={1000} />
            </div>
            <div className="box j">
              <blockquote className="left">
                <p>“{quote2.quote}”</p>
                <footer>
                  <span>{quote2.name},</span>
                  <br />
                  {quote2.title}
                </footer>
              </blockquote>
            </div>
            <div className="box k">
              <Img fluid={h4.image.fluid} duration={1000} />
            </div>
          </StyledHomePage>
        )
      }}
    />
  )
}

export const homeQuery = graphql`
  query {
    home: datoCmsHome {
      mainIntro
      quotes {
        ... on DatoCmsQuote {
          id
          quote
          name
          title
        }
      }
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
      donorboxEmbedNode {
        childMarkdownRemark {
          html
        }
      }
    }

    h1: file(relativePath: { eq: "homepage-1.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    h2: file(relativePath: { eq: "homepage-2.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    h3: file(relativePath: { eq: "homepage-3.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    h4: file(relativePath: { eq: "homepage-4.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    h5: file(relativePath: { eq: "homepage-5.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default HomePage
