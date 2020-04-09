import React from "react"

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { StyledHero } from "../styles/StyledHero"

const Hero = () => {
  return (
    <StaticQuery
      query={heroQuery}
      render={data => {
        const hero = data.home
        const buttons = data.home.buttonCta
        console.log(data.home.buttonCta)

        return (
          <StyledHero>
            <div className="image-wrapper">
              <div className="image">
                <Img
                  fluid={hero.image.fluid}
                  duration={1000}
                  alt="Hero Image"
                />
              </div>
            </div>
            <div className="hero-content-wrapper">
              <div className="hero-content">
                <h1 className="heading">
                  {hero.heading}{" "}
                  <span className="highlight">{hero.headingHighlight}
                  </span>{" "}
                </h1>
                <h5 className="sub-heading">{hero.subHeading}</h5>
                <div className="button-group">
                  {buttons.map(button => (
                    <div key={button.id} className="button-cta">
                      <button className="text">{button.buttonText}</button>
                      <div className="subtext">{button.subtext}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </StyledHero>
        )
      }}
    />
  )
}

export const heroQuery = graphql`
  query {
    home: datoCmsHome {
      image: backgroundImage {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      heading
      headingHighlight
      subHeading
      buttonCta {
        id
        buttonText
        subtext
      }
    }
  }
`

export default Hero
