import React from "react"
import PropTypes from "prop-types"
import { Link, StaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"

// Components
import { MobileNav, Nav, FooterNav } from "./nav"
import logo from "../images/logo.png"

// Styles
import { Wrapper, Header, Footer } from "../styles/Layout"

const Layout = ({ location, children }) => {
  return (
    <StaticQuery
      query={pageQuery}
      render={data => {
        return (
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
              <main>{children}</main>
            </div>
            <Footer>
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <FooterNav></FooterNav>
            </Footer>
          </Wrapper>
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
  }
`

export default Layout
