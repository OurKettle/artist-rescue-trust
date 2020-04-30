import React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { HelmetDatoCms } from "gatsby-source-datocms"

// Components
import { MobileNav, Nav, FooterNav, SocialNav } from "./nav"
import Hero from "../components/Hero"

// Styles
import { Wrapper, Header, Footer } from "../styles/Layout"
import { GlobalStyle } from "../styles/GlobalStyles"

const Layout = ({ location, children }) => {
  return (
    <StaticQuery
      query={pageQuery}
      render={data => {
        const logo = data.logo
        return (
          <>
            <GlobalStyle />
            <Wrapper>
              <HelmetDatoCms>
                <script
                  src="https://kit.fontawesome.com/856c74694a.js"
                  crossorigin="anonymous"
                ></script>
              </HelmetDatoCms>
              <MobileNav location={location.pathname} />
              <div className="app">
                <Header>
                  <div className="header-left">
                    <Link to={`/`}>
                      <div className="logo"></div>
                    </Link>
                  </div>
                  <div className="header-right">
                    <Nav location={location.pathname} />
                  </div>
                </Header>
                <main>
                  {location.pathname === "/" ? (
                    <Hero location={location}></Hero>
                  ) : null}
                  {children}
                </main>
              </div>
              {location.pathname === "/" ? null : (
                <Hero location={location}></Hero>
              )}
              <Footer>
                <Img
                  className="logo"
                  fluid={logo.fluid}
                  duration={1000}
                  alt="ART Logo"
                />
                <FooterNav></FooterNav>
                <SocialNav></SocialNav>
              </Footer>
            </Wrapper>
          </>
        )
      }}
    />
  )
}

Layout.defaultProps = {
  location: {},
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    logo: datoCmsAsset(filename: { eq: "logo.png" }) {
      fluid(maxWidth: 400, maxHeight: 181) {
        ...GatsbyDatoCmsFluid
      }
    }
  }
`

export default Layout
