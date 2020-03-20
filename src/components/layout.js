import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"

import "./layout.css"

// Components
import { MobileNav, NavLeft, NavRight, FooterNav } from "./nav"

// Styles
import { Wrapper, Header, Footer } from "../styles/Layout"

const Layout = ({ location, children }) => {
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
          <NavLeft location={location.pathname} />
          <h3 className="title">
            <Link to={`/`}>Together UBI</Link>
          </h3>
          <NavRight location={location.pathname} />
        </Header>
        <main>{children}</main>
      </div>
      <Footer>
        <FooterNav></FooterNav>
        <div>Powered By Good Conscience</div>
      </Footer>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
