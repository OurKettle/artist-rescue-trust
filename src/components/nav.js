// http://negomi.github.io/react-burger-menu/
import React from "react"

// Gatsby
import { Link } from "gatsby"

// Components
import { slide as Menu } from "react-burger-menu"

// Styles
import {
  StyledNav,
  StyledMobileNav,
  StyledFooterNav,
} from "../styles/StyledNav"

export const NavLeft = ({ location }) => {
  return (
    <StyledNav>
      <Link to="/" id="about" className="menu-item" activeClassName="active">
        About
      </Link>
      <Link
        to="/how-it-works"
        id="how-it-works"
        className="menu-item"
        activeClassName="active"
      >
        How It Works
      </Link>
      <Link to="/team" id="team" className="menu-item" activeClassName="active">
        Team
      </Link>
    </StyledNav>
  )
}

export const NavRight = ({ location }) => {
  return (
    <StyledNav>
      <Link
        to="/sign-up"
        id="sign-up"
        className="menu-item"
        activeClassName="active"
      >
        Sign Up
      </Link>
      <Link
        to="/donate"
        id="donate"
        className="menu-item"
        activeClassName="active"
      >
        Donate
      </Link>
    </StyledNav>
  )
}

export const MobileNav = ({ location }) => {
  var styles = {
    bmMenuWrap: {
      transitionDuration: ".3s",
    },
  }

  return (
    <StyledMobileNav>
      <Menu styles={styles} width={"250px"} right noOverlay disableAutoFocus>
        <Link id="About" to="/" className="menu-item">
          About
        </Link>
        <Link id="how-it-works" to="/how-it-works" className="menu-item">
          How It Works
        </Link>
        <Link id="team" to="/team" className="menu-item">
          Our Team
        </Link>
        <Link id="sign-up" to="/sign-up" className="menu-item">
          Sign Up
        </Link>
        <Link id="donate" to="/donate" className="menu-item">
          Donate
        </Link>
      </Menu>
    </StyledMobileNav>
  )
}

export const FooterNav = () => {
  return (
    <StyledFooterNav>
      <Link
        to="/terms-of-service"
        id="tos"
        className="menu-item"
        activeClassName="active"
      >
        Terms of Service
      </Link>
      <Link
        to="/privacy-policy"
        id="privacy-policy"
        className="menu-item"
        activeClassName="active"
      >
        Privacy Policy
      </Link>
      <Link
        to="/sign-up"
        id="sign-up"
        className="menu-item"
        activeClassName="active"
      >
        Sign Up
      </Link>
      <Link
        to="/donate"
        id="donate"
        className="menu-item"
        activeClassName="active"
      >
        Donate
      </Link>
    </StyledFooterNav>
  )
}
