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
        const buttons = data.home.heroButtonCta

        return (
          <StyledHero>
            <Img
              className="hero-bg-image"
              fluid={hero.image.fluid}
              duration={1000}
              alt="Hero Image"
            />
            <div className="hero-content-wrapper">
              <div className="hero-content">
                <h1 className="heading">
                  {hero.heroHeading} <br />
                  <span className="highlight">
                    {hero.heroHeadingHighlight}
                  </span>{" "}
                </h1>
                <h5 className="sub-heading">{hero.heroSubHeading}</h5>
                <div className="button-group">
                  {buttons.map(button => (
                    <div key={button.id} className="button-cta">
                      <a
                        className="button text"
                        {...(button.buttonText === "Give Help"
                          ? { href: "/donate" }
                          : { href: "/sign-up" })}
                      >
                        {button.buttonText}
                      </a>
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
      image: heroBackgroundImage {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      heroHeading
      heroHeadingHighlight
      heroSubHeading
      heroButtonCta {
        id
        buttonText
        subtext
      }
    }
  }
`

export default Hero
